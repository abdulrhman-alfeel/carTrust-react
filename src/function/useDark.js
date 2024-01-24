import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dark } from "../redux/features/dataSlice";
export default function useDark() {
    // const {tasksCOVENANT, tasksCOVENANTID} = useSelector(
    //   state => state.userReducer,
    // );
    const dispatch = useDispatch()
  
    const setDarkup = (nam,value) => {
        try{
            const darkset = localStorage.setItem(nam,value);
            console.log(darkset,value,'hhhhhhh')
            dispatch(Dark(value))
            return getDark(nam)
        } catch (err) {
            console.log(err)
        }
      
    };
  
    const getDark = newTasks => {
      try {
        // const user = JSON.parse(localStorage.getItem(newTasks));
        const dark = localStorage.getItem(newTasks);
        console.log(dark,'hhhhhhhhhhhhhh')
        return dark
      } catch (err) {
        console.log(err);
      }
    };

    return {
        setDarkup,
        getDark
    };
  }
  