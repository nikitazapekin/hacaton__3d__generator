import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useMutation, useQuery} from "@apollo/client";
import { CREATE_USER } from "../mutations/user";
const isAuthHook = ()=> {
    const {data:oneUser, loading} = useQuery(GET_ONE_USER, {
        variables: {
           id: 1
        }
    })
    const [newUser] = useMutation(CREATE_USER)
    const [regState, setRegState ]= useState({
        username: "",
        password: ""
    })
const navigate= useNavigate()
    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username: regState.username, password: regState.password
                }
            }
        }).then(({data}) => {
            console.log(data)
            navigate(`/personal/${data.createUser.id}`)
            setUsername('')
            setAge(0)
        })
    }
    return {addUser, regState, setRegState, loading}
}
export default isAuthHook