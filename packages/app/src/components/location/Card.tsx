import React from "react";

const prefix = "location-card"

interface Props {
  title: string
}
const LocationCard: React.FC<Props> = ({ title }) => {
  return (
    <div className={`${prefix}-container`} >
      <div className={`${prefix}-title`}>{title}</div>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-content-item__blue`}>0</div>
        <div className={`${prefix}-content-item__red`}>0</div>
      </div>
    </div >
  )
}

export default LocationCard