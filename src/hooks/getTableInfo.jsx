
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useRef, useState } from "react";
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { GET_TABLE_INFO } from '../query/table';
import { BOOKING_ACTION } from '../mutations/table';
const GetTableInfo = ({ clickedElement, onClose, month, year, clickedDay }) => {
    const {id} = useParams()
    const { data: oneUser, refetch } = useQuery(GET_TABLE_INFO, {
        variables: {
            id: Number(clickedElement),
            date:  String(""+clickedDay+"-"+(month+1)+"-"+year)
        },
    })
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = today.toLocaleDateString('en-US', options);
    const [isConfirm, setIsConfirm] = useState(false)
    const [time, setTime] = useState({
        from: "",
        to: "",
        chairs: "1"
    })
    const handleTime = (event) => {
        setTime(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const hasEnglishLetters = (str) => {
        return /[a-zA-Zа-яА-Я]/.test(str);
    }
    const [newBookingElement] = useMutation(BOOKING_ACTION)
    const handleBook = () => {
        if (hasEnglishLetters(time.from) || hasEnglishLetters(time.to) || time.to.length != 5 || time.from.length !=5 || time.chairs.length == 0 || hasEnglishLetters(time.chairs)) {
       setErrorMessage("Entered data is incorrect")
        }
       else  if(Number(time.chairs)>Number(oneUser.getTableInfo.amountOfChairs)){
            setErrorMessage("Please enter fewer places")
        } 
       else  if(time.to[2]!=":" || time.from[2]!=":"){
           setErrorMessage("Please enter time")
      }
            else {


              //  if(isConfirm) {

      
               newBookingElement({
                        variables: {
                            input: {
                        tableID: Number(clickedElement),
                        from: time.from,
                        to: time.to,
                        dataOfBooking: ""+clickedDay+"-"+(month+1)+"-"+year,
                        amountOfChairs: Number(time.chairs),
                        isBookedBy: String(id)
                    }
                }
            }).then(({ data }) => {
                if(data.createBookingAction.errorMessage){
                    setErrorMessage(data.createBookingAction.errorMessage)
                } else {
                    setIsConfirm(true)
                 //   onClose()
                }
            })
       // }
 







    }
}


    useEffect(() => {
        refetch()
    }, [handleBook])
    const handleRefreshData = () => {
        refetch()
    };
    const handleBookTableForDay = () => {
        setTime(prev => ({
            ...prev,
            from: "00:00",
            to: "00:00"
        }));
    }
    return {time,  handleTime, oneUser, handleBook, isError, currentDate, handleRefreshData, refetch, errorMessage, handleBookTableForDay, isConfirm }
}
export default GetTableInfo