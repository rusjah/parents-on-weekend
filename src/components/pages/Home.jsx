import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const bgUrl = 'https://pivotalmist.backendless.app/api/files/photos/main-bg.jpg'
  return (
    <div>
      <section id='about'>
        <div className="hero min-h-[93vh] md:min-h-[90vh]" style={{backgroundImage: `url(${bgUrl})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold font-marhey">Grandparents on weekend</h1>
                <p className="mb-5 capitalize font-roboto font-bold text-[1.5em] italic text-green-100"> Warm hearts, cozy weeknds: Embracing the delight of Grandparents on weeknds - where generations unite, creeating a haven filled with love, laughter, and furry hugs, spreading joy into every corner of every home</p>
                <Link to={'/login'} ><button className="btn bg-yellow-900 text-lime-200">Get Started</button></Link>
                </div>
            </div>
        </div>
      </section>
      <section id='howuse'>
       <p className='text-red-800 font-bold text-3em'> how use <ion-icon name="alert-outline"></ion-icon></p>
      </section>
      <section id='about'></section>
    </div>
  )
}

export default Home