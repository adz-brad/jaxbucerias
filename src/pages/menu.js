import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import MenuItem from '../components/menuItem'

const Menu = ({ data }) => {

  //const menu = data.menu.categories

  //const [ category, setCategory ] = useState(menu ? menu[0] : null)
  //const [ subCategory, setSubCategory ] = useState(category ? category.subcategories ? category.subcategories[0] : null : null)

  //useEffect(() => {
  //  setSubCategory(category ? category.subcategories ? category.subcategories[0] : null : null)
  //}, [ category ])

  return(

    <div className="flex flex-col w-full md:my-4 px-4">
      <h1 className="headers text-6xl">
        Menu
      </h1>
      <div className="bg-zinc-900/70">
            <h2 className="flex flex-col headers text-4xl sm:text-5xl text-red-600 py-4">
                Summer 2024
                    <a className="text text-xl text-neutral-100 uppercase font-bold" href="https://www.facebook.com/JaxBucerias/" target='_blank'>
                        Summer menu available at Jax. Check Facebook For Specials.
                    </a>
            </h2>
            </div>
      {/*menu ?
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 mt-4 md:mb-2">
          {menu.map((item, i) => {
            return(
              <li 
                key={i}
                className="w-full"
              >
                <button 
                  onClick={() => setCategory(item)}
                  className={`${category === item ? 'bg-red-600' : 'bg-neutral-100 text-zinc-900'} text-2xl md:text-3xl headers uppercase w-full my-1 md:my-0  rounded-sm shadow-md py-2 md:py-4`}
                >
                  {item.title.en}
                </button>
              </li>
            )
          })}
        </ul>
      : null}
      { category ?
            category.subcategories.length > 0 ?
            <ul className="grid grid-cols-1 lg:grid-cols-5 lg:gap-2">
              {category.subcategories.map((item, i) => {
                return(
                  <li 
                    key={i}
                    className="w-full flex grow"
                  >
                    <button
                      onClick={() => setSubCategory(item)}
                      className={`${subCategory === item ? 'bg-red-600' : 'bg-neutral-100 text-zinc-900'} w-full mt-1 p-2 rounded-sm shadow-sm uppercase font-semibold`}
                    >
                      {item.title.en}
                    </button>
                  </li>
            )})}
            </ul>
            : category.items.length > 0 ?
            <>
              {category.title.en === 'Pizza' ?
                <div className="flex flex-col md:flex-row items-center md:justify-center my-2 md:my-0 text-3xl uppercase headers">
                  <div className="flex flex-row md:my-2 md:mr-4">
                    <span className="mr-2">
                      Medium 10"
                    </span>
                    <span className="text-green-600">
                      $165
                    </span>
                  </div>
                  <div className="flex flex-row md:my-2">
                    <span className="mr-2">
                      Large 14"
                    </span>
                    <span className="text-green-600">
                      $225
                    </span>
                  </div>
                </div>
              : null }
              <ul className="bg-zinc-900/60 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.items.map((item, i) => {
                  return <MenuItem category={category.title.en} key={i} _key={i} item={item} />
                })}
              </ul> 
              </>
            : null 
      : null }
      { subCategory ?
        <> 
          {subCategory.subcategories.length > 0 ?
          <ul className="bg-zinc-900/60">
          {subCategory.subcategories.map((item, i) => {
            return(
              <li key={i} className="mb-8">
                <h3 className="headers text-4xl mt-4 text-red-500">{item.title.en}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
                  {item.items ?
                    item.items.map((item, i) => {
                      return <MenuItem key={i} _key={i} item={item} />
                    })
                  : null}
                </ul>
              </li>
            )
          })}
          </ul>
          : subCategory.items.length > 0 ?
            <ul className="bg-zinc-900/60 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
              {subCategory.items.map((item, i) => {
                return <MenuItem key={i} _key={i} item={item} />
              })}
            </ul>
          : null }
        </>
            : null */}
    </div>
    
  )
}

export default Menu

export const Head = () => {
  return(
    <>
      <title>Food & Drink Menu - Jax Bucerias Nayarit</title>
      <meta name="description" content="Jax Bar & Grill in Bucerias, Nayarit, Mexico is home to the best live music in Banderas Bay. With bands on the stage every day of the week, the party never stops at Jax, your #1 destination for entertainment and nightlife in Riviera Nayarit." />
      <meta name="keywords" content="Jax, Bucerias, Nayarit, Nightlife, Live Music, Live Bands, Trivia, Events, Party, Bar, Entertainment, Centro" />
    </>
  )
}

export const pageQuery = graphql`
query {
  menu: allCategory {
    categories: nodes {
      title {
        en
        sp
      }
      items: childrenItem {
        title {
          en
          sp
        }
        price
        description {
          en
          sp
        }
        order
      }
      subcategories: childrenSubcategory {
        title {
          en
          sp
        }
        items: childrenItem {
          title {
            en
            sp
          }
          price
          description {
            en
            sp
          }
          order
        }
        subcategories: childrenSubcategory {
          title {
            en
            sp
          }
          items: childrenItem {
            title {
              en
              sp
            }
            price
            description {
              en
              sp
            }
            order
          }
        }
      }
    }
  }
}

`