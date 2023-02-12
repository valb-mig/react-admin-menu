import React from 'react'
import './css/greeting.css'

function Ola(props){
    return(
        <a href={props.link}><p>{props.msg} {props.nome}</p></a>
    )
}

function Greeting() {
  return (
    <div className='greeting'>
        <Ola
            msg="Olá,"
            nome="Mig."
            link="#"
        />
    </div>
  )
}

export default Greeting