import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { GET_USERS } from "./queries";

const REMOVE_USER = gql`
  mutation RemoveUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
interface RemoveUserProps {
    id: any
}
// TODO - remove any for GraphQLID
interface IMutation {
    removeUser: (id: any) => void

}

const RemoveUser = (props: RemoveUserProps) => {
    const { id } = props

    return (
        // TODO - not sure if the <IMutation> is correct, but typescript complains without
        <Mutation<IMutation> mutation={REMOVE_USER} refetchQueries={() => [{ query: GET_USERS }]}>
            {(removeUser) => (
                <div onClick={() => removeUser({ variables: { id } })}>
                    x
        </div>
            )}
        </Mutation>
    );
};
export default RemoveUser;
