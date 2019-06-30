import React, { Fragment } from 'react';

import { Query } from 'react-apollo';
import Add from './Add'
import Remove from './Remove'
import { GET_USERS } from './queries'
interface Data {
  users: Array<{ id: string; username: string, email: string }>;
};


const App: React.FC = () => {
  return <Query<Data> query={GET_USERS} fetchPolicy="cache-and-network"
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <Fragment><div>{data && data.users.map((user) => {
          const { username, email, id } = user

          return <div key={id}>{username} - {email} <Remove id={id}/></div>
        })}</div>
          <Add /></Fragment>
      )
    }}
  </Query>
}
export default App