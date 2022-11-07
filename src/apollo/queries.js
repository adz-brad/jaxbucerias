import gql from "graphql-tag"

export const categoriesQuery = gql`
query GetCategories{
  categories {
    _id
    title {
      en
      sp
    }
  }
}`

export const subcategoriesQuery = gql`
query GetSubcategories($parent: String!) {
  subcategories(query: { parent: $parent }) {
    _id
    title {
      en
      sp
    }
    parent
  }
}`

export const itemsQuery = gql`
query GetItems($parent: String!) {
  items(query: { parent: $parent }, sortBy: ORDER_ASC) {
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
}`

export const bandsQuery = gql`
query GetBands{
  bands{
    _id
    title
    image
    description
  }
}`