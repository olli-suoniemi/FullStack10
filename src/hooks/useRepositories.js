import { useQuery } from '@apollo/client';
import { REPOSITORY_LIST } from '../graphql/queries';

const useRepositories = (orderType, filter) => {
  if (orderType === 'CREATED_AT') {
    const result = useQuery(REPOSITORY_LIST, {
      fetchPolicy: 'cache-and-network',
      variables: { orderBy: 'CREATED_AT', searchKeyword: filter  }
    })
    return result
  } else if (orderType === 'ASCENDING') {
      const result = useQuery(REPOSITORY_LIST, {
        fetchPolicy: 'cache-and-network',
        variables: { orderBy: 'RATING_AVERAGE', "orderDirection": "ASC", searchKeyword: filter }
      })
    return result
  } else if (orderType === 'DESCENDING') {
      const result = useQuery(REPOSITORY_LIST, {
        fetchPolicy: 'cache-and-network',
        variables: { orderBy: 'RATING_AVERAGE', "orderDirection": "DESC", searchKeyword: filter }
      })
      return result
  }
}

export default useRepositories;