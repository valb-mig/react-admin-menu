import React     from 'react';
import Sidebar   from './components/Sidebar';
import Log       from './components/Log';
import Greeting  from './components/Greeting';
import Dashboard from './components/Dashboard';
import './components/css/content.css'

export default function Content() {
  return (
    <div className='main'>
      <Sidebar/>
      <div className="content">
        <Greeting/>
        <div className='content-boxes'>
          <Log/>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}