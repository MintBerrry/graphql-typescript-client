
import { gql } from 'apollo-boost';
const GET_USERS = gql`
  query {
    users {
      id
      email
      username
    }
  }
`

export {GET_USERS}