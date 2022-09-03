import React from 'react'
import { Input, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './style.css'
import LocationCard from './Card';
import Sidebar from './Sidebar';
const Location = () => {
  return (
    <Row className='location-container'>
      <Col span={6} className='location-sidebar'>
        <Sidebar />
      </Col>
      <Col span={18}>
        <div className='location-card-list'>
          <LocationCard title='Tunel' />
          <LocationCard title='Device' />
          <LocationCard title='Endpoint' />
          <LocationCard title='User' />
        </div>
        <div className='location-content'>
          <div className='location-content-item'>
            <div className='location-content-item-text'>Location name:</div>
          </div>
          <div className='location-content-item'>
            <div className='location-content-item-text'>Address:</div>
          </div>
          <div className='location-content-item'>
            <div className='location-content-item-text'>Time zone:</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Location