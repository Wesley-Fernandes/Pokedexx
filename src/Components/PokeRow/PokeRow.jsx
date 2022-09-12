import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Style from "./PokeRow.css"

export default function PokeRow(props) {

  const jumper = `http://wesleydev.ga/Pokemon/?pokemon=${props.url}`
  return (
    <a href={jumper}><Alert className='PokeRow' variant="dark">{props.name}</Alert></a>
  )
}
