import React from 'react'
import './SkillCard.css'
import { SkillTag } from './Tag'
function SkillsCard() {
  return (
    <div className="SkillCard__wrapper">
    <div className='SkillCard__header'>SKILLS</div>
    <div className='SkillCard__contents'>
      <div className='SkillCard__contents__one'>
        <div className='SkillCard__contents__type'>DATA SCIENCE</div>
        <div className='Skill_pill_div'>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        </div>
      </div>
      <div className='skills-line'></div>
      <div className='SkillCard__contents__one'>
        <div className='SkillCard__contents__type'>DATA Anlaytics</div>
        <div className='Skill_pill_div'>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        </div>
      </div>
      <div className='SkillCard__contents__one'>
        <div className='SkillCard__contents__type'>AGRICULTURAL ENGINEERING</div>
        <div className='Skill_pill_div'>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        </div>
      </div>
      <div className='SkillCard__contents__one'>
        <div className='SkillCard__contents__type'>OTHERS</div>
        <div className='Skill_pill_div'>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        <SkillTag/>
        </div>
      </div>
    </div>

  </div>
  )
}

export default SkillsCard