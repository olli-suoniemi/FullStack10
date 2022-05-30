import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/queries";

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP)

  const signUp = async ({ username, password }) => {
    const response = await mutate({ variables: { user: { username, password } }})

    return response
  };

  return [signUp, result];
};

export default useSignUp