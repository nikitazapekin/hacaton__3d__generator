import { useParams } from "react-router-dom";
import { GET_HISTORY } from "../query/history";
import {   useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import { REPLACE__FROM__HISTORY } from "../mutations/replaceFromHistory";
const useHistoryTables = ( ) => {
    const {id} =useParams()
    const { data: allTablesHistory, refetch } = useQuery(GET_HISTORY, {
        variables: {
          id: id !== undefined && id !== null ? String(id) : null,
        },
    })
    const handleRefetchHistory = () => {
        console.log("refeeeeee" +id)
        refetch()
    }

  


const [errMess, setErrMess] = useState()

    const [replaceElement] = useMutation(REPLACE__FROM__HISTORY);
    const handleReplaceTable = (item) => {
        console.log(111);


        console.log("REP ITEm" +JSON.stringify(item))
       replaceElement({
            variables: {
                input: {
                    tableID: item.tableID,
                    from: item.from,
                    to: item.to,
                    dataOfBooking: item.dataOfBooking,
                    amountOfChairs: item.amountOfChairs,
                    isBookedBy: id
                }
            }
        }).then(({ data }) => {
            console.log("DATA" + JSON.stringify(data));
            setErrMess(data)
        });
    }
return {handleRefetchHistory, allTablesHistory, handleReplaceTable, errMess }
}
 
export default useHistoryTables;