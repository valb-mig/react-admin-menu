import React from 'react'
import './css/sidebar.css'

function Itens(props){
  return (
    <div className='sidebar-itens'>
      <a href={props.link}><i className={'fa fa-' + props.icon}></i></a>
    </div>
  )
}

function Sidebar() {
  return (
    <div className='sidebar'>
      <Itens icon="home" link="#"/>
      <Itens icon="link" link="#"/>
      <Itens icon="link" link="#"/>
      <Itens icon="link" link="#"/>
    </div>
  )
}

export default Sidebar