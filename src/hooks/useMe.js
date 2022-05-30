import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (variables) => {
  const result = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables
  })
    
  return result
};

export default useMe;