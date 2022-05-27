import { gql } from "@apollo/client";

export const REPOSITORY_LIST = gql`
  query {
    repositories {
      totalCount
      edges {
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
      }
    }
  } 
`

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
      }
      accessToken
      expiresAt
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`

