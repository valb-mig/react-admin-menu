import React from 'react'
import './css/log.css'

function Registro(props){
  return (
    <div className='log-itens'>
      <a href={props.id}>
        <div className='item-name'>
          <p><i className='fa fa-user'></i> {props.nome}</p>
        </div>
        <p><i className='fa fa-calendar'></i> {props.idade}</p>
        <p><i className='fa fa-map-marker'></i>  {props.cidade}</p>
        <div className='item-cargo'>
          <p><i className='fa fa-asterisk'></i> {props.cargo}</p>
        </div>
      </a>
    </div>
  )
}

function Log() {
  return (
    <div className='log'>
        <Registro id="1" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="2" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
        <Registro id="3" nome="Jhon Doe" idade="20" cidade="Boston" cargo="Placeholder"/>
    </div>
  )
}

export default Log