import { useState } from "react";
const useCalendar = () => {
    const date = new Date()
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear())
    const [clickedDay, setClickedDay] = useState(date.getDate())
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };
    const daysInMonth = getDaysInMonth(year, month);
    const handleIncrement = () => {
        console.log(year)
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        if(currentMonth+3>month){
            if (month == 12) {
                setMonth(1)
                setYear(prev => Number(prev + 1))
            }
            else {
                setMonth(prev => (Number(prev + 1)))
            }
        }
    }
    const handleDecrement = () => {

        const currentDate = new Date();
        const currentMonth= currentDate.getMonth();
const currentYear = currentDate.getFullYear()
 
 console.log(currentMonth, month, currentYear,year)       
if(Number(currentMonth+1)<=Number(month) && Number(currentYear)<=Number(year)){

    
    if (month != 1) {
        
            setMonth(prev => (Number(prev - 1)))
        } else {
            setYear(prev => Number(prev - 1))
            setMonth(12)
        }
    } 
    }
    const handleSelectDay = (day) => {
        setClickedDay(day)
    }
    return {month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth}
}
export default useCalendar