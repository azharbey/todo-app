"use client"
import React, { useState } from 'react'

export const CounterAdvanceApp = () => {
    const [counter, setCounter] = useState(0)
const decrement= (gval = 1) => {
setCounter(counter - gval)
}

const increment= (gval = 1) => {
    setCounter(counter + gval)
}

  return <> 
  <button onClick={() => {decrement(1)}}>Decrement 1</button>
  <button onClick={() => {decrement(2)}}>Decrement 2</button>
  <button onClick={() => {decrement(3)}}>Decrement 3</button>
  {counter}
  <button onClick={() => {increment(1)}}>Increment 1</button>
  <button onClick={() => {increment(2)}}>increment 2</button>
  <button onClick={() => {increment(3)}}>increment 3</button>
  </>
}