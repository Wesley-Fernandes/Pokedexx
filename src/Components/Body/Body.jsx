import React from 'react'
import Style from "./Body.css"
import PokeRow from '../PokeRow/PokeRow'


export default function Body(props) {
  return (
    <main id='main'>
      <div className='Content'>
        {props.children}
      </div>
    </main>
  )
}
