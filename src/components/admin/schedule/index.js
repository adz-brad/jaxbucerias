import React, { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import { MdEventNote, MdAccessTime, MdAddCircleOutline } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { modalState } from '../../../recoil'
import Bands from './bands/Bands'
import AddEvent from './events/AddEvent'
import EditEvent from './events/EditEvent'

const ScheduleEditor = () => {

    const initDate = useMemo(() => new Date(), [])
    const [ date, setDate ] = useState(initDate)

    const setModal = useSetRecoilState(modalState)

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]

      let selectedDate = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

      const events = [
        {
            title: 'Calavera Beach',
            id: '0123456',
            description: 'Calavera Beach in IN DA HOUSE tonight at Jax!'
        },
        {
            title: 'Trivia Night',
            id: '234567',
            description: 'Its Trivia Night at Jax!'
        }
      ]

      const schedule = [
        {
            child: '0123456',
            date: 'Monday October 31, 2022',
            time: {
                time: '8:30',
                am: false
            } 
        },
        {
            child: '234567',
            date: 'Friday October 28, 2022',
            time: {
                time: '5:00',
                am: false
            }
        }
      ]

      let selectedDateSchedule = schedule.filter(item => item.date === selectedDate)

    return(
        <div className="flex flex-row h-full w-full">
            <div className="h-full w-1/3 flex flex-col p-4">
                <span className="headers text-4xl mb-4">Select A Date</span>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    inline
                />
                <div className="grid grid-cols-1 gap-2 grow">
                    <button 
                        className="bg-zinc-800/30 hover:bg-zinc-800/50 rounded-md headers text-3xl hover:text-red-600 transition-all"
                        onClick={() => setModal({open: true, content: <Bands />})}
                    >
                        Manage Bands
                    </button>
                </div>
            </div>
            <div className="h-full w-2/3 flex flex-col p-4 bg-zinc-900/50">
            <span className="headers text-4xl mb-4">{selectedDate}</span>
                <ul className='w-full overflow-y-auto p-2 grid grid-cols-1 gap-2'>
                {selectedDateSchedule ?
                    selectedDateSchedule.map((item) => {
                        const scheduledEvents = events.filter(event => event.id === item.child)
                        return(
                        <>
                        {scheduledEvents.map((event, i) => {
                            return(
                                <li className="w-full" key={i}>
                                    <button 
                                        className="w-full flex flex-col bg-zinc-800/50 hover:bg-zinc-800/80 rounded-md p-4"
                                        onClick={() => setModal({open: true, content: <EditEvent event={event} />})}
                                    >
                                        <span className="headers text-red-600 mb-1 text-3xl">
                                            {event.title}
                                        </span>
                                        <div className="flex flex-row items-center mb-1">
                                        <MdAccessTime className="text-2xl"/>
                                        <span className="text-xl ml-2">
                                            {item.time.time}{item.time.am ? 'AM' : 'PM'}
                                        </span>
                                        </div>
                                        <div className="flex flex-row items-center">
                                        <MdEventNote className="text-2xl"/>
                                        <span className="text-xl ml-2">
                                            {event.description}
                                        </span>
                                        </div>
                                    </button>
                                </li>
                            )
                        })}            
                        </>
                        )
                    })
                : null }
                    <li className="w-full">
                        <button 
                            className="w-full flex flex-row justify-center items-center bg-zinc-800/50 hover:bg-zinc-800/80 rounded-md p-4"
                            onClick={() => setModal({open: true, content: <AddEvent date={date} />})}
                        >
                            <MdAddCircleOutline className="text-3xl"/>
                            <span className="text-xl uppercase ml-2">
                                Add New Event
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ScheduleEditor