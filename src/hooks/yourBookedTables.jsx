import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TABLE_INFO, GET_YOUR_BOOKED_TABLES } from "../query/table";
import { useEffect } from "react";
const YourBookedTables = ({ id }) => {
    const { data: oneUser, refetch, loading, } = useQuery(GET_YOUR_BOOKED_TABLES, {
        variables: {
            user: String(id),

        },
    })

    console.log("YOURS" + JSON.stringify(oneUser))
    return { refetch, oneUser, loading }

}

export default YourBookedTables;