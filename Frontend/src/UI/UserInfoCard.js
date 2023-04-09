import './UserInfoCard.css'
import React from 'react'
import DataScienceIcon from '../IconsComponents/DataScience'
import DataAnalyticsIcon from '../IconsComponents/DataAnalytics'
import AgricultureIcon from '../IconsComponents/AgriculturalEngineering'
function UserInfoCard(props) {
  return (
    <div className='UserInfoCard__wrapper'>
      <div className='UserInfoCard__header'>{props.UserInfoHeader}</div>
      <div className='UserInfoCard__contents'>
        {props.UserInfoContent.map((UserInfoContent,index) => (
          <div key={index} className='UserInfoCard__contents__div'>

          <DataScienceIcon className='UserInfoCard__icon'/>
          <div className='UserInfoCard__text'>{UserInfoContent}</div>
        </div>
          ))}
      </div>
    </div>
  )
}

export default UserInfoCard