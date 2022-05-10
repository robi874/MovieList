import React, { useState, useRef } from 'react'

export default function MovieApplication(props) {
  return (
    <div className='container'>
      <h1>Min filmlista</h1>
      {props.children}
    </div>
  )
}