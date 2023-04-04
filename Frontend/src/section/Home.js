import GetinTouchCard from '../UI/GetinTouchCard.js'
import IntroCard from '../UI/IntroCard.js'
import UserInfoCard from '../UI/UserInfoCard.js'
import './Home.css'

const skillContents=["Python","JavaScript","2D/3D design"];
const InterestsContents=["Data Science","Data Analytics","Agriculture"];

function Home() {
  return (
    <div className='HomeSection'>
      <IntroCard/>
      <div className='UserInfo__section'>
        <UserInfoCard UserInfoHeader="Interests" UserInfoContent={InterestsContents} />
        <UserInfoCard UserInfoHeader="Skills" UserInfoContent={skillContents} />
        <GetinTouchCard/>
      </div>
    </div>
  )
}

export default Home