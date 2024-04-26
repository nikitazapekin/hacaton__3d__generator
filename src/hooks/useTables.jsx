
import React, { useEffect } from 'react';
import { useSubscription, gql, useQuery } from '@apollo/client';

const TABLES_SUBSCRIPTION = gql`
  subscription Subscription {
    tables {
        amountOfChairs
        id
        timeForBooking {
          amountOfChairs
          from
          to
          timeForBooking
          tableID
          dataOfBooking
        }
      }
  }
`;
const useTables = () => {
    const { data, loading, error } = useSubscription(TABLES_SUBSCRIPTION);
return {
    data
}


}
export default useTables