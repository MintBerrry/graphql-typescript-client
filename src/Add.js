import React,{useState} from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {GET_USERS} from './queries'
const ADD_USER = gql`
  mutation AddUser($username: String!,$email:String!) {
    addUser(username: $username,email:$email) {
      username
      email
    }
  }
`;

const AddTodo = () => {
    const [state,setState] = useState({username:"",email:""})

  return (
    <Mutation mutation={ADD_USER}
     refetchQueries={() => [{ query: GET_USERS }]}
      //  update={(cache, { data: { addUser } }) => {
      //   const { users } = cache.readQuery({ query: GET_USERS });
      //   cache.writeQuery({
      //     query: GET_USERS,
      //     data: { users: users.concat([addUser]) },
      //   });
      // }}
    >
      {(addUser, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addUser({ variables: { username: state.username,email:state.email } });
              setState({...state,username:"",email:""})
            }}
          >
            <input
            onChange={(e) => setState({...state,username:e.target.value})}
              value={state.username}
            />
            <input
            onChange={(e) => setState({...state,email:e.target.value})}
              value={state.email}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default AddTodo