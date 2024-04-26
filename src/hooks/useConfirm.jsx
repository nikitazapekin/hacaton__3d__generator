/*
import { useMutation } from "@apollo/client"
import { CONFIRM_TABLE } from "../mutations/confirm"
const useConfirm = ({id, item}) => {

   const [newBookingElement] = useMutation(CONFIRM_TABLE)
    const handleConfirm = () => {

        console.log(111)
        newBookingElement({
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
            console.log("DATA" + JSON.stringify(data))

        })  
    }
    return { handleConfirm };
}

export default useConfirm; */


import { useMemo } from 'react';
import { useMutation } from "@apollo/client";
import { CONFIRM_TABLE } from "../mutations/confirm";

const useConfirm = ({id, item}) => {
    const [newBookingElement] = useMutation(CONFIRM_TABLE);

    const handleConfirm = () => {
        console.log(111);
        newBookingElement({
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
        });  
    };

    return { handleConfirm };
};

const memoizedUseConfirm = ({ id, item }) => {
    return useMemo(() => useConfirm({ id, item }), [id, item]);
};

export default memoizedUseConfirm;
