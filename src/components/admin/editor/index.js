import React, { useEffect, useState } from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import Modal from './Modal'
import MenuEditor from '../menu'
import ScheduleEditor from '../schedule'

const Editor = ({ user, app, editor }) => {

    const [ apollo, setApollo ] = useState(null)

    const graphqlUri = `https://westus.azure.realm.mongodb.com/api/client/v2.0/app/${process.env.GATSBY_REALM_APP_ID}/graphql`

    const getValidAccessToken = async () => {
      await app.currentUser.refreshCustomData();
      return app.currentUser.accessToken
    }
  
    const setApolloClient = async () => {
      const accessToken = await getValidAccessToken()
      return new ApolloClient({
          link: new HttpLink({
            uri: graphqlUri,
            fetch: async (uri, options) => {
              options.headers.Authorization = `Bearer ${accessToken}`;
              return fetch(uri, options);
            },
          }),
          cache: new InMemoryCache(),
        })
    }
  
    useEffect(() => {
      if(user){
          setApolloClient()
          .then(function (res) {
              setApollo(res)
          })
      }
      else{
          setApollo(null)
      }
    }, [ user ])

    if(apollo){
    return(
            <ApolloProvider client={apollo}>
                <div className="fixed top-[140px] left-0 h-[calc(100%-140px)] w-full flex flex-col p-4 overflow-y-auto bg-zinc-900/80">
                    <Modal />
                    { editor === 'pages' ?
                        <>Pages</>
                    : editor === 'menu' ?
                        <MenuEditor />
                    : editor === 'schedule' ?
                        <ScheduleEditor/>
                    : editor === 'profile' ?
                        <>Profile</>
                    : <>Select An Item</>
                    }
                </div>
            </ApolloProvider>
        )
    }
    else{
        return null
    }
}

export default Editor
