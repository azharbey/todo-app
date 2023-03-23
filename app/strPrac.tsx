"use client"
import { useState } from "react"
import React from 'react'


export default function StrPrac() {
    //const val ="Hello"
    const [val, setval] = useState("Hello")
    const [val2, setval2] = useState("world")
  
    const onChangeHandel = (e: any) => {
    //console.log("e is", e)
    setval (e.target.value)
    }
    const onChangeHandel2 = (e: any) => {
    //console.log("e is", e)
    setval2 (e.target.value)
    }
   
    return (
      
      <div padding-bottom="50px">
        <input type="text" value={val} onChange={onChangeHandel}/>
        <br/>
        <input type="text" value={val2} onChange={onChangeHandel2}/>
        <br/>
        Length of the Val1: {val.length}
        <br/>
        Length of the Val2: {val2.length}
        <br/>
        </div>
    )
  }