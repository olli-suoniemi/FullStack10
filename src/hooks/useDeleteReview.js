import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW)

  const deleteReview = async ({ id }) => {
    const response = await mutate({ variables: { deleteReviewId: id }})

    return response
  };

  return [deleteReview, result];
};

export default useDeleteReview