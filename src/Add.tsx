import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { GET_USERS } from "./queries";
const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!) {
    addUser(username: $username, email: $email) {
      username
      email
    }
  }
`;
interface IMutation{
  addUser:(username:string,email:string) => void
  
}

const AddTodo = () => {
  const [state, setState] = useState({ username: "", email: "" });

  return (
    // TODO - not sure if the <IMutation> is correct, but typescript complains without
    <Mutation<IMutation> mutation={ADD_USER} refetchQueries={() => [{ query: GET_USERS }]}>
      {(addUser) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addUser({
                variables: { username: state.username, email: state.email }
              });
              setState({ ...state, username: "", email: "" });
            }}
          >
            <input
              onChange={e => setState({ ...state, username: e.target.value })}
              value={state.username}
            />
            <input
              onChange={e => setState({ ...state, email: e.target.value })}
              value={state.email}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
export default AddTodo;
