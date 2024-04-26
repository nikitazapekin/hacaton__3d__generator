import { useState } from "react";
import { useEffect } from "react";
import useTables from "./useTables";
const isAbleToBook = (checkTime, startTime, endTime) => {
  const [checkHours, checkMinutes] = checkTime.split(":").map(Number);
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);
  const checkTotalMinutes = checkHours * 60 + checkMinutes;
  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;
  if (checkTotalMinutes >= startTotalMinutes && checkTotalMinutes <= endTotalMinutes) {
    return true
  } else {
    return false
  }
}
const useBoard = ({ currentTime }) => {

  const { data } = useTables({ currentTime })
  const [isbookedTable, setIsBoockedTable] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    six: "",
    seventh: "",
    eight: ""
  })
  useEffect(() => {
    const time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()}`;
    if (data !== undefined) {
      for (let i = 0; i < data.tables.length; i++) {
        let isBooked = false;
        data.tables[i].timeForBooking.filter(item => {
          if (item.from == "00:00" && item.to == "00:00") {
            isBooked = true;
            const indexField = Object.keys(isbookedTable)[i];
            console.log("FIELSS" + indexField)
            if (isbookedTable[indexField] != "00:00-00:00") {
              setIsBoockedTable(prevState => ({
                ...prevState,
                [indexField]: `${item.from}-${item.to}`
              }));
            }
          }
          else if (isAbleToBook(currentTime, item.from, item.to)) {
            isBooked = true;
            const indexField = Object.keys(isbookedTable)[i];
            setIsBoockedTable(prevState => ({
              ...prevState,
              [indexField]: `${item.from}-${item.to}`
            }));
          } else {
            return item;
          }
        });
      }
    }
  }, [data]);
  useEffect(() => {
    const time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()}`;
    for (let key in isbookedTable) {
      if (isbookedTable[key]) {
        const arr = isbookedTable[key].split("-")
        const indexField = Object.keys(isbookedTable)[isbookedTable];
        if (!isAbleToBook(currentTime, arr[0], arr[1])) {
          setIsBoockedTable(prevState => ({
            ...prevState,
            [key]: ""
          }));
        }
      }

    }

  }, [currentTime, isbookedTable])

  return { isbookedTable }
}

export default useBoard