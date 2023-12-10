import React from 'react'
import Calendar from 'react-calendar'
import CalendarB from '../components/CalendarB'
import PetsChekBox from '../components/PetsChekBox'
import data from '../../data.json'

function Sign() {
  const pets = data.options.patsType;
  const children = data.options.childrenYears;
  function signup(){

  }
  return (
    <div className='py-[10vh] w-full min-h-[66vh] flex flex-col items-center  bg-[#f0efeb]'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-12'>Sign Up</h2>
    <form action="flex flex-col gap-6 w-64 font-roboto">
      <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My role</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="role"  value="grand" className="mask mask-heart bg-lime-400" />
            <span>I have time</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="role"  value="parent" className="mask mask-heart bg-lime-400" />
            <span>I need help</span>
          </label>
        </div>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>I can/need help:</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="pets"  value="pets" className="mask mask-heart bg-lime-400" />
            <span>Pets</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="children"  value="children" className="mask mask-heart bg-lime-400" />
            <span>Children</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="patsChildren"  value="patsChildren" className="mask mask-heart bg-lime-400" />
            <span>Pats & Children</span>
          </label>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My post number</h2>
          <label className='font-bold  bg-lime-50 w-64 h-32 flex gap-1 items-center pl-2 flex-col p-1'>
            <input type="text" name='postNumber' placeholder="Type here" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            <span className='text-green-950 text-[14px] pl-1'>It help us find for you the best partner </span>
          </label>
        </div>
      </div>
 
      <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>My data</h2>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input type="email" name='email' placeholder="Email" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input type="password" name='password' placeholder="Password" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input type="email" name='email' placeholder="Email" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>About me</h2>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center  pl-2 flex-col p-1'>
              <input type="text" name='fname' placeholder="First name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input type="text" name='lname' placeholder="Last name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-normal  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <select className="select select-warning w-full max-w-xs">
                <option disabled  value="default">Gender</option>
                <option  value="male">Male</option>
                <option  value="female">Female</option>
                <option  value="another">Another</option>
              </select>
            </label>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-start gap-10 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>Birthday</h2>
            <label className='font-bold  bg-lime-50 w-64 md:w-96 flex gap-1 items-center pl-2 flex-col p-2'>
             <CalendarB />
            </label>
        </div>
        <div className='rating gap1 flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>Photo</h2>
            <label className='font-bold  bg-lime-50 w-64 md:w-96 h-24 flex gap-1 items-center justify-center pl-2 flex-col'>
              <input type="file" name="photo" className="h-12 bg-[white] file-input file-input-bordered file-input-warning w-full max-w-xs" />
            </label>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I can</h2>
            <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
              <input type="radio" name="role"  value="grand" className="mask mask-heart bg-lime-400" />
              <span>Go to you</span>
            </label>
            <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
              <input type="radio" name="role"  value="parent" className="mask mask-heart bg-lime-400" />
              <span>Care at my home</span>
            </label>
        </div> 
      </div>

      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>About me</h2>
        <label className='font-bold  bg-lime-50 mx-2 h-48 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <textarea className="textarea textarea-warning w-full h-full " placeholder="About me"></textarea>
        </label>
      </div>

      
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-10 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like pats</h2>
            <div className='flex'>
              <PetsChekBox pat={pets[0]} />
              <PetsChekBox pat={pets[1]} />
            </div>
            <div className='flex'>
              <PetsChekBox pat={pets[2]} />
              <PetsChekBox pat={pets[3]} />
            </div>
            <div className='flex'>
              <PetsChekBox pat={pets[4]} />
              <PetsChekBox pat={pets[5]} />
            </div>
            <div className='flex'>
              <PetsChekBox pat={pets[6]} />
              <PetsChekBox pat={pets[7]} />
            </div> 
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like children:</h2>
            <div className='flex'>
              <PetsChekBox pat={children[0]} />
              <PetsChekBox pat={children[1]} />
            </div>
            <div className='flex'>
              <PetsChekBox pat={children[2]} />
              <PetsChekBox pat={children[3]} />
            </div>
            <div className='flex'>
              <PetsChekBox pat={children[4]} />
            </div>
        </div>
      </div> 
      
    </form>
   </div>
  )
}

export default Sign