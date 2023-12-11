import React from 'react'
import { Link } from 'react-router-dom'
import LetGoBtn from '../components/LetGoBtn'
import OneStepUsing from '../components/OneStepUsing'
import ReviewCard from '../components/ReviewCard'
import bg from '../../images/main-bg.jpg'

function Home() {
  return (
    <div>
      <section id='main'>
        <div className="hero min-h-[93vh] md:min-h-[90vh]" style={{backgroundImage: `url(${bg})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold font-marhey">Grandparents on weekend</h1>
                <p className="mb-5 capitalize font-roboto font-bold text-[1.5em] italic text-green-100"> Warm hearts, cozy weeknds: Embracing the delight of Grandparents on weeknds - where generations unite, creeating a haven filled with love, laughter, and furry hugs, spreading joy into every corner of every home</p>
                <LetGoBtn title={"Let's go"}/>
                </div>
            </div>
        </div>
      </section>
      <section id='about' className='flex flex-col justify-center items-center py-4 bg-[#ffe8d6]'>
       <h2 className='font-bold text-[2.5rem] text-green-900'>About Us</h2>
      <div className='w-[90%] text-[1.3rem] font-roboto text-justify py-10'>
          <p>In a world hurtling forward at breakneck speed, the constant race to keep pace demands honing skills and abilities. Amidst this frenzy, our overwhelming busyness often robs us of the time and capacity to tend to our children or beloved pets. Simultaneously, many elders traverse their years in solitary isolation. </p>
          <p> Here, a resolve emerges—a defiance against this perpetual cycle. We aspire to unite people across generations, bridging divides and forging connections to disrupt this self-contained loop. </p>
          <p>We seek to weave together the tapestry of humanity, threading the stories, experiences, and wisdom of different ages and backgrounds into a harmonious narrative. It endeavors to create spaces where the vigor of youth merges seamlessly with the wisdom borne of experience, where the exuberance of childhood meets the serenity of old age.</p>
          <p>So, let us embrace the beauty in diversity, celebrate the richness of shared experiences, and pave the way for a future where generations stand united, lending support and guidance to one another, crafting a legacy of compassion and solidarity that transcends the constraints of time itself</p>
       </div>
       {/* <LetGoBtn /> */}
      </section>
      <section id='howuse'  className='flex flex-col justify-center items-center py-4 bg-[#fff1e6]'>
          <h2 className='font-bold text-[2.5rem] text-green-900'>How to use</h2>
          <div className='py-10 flex flex-col md:flex-row justify-center gap-48'>
            <OneStepUsing num={1} content={'Log in'} />
            <OneStepUsing num={2} content={'Find a right person'} />
            <OneStepUsing num={3} content={'Contact and meet'} />
          </div>
          {/* <LetGoBtn /> */}
      </section>
      <section id='reviews' className='flex flex-col justify-center items-center py-4 bg-[#ffe8d6]'>
          <h2 className='font-bold text-[2.5rem] text-green-900'>Reviews</h2>
          <div className='py-10 flex flex-col md:flex-row justify-center gap-24'>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
          </div>
         <div className='self-end pr-12'>
         <  LetGoBtn title={"More..."}/>
         </div>
      </section>
    </div>
  )
}

export default Home