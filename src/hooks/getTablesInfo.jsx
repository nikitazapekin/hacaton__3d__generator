

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRef, useState } from "react";
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLES_INFO } from '../query/table';
import { BOOKING_ACTION } from '../mutations/table';
import useCalendar from './useCalendar';
const GetTablesInfo = ({ month, clickedDay, year }) => {
    const { data: allTables, refetch } = useQuery(GET_TABLES_INFO, {
        variables: {
            date: `${clickedDay}-${month + 1}-${year}`
        },
    })
    const handleRefetch = () => {
        refetch()
    }

  // console.log("ALLLLLLLLLL TABLES")
    return { refetch, allTables, handleRefetch }

}
export default GetTablesInfo