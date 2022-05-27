import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
  const result = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  })
    
  return result
};

export default useMe;