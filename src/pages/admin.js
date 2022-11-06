import React, { useState } from "react"
import * as Realm from "realm-web"
import Editor from "../components/admin/editor"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const Admin = () => {

// ADMIN PAGE

  const app = new Realm.App({ id: process.env.GATSBY_REALM_APP_ID })

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [user, setUser] = useState(app.currentUser)
  const [editor, setEditor] = useState(null)

  const login = async () => {
    const realmCredentials = Realm.Credentials.emailPassword(
      credentials.email,
      credentials.password
    )
    if (credentials.email.length !== 0 && credentials.password.length !== 0) {
      try {
        const user = await app.logIn(realmCredentials)
        setUser(user)
        setCredentials({ email: "", password: "" })
      } catch (err) {
        console.error("Failed to log in", err)
      }
    }
  }

  const logout = async () => {
    const userId = app.currentUser.id
    const user = await app.allUsers[userId].logOut()
    setUser(user)
  }

    return (
            <div className="fixed w-screen h-screen top-0 left-0">
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                />
                { user ?
                    <>
                    <div className="h-[140px]">
                        <div className="flex flex-row items-center w-full pt-4 px-4">
                            <span
                                className="headers text-4xl"
                            >
                                Jax Admin
                            </span>
                            <button
                                onClick={() => logout()}
                                className="ml-auto px-4 py-2 headers rounded-sm shadow-lg text-xl text-white bg-red-600 hover:bg-green-600"
                            >
                                Logout
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-2 m-4">
                            <button 
                                    onClick={() => setEditor('pages')}
                                    className={`px-4 py-2 headers rounded-sm shadow-lg text-2xl ${editor === 'pages' ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}
                                >
                                    Pages
                                </button>
                                <button 
                                    onClick={() => setEditor('menu')}
                                    className={`px-4 py-2 headers rounded-sm shadow-lg text-2xl ${editor === 'menu' ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}
                                >
                                    Menu
                                </button>
                                <button 
                                    onClick={() => setEditor('schedule')}
                                    className={`px-4 py-2 headers rounded-sm shadow-lg text-2xl ${editor === 'schedule' ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}
                                >
                                    Schedule
                                </button>
                                <button 
                                    onClick={() => setEditor('profile')}
                                    className={`px-4 py-2 headers rounded-sm shadow-lg text-2xl ${editor === 'profile' ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}
                                >
                                    Profile
                                </button>
                        </div>
                        </div>
                        <Editor user={user} app={app} editor={editor} />
                    </>
                :

                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full max-w-screen-sm p-4 md:p-8 bg-black/50 rounded-lg shadow-lg">
                        <span className="text-2xl headers mb-4">Login to Jax Admin</span>
                        <div className="flex flex-col my-1">
                            <label htmlFor="email" className="headers text-lg">
                            Email
                            </label>
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={e =>
                                setCredentials({
                                email: e.target.value,
                                password: credentials.password,
                                })
                            }
                            value={credentials.email}
                            className="text-black rounded-sm shadow-lg px-2 py-1 my-1"
                            />
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="password" className="headers text-lg">
                            Password
                            </label>
                            <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e =>
                                setCredentials({
                                email: credentials.email,
                                password: e.target.value,
                                })
                            }
                            value={credentials.password}
                            className="text-black rounded-sm shadow-lg px-2 py-1 my-1"
                            />
                        </div>
                        <button
                            onClick={() => login()}
                            className="px-4 py-2 headers mt-4 rounded-sm shadow-lg text-xl text-white bg-red-600 hover:bg-green-600"
                        >
                            Login
                        </button>
                    </div>

                }

            </div>
            
    )
  } 

export default Admin
