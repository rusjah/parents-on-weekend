import React from 'react'
import data from '../../data.json'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate()
  const user = data.users[0]
  const photo = user.photo;

  // const age = 
  
  return (
    <div className='flex flex-col items-center bg-amber-50 w-[full] min-h-full p-6 bg-gradient-to-r from-green-50 to-orange-50 relative'>
        <div className='bg-orange-200 p-10 rounded-tl-[20vw] rounded-tr-[10vw]'><h1 className='font-bold text-[2em] text-green-700 font-marhey'>My Profile</h1></div>
        <div className='w-full h-full flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center pt-10 '>
          <figure className='w-96 h-64 relative shadow-lg shadow-black-800/40'>
            {/* <p className='bg-[white] opacity-8 w-8 h-8 flex justify-center items-center rounded-full absolute top-1 left-1'><ion-icon name="add-circle-outline"></ion-icon></p> */}
            <img className='w-full h-full' src={photo} alt="photo" />
          </figure>
          <figcaption className='w-96 h-64 text-[1.3em] font-bold text-yellow-900 mt-[-4vh]'>
            <h2 className='font-bold text-[1.5em] text-lime-900'>{user.fname} {user.lname}</h2>
            <p><span className='text-green-950 decoration-solid'>Age:</span> {22}, {user.gender}</p>
            <p><span className='text-green-950 decoration-solid'>Email:</span> {user.email}</p>
            <p><span className='text-green-950 decoration-solid'>Post number:</span> {user.postNumber}</p>
            <p><span className='text-green-950 decoration-solid'>Role:</span> {user.role === 'grand' ? 'grandparent' : 'parent'}</p>
            <p><span className='text-green-950 decoration-solid'>Phone:</span> {user.phone}</p>
            <p><span className='text-green-950 decoration-solid'>It is possible:</span> {user.state === 'go' ? 'to go to you' : 'to stay at home'}</p>
            <p><span className='text-green-950 decoration-solid'>I like:</span> {user.helpType === 'patsChildren' ? 'pets and children' : user.helpType === 'pets' ? 'pets' : 'children'}</p>
          </figcaption>
        </div>
        {/* <img className='w-32 h-32 absolute  ' src="https://cdn130.picsart.com/298072383058211.png" alt="" /> */}

        <div className='flex justify-center gap-6 w-full'>
          <div className=' w-[60%] h-full flex flex-col gap-1 justify-center items-center pt-10  font-roboto font-[450] text-justify'>
            <h2 className='font-bold text-[1.5em] text-lime-900'>About me</h2>
            <p className='font-dancing text-[1.5rem]'>
            <iframe className='inline float-right p-6' width="300" height="300" src="https://www.youtube.com/embed/oa2jNw2JW_s" title="Cat and Dog Friendship - Dog and Cat Pure Love #short" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              "{user.aboutMe}"
            </p>
          </div>
        </div>

        <div className='w-full h-full flex flex-col gap-1 justify-center items-center pt-10 font-roboto font-[450] text-justify'>
          <h2 className='font-bold text-[1.5em] text-lime-900'>My options:</h2>
          <div className='w-[60%]  flex flex-col md:flex-row justify-between relative'>
            <div>
              <p className='text-[1.5rem] text-lime-800 pb-4' >Pets:</p>
              <div>
                {user.pets.length > 0 && user.pets.map(el => <>
                  <p className='flex gap-2 text-[1.5rem] justify-start items-center capitalize'><img className='w-6 h-6 rounded-full' src="https://images.pexels.com/photos/10954785/pexels-photo-10954785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />{el}</p>
                </>)}
              </div>
            </div>
                  <img className='w-32 h-32 absolute right-[60%]' src="https://i.pinimg.com/originals/97/d4/78/97d4788ebe3bada2f1718ee78dcc73f0.png" alt="" />
                  <img className='w-32 h-32 absolute right-[40%] rotate-45 ' src="https://i.pinimg.com/originals/97/d4/78/97d4788ebe3bada2f1718ee78dcc73f0.png" alt="" />
            <div>
              <p className='text-[1.5rem] text-lime-800 flex flex-around pb-4' >Children:</p>
              <div>
                {user.children.length > 0 && user.children.map(el => <>
                  <p className='flex gap-2 text-[1.5rem] justify-start items-center capitalize'><img className='w-6 h-6 rounded-full' src="https://images.pexels.com/photos/10954785/pexels-photo-10954785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />{el}</p>
                </>)}
              </div>
            </div>

          </div>
        </div>
          {/* <button onClick={() => navigate('/edit')} className='btn bg-yellow-900 text-yellow-200 absolute right-20 top-4 text-[4em] h-16 rounded-full'><ion-icon name="add-circle-outline"></ion-icon></button> */}
    </div>
  )
}

export default Profile