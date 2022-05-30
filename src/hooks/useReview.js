import { useMutation } from "@apollo/client";
import { REVIEW } from "../graphql/queries";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW)

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const response = await mutate({ variables: { review: { ownerName, repositoryName, rating: Number(rating), text } }})
    return response
  };

  return [createReview, result];
};

export default useReview