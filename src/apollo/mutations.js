import gql from "graphql-tag"

export const insertMenuItem = gql`
  mutation($data: ItemInsertInput!){
    insertOneItem(data: $data){
      _id
      title {
        en
        sp
      }
      price
      description {
        en
        sp
      }
      parent
      order
    }
  }
`

export const insertCategory = gql`
  mutation($data: CategoryInsertInput!){
    insertOneCategory(data: $data){
      _id
      title {
        en
        sp
      }
    }
  }
`

export const insertSubcategory = gql`
  mutation($data: SubcategoryInsertInput!){
    insertOneSubcategory(data: $data){
      _id
      title {
        en
        sp
      }
      parent
    }
  }
`

export const updateMenuItem = gql`
  mutation($query: ItemQueryInput, $set: ItemUpdateInput!){
    updateOneItem(query: $query, set: $set){
      _id
      title {
        en
        sp
      }
      price
      description {
        en
        sp
      }
      parent
      order
    }
  }
`

export const updateSubcategory = gql`
  mutation($query: ItemQueryInput, $set: SubcategoryUpdateInput!){
    updateOneSubcategory(query: $query, set: $set){
      _id
      title {
        en
        sp
      }
      parent
    }
  }
`

export const updateCategory = gql`
  mutation($query: CategoryQueryInput, $set: CategoryUpdateInput!){
    updateOneCategory(query: $query, set: $set){
      _id
      title {
        en
        sp
      }
    }
  }
`

export const deleteMenuItem = gql`
  mutation($query: ItemQueryInput!){
    deleteOneItem(query: $query){
      _id
      title {
        en
        sp
      }
      price
      description {
        en
        sp
      }
      parent
      order
    }
  }
`

export const deleteCategory = gql`
  mutation($query: CategoryQueryInput!){
    deleteOneCategory(query: $query){
      _id
      title
    }
  }
`

export const deleteSubcategory = gql`
  mutation($query: SubcategoryQueryInput!){
    deleteOneSubcategory(query: $query){
      _id
      title {
        en
        sp
      }
      parent
    }
  }
`

export const insertBand = gql`
  mutation($data: BandInsertInput!){
    insertOneBand(data: $data){
      _id
      title
      image
      description
    }
  }
`
