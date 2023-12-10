import React, { useEffect, useState } from 'react'
import CalendarB from '../components/CalendarB'
import PetsChekBox from '../components/PetsChekBox'
import data from '../../data.json'
import Video from '../components/video/Video'
import { useNavigate } from 'react-router-dom'


function Sign({setUsers, validationStaus, setvalidationStaus}) {
  const navigate = useNavigate()

  const pets = data.options.patsType;
  const children = data.options.childrenYears;
  const [setUrl, setSetUrl] = useState()
  const [birthday, setBirthday] = useState(new Date())
 

  function createUser(e) {
    e.preventDefault();
    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const email = e.target.email.value
    const password = e.target.password.value
    const gender = e.target.gender.value
    const phone = e.target.tel.value
    const role = e.target.role.value
    const state = e.target.state.value
    const helpType = e.target.helpType.value
    const postNumber = e.target.postNumber.value
    //add functionality for default foto
    const photo = e.target.photo.files[0]
    const aboutMe = e.target.aboutMe.value

    const pets = []
    for(let i = 0; i < e.target.pets.length; i++) {
      const checkedPet = e.target.pets[i];
      if (checkedPet.checked) {
        pets.push(checkedPet.value)
      }
    }
    
    const children = []
    for(let i = 0; i < e.target.child.length; i++) {
      const checkedCild = e.target.child[i];
      if (checkedCild.checked) {
        children.push(checkedCild.value)
      }
    }

    const newUser = {
      id: 1,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
      role: role,
      state: state,
      helpType: helpType,
      postNumber: postNumber,
      aboutMe: aboutMe,
      pets: pets,
      children: children,
      birthday: birthday,
      videoUrl: setUrl,
      photo: photo
    }
    
    setUsers(i => [...i, newUser])

    e.target.reset();

    setvalidationStaus(true)
    navigate('/profile')

  }

  useEffect(() => {
    if (setvalidationStaus) {
      navigate('/profile')
    }
  },[validationStaus])
  return (
    <div className='py-[10vh] w-full min-h-[66vh] flex flex-col items-center  bg-[#f0efeb]'>
     <h2 className='font-bold text-[2.5rem] text-green-900 pb-12'>Sign Up</h2>
    <form className='flex flex-col items-center md:text-[1.1em]' onSubmit={createUser}>
      <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>My role</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="role"  value="grand" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>I have time</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="role"  value="parent" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>I need help</span>
          </label>
        </div>
        <div className=' rating gap-1 flex flex-col gap-4'>
          <h2 className='font-bold text-[1.5em] text-brawn-950'>I can/need help:</h2>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="helpType"  value="pets" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>Pets</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="helpType"  value="children" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
            <span>Children</span>
          </label>
          <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
            <input type="radio" name="helpType"  value="patsChildren" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
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
              <input type="tel" name='tel' placeholder="Phone" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-6 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>Contact</h2>
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
              <select name='gender' className="select select-warning w-full max-w-xs">
                <option  disabled  value="default">Gender</option>
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
             <CalendarB setBirthday={setBirthday}/>
            </label>
        </div>
        <div className='rating gap1 flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>Photo</h2>
            <label className='font-bold  bg-lime-50 w-64 md:w-96 h-24 flex gap-1 items-center justify-center pl-2 flex-col'>
              <input type="file" name="photo" className="h-12 bg-[white] file-input file-input-bordered file-input-warning w-full max-w-xs" />
            </label>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I can</h2>
            <label className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
              <input type="radio" name="state"  value="go" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
              <span>Go to you</span>
            </label>
            <label className='font-bold bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
              <input type="radio" name="state"  value="home" className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
              <span>Care at my home</span>
            </label>
        </div> 
      </div>

      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4 w-[100%]'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>About me</h2>
        <label className='font-bold  bg-lime-50 mx-2 h-48 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <textarea name='aboutMe' className="textarea textarea-warning w-full h-full " placeholder="About me"></textarea>
        </label>
      </div>

      
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-10 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like pats</h2>
            <div className='flex'>
              <PetsChekBox pet={pets[0]} type={'pets'}  />
              <PetsChekBox pet={pets[1]} type={'pets'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[2]} type={'pets'}  />
              <PetsChekBox pet={pets[3]} type={'pets'}  />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[4]} type={'pets'}  />
              <PetsChekBox pet={pets[5]} type={'pets'}  />
            </div>
            <div className='flex'>
              <PetsChekBox pet={pets[6]} type={'pets'}  />
              <PetsChekBox pet={pets[7]} type={'pets'}  />
            </div> 
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>I have/like children:</h2>
            <div className='flex'>
              <PetsChekBox pet={children[0]} type={'child'} />
              <PetsChekBox pet={children[1]} type={'child'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={children[2]} type={'child'} />
              <PetsChekBox pet={children[3]} type={'child'} />
            </div>
            <div className='flex'>
              <PetsChekBox pet={children[4]} type={'child'} />
            </div>
        </div>
      </div> 
      
      <div className='flex flex-col gap-4 border-orange-100 border-2 p-4'>
        <h2 className='font-bold text-[1.5em] text-brawn-950'>Recourd Video</h2>
        <label className='font-bold  bg-lime-50 mx-2 flex gap-1 items-center justify-center pl-2 flex-col p-4'>       
          <Video setSetUrl={setSetUrl}/>
        </label>
      </div>

      <div className='flex justify-center gap-4 border-orange-100 border-2 p-4'>
        <button type='submit' className='btn bg-yellow-900 text-yellow-200 text-[1.2em]'>Sign up</button>
      </div>
    </form>
   </div>
  )
}

export default Sign