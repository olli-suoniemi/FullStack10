import { useQuery } from '@apollo/client';
import { REPOSITORY_ITEM } from '../graphql/queries';

const useRepositoryItem = (id) => {
  const result = useQuery(REPOSITORY_ITEM, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id }
  })
    
  return result
};

export default useRepositoryItem;