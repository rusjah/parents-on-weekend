import React from 'react'
import CalendarB from '../CalendarB'
import { useAppContext } from '../../../context/AppContext'


function AdditionalData({setnewUser, edit, setUpdatingData}) {
    const {currentUser} = useAppContext()
    const stateHandler = (e) => {
      edit ? setUpdatingData(i => ({...i, state: e.target.value})) : setnewUser(i => ({...i, state: e.target.value}))
    }
    const photoHandler = (e) => {
      edit ?  setUpdatingData (i => ({...i, photo: e.target.files[0]})) : setnewUser(i => ({...i, photo: e.target.files[0]}))
    }

    const state = [{stateType: 'go', content:'Go to you'}, 
                   {stateType: 'home', content: 'Care at my home'}]
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-start gap-12 border-orange-100 border-2 p-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-[1.5em] text-brawn-950'>Birthday</h2>
                <label className='font-bold  bg-lime-50 w-64 md:w-96 flex gap-1 items-center pl-2 flex-col p-2'>
                <CalendarB setnewUser={setnewUser} setUpdatingData={setUpdatingData} edit={edit}/>
                </label>
            </div>
            <div className='rating gap1 flex flex-col gap-4'>
                <h2 className='font-bold text-[1.5em] text-brawn-950'>Photo</h2>
                <label className='font-bold  bg-lime-50 w-64 md:w-96 h-24 flex gap-1 items-center justify-center pl-2 flex-col'>
                  <input onChange={(e) => photoHandler(e)} type="file" name="photo" className="h-12 bg-[white] file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </label>
                <h2 className='font-bold text-[1.5em] text-brawn-950'>I can</h2>
                {state.map((el, ind) =>
                    <label key={ind} className='font-bold  bg-lime-50 w-64 h-12 flex gap-2 items-center pl-2'>
                        <input onChange={(e) => stateHandler(e)}type="radio" name="state"  value={el.stateType} className="mask mask-heart bg-lime-400 checked:bg-yellow-400" />
                        <span>{el.content}</span>
                  </label>
                  )}
            </div> 
        </div>
    </div>
  )
}

export default AdditionalData