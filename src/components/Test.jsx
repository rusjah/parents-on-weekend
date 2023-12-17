import React, { useState } from 'react'
import Record from './components/video/Record'

function Test() {
    const [first, setfirst] = useState()
   
    function func(e) {
        // {console.log('dfsdfsd', e.target)}
    }
  return (
        <div>
            <form action="" onSubmit={func}>
            <Record setSetUrl={setfirst}/>
            
            <button type='submit'>ok</button>
            </form>
        </div>
  )
}

export default Test

// async function  registration(userData) {
    // const newUser= {...userData}
    // newUser.photo = 'kaaka'
    // newUser.video = 'ajdfkj'
    // console.log(userData, '');
    // try {
    //     const videoURLs = await Backendless.Files.upload(userData.video, 'video')
    //     newUser.video = videoURLs;
        
    //     const imgURLs = await Backendless.Files.upload(userData.photo, 'photo')
    //     newUser.photo = imgURLs;


        // var user = new Backendless.User();
        // user.email = userData.email;
        // user.fname = userData.fname;
        // user.password = "11111";
        

        // Backendless.UserService.register( )
        //     .then( res => {
        //         setUserStatus(i => true)
        //         // if (user) {
        //         //     navigate('/profile')
        //         // }

        //         console.log('registar', res);
        //     } )
        //     .catch( err => {
        //         console.log('resgi', err.code);
        //     });
     
    //   } catch(error) {
    //     console.log(`error - ${error.message}`)
    //   }

// }