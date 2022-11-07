require('dotenv').config()
const fetch = require('node-fetch');

// Create Menu Nodes

exports.sourceNodes = async ({ actions, createContentDigest }) => {

    const { createNode } = actions;

    const fetchData = async ({endpoint, query, variables,}) => {
        const headers = {
            "Content-Type": "application/json",
            "apiKey": process.env.GATSBY_REALM_API_KEY
        } 
        const graphql = JSON.stringify({
            query: query,
            variables: variables
        })
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: graphql,
            redirect: 'manual'
        };
        const data = await fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => { return result})
        .catch(error => console.log('error', error));
        return data
    }

    const categories = await fetchData({
        endpoint: process.env.GATSBY_REALM_GQL_ENDPOINT,
        query: "{\r\n    categories {\r\n        _id\r\n        title {\r\n            en\r\n            sp\r\n        }\r\n    }\r\n}",
        variables: {},
    }).then(res => { return res.data.categories })

    const subcategories = await fetchData({
        endpoint: process.env.GATSBY_REALM_GQL_ENDPOINT,
        query: "{\r\n    subcategories {\r\n        _id\r\n        title {\r\n            en\r\n            sp\r\n        }\r\n        parent\r\n    }\r\n}",
        variables: {},
    }).then(res => { return res.data.subcategories })

    const items = await fetchData({
        endpoint: process.env.GATSBY_REALM_GQL_ENDPOINT,
        query: "{\r\n    items(limit: 1000) {\r\n        _id\r\n        title {\r\n            en\r\n            sp\r\n        }\r\n        price\r\n        description {\r\n            en\r\n            sp\r\n        }\r\n        parent\r\n    order\r\n }\r\n}",
        variables: {},
    }).then(res => { return res.data.items })

    if(categories){
     categories.forEach(async(category) => {
        let children = [] 
        if(subcategories){
            const filtered = subcategories.filter(subcategory => subcategory.parent === category._id)
            filtered.map(item => children.push(item._id))
        }
        if(items){
            const filteredItems = items.filter(item => item.parent === category._id)
            const sortedItems = filteredItems.sort((a, b) => a.order > b.order ? 1 : -1)
            sortedItems.map(item => children.push(item._id))
        }
        await createNode({
            id: category._id,
            title: category.title,
            parent: null,
            children: children,
            internal: {
                type: `Category`,
                content: JSON.stringify(category),
                contentDigest: createContentDigest(category)
              }
        })
     })   
    }

    if(subcategories){
        subcategories.forEach(async(subcategory) => {
            let children = []
            const filteredSubcategories = subcategories.filter(subcat => subcat.parent === subcategory._id)
            filteredSubcategories.map(item => children.push(item._id))
            if(items){
                const filteredItems = items.filter(item => item.parent === subcategory._id)
                const sortedItems = filteredItems.sort((a, b) => a.order > b.order ? 1 : -1)
                sortedItems.map(item => children.push(item._id))
            }
           await createNode({
               id: subcategory._id,
               title: subcategory.title,
               parent: subcategory.parent,
               children: children,
               internal: {
                   type: `Subcategory`,
                   content: JSON.stringify(subcategory),
                   contentDigest: createContentDigest(subcategory)
                 }
           })
        })   
       }

       if(items){
        items.forEach(async(item) => {
           await createNode({
               id: item._id,
               title: item.title,
               description: item.description,
               price: item.price,
               order: item.order,
               parent: item.parent,
               internal: {
                   type: `Item`,
                   content: JSON.stringify(item),
                   contentDigest: createContentDigest(item)
                 }
           })
        })   
       }


}

