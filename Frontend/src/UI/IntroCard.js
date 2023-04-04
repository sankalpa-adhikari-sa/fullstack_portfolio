import './IntroCard.css'
import avatar from '../Images/default-profile-image.jpg'

function IntroCard() {
  return (
    <section className='IntroCard__wrapper'>
      <img className='IntroCard__avatar' src={avatar} alt="avatar" />
      <div className='IntroCard__primarydetail'>
        <span className='IntroCard__primarydetail__name'>SANKALPA ADHIKARI</span>
        <div className='IntroCard__primarydetail__others'>
        <span >Student</span>
        <span >Agricultural engineering</span>

        </div>
      </div>
      <div className='Introard__vline'></div>
      <div className='IntroCard__secondarydetail'>
        <span>I am an </span>
        <div className='IntroCard__secondarydetail__group IntroCard__secondarydetail__heighlight'>
          <span >Agricultural  </span>
          <span>Engineering  </span>
        </div>
        <div className='IntroCard__secondarydetail__group'>
          <span>student with </span>
          <span>passion for </span>
        </div>
        <span className='IntroCard__secondarydetail__heighlight'>Data science.</span>
      </div>
    </section>
  )
}

export default IntroCard