import React from 'react'
import { useAppContext } from '../../../context/AppContext'

function PersonalData({setnewUser,edit, setUpdatingData}) {
  const {currentUser} = useAppContext()
  const defaultFName = currentUser && currentUser.fname || ''
  const defaultLName = currentUser && currentUser.lname || ''

  const fnameHandler = (e) => {
    edit ? setUpdatingData((i) => ({...i, fname: e.target.value})) :  setnewUser(i => ({...i, fname: e.target.value}))
  }

  const lnameHandler = (e) => {
    edit ? setUpdatingData((i) => ({...i, lname: e.target.value})) :  setnewUser(i => ({...i, lname: e.target.value}))
  }

  const genderHandler = (e) => {
    edit ? setUpdatingData((i) => ({...i, gender: e.target.value})) :  setnewUser(i => ({...i, gender: e.target.value}))
  }

  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-6 border-orange-100 border-2 p-4'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-[1.5em] text-brawn-950'>My Data</h2>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center  pl-2 flex-col p-1'>
              <input onChange={(e) => fnameHandler(e)} type="text" name='fname' defaultValue={defaultFName} placeholder="First name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-bold  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <input onChange={(e) => lnameHandler(e)} type="text" name='lname' defaultValue={defaultLName} placeholder="Last name" className="input font-normal input-bordered input-warning w-full max-w-xs" />
            </label>
        </div>
        <div className='flex flex-col gap-4 pt-0 md:pt-[3.3em]'>
            <label className='font-normal  bg-lime-50 w-64 h-24 flex gap-1 items-center justify-center pl-2 flex-col p-1'>
              <select required onChange={(e) => genderHandler(e)} name='gender' className="select select-warning w-full max-w-xs">
                <option  disabled  value="default">Gender</option>
                <option value=""></option>
                <option  value="male">Male</option>
                <option  value="female">Female</option>
                <option  value="another">Another</option>
              </select>
            </label>
        </div>
      </div>
    </div>
  )
}

export default PersonalData