import { useQuery } from '@apollo/client';
import { REPOSITORY_LIST } from '../graphql/queries';

const useRepositories = () => {
  const result = useQuery(REPOSITORY_LIST, {
    fetchPolicy: 'cache-and-network'
  })
    
  return result
};

export default useRepositories;