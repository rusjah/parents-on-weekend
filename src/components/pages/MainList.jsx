import React, { useEffect } from 'react'
import data from '../../data.json'
import UserSmalCard from '../components/UserSmalCard';
import Filter from '../components/Filter';
import { useAppContext } from '../../context/AppContext';

function MainList() {
  const {allUsers, getAllUsers} = useAppContext()
  const users = data.users;
  
  useEffect(() => {
    getAllUsers()
  },[])
  return (
    <div className='flex flex-col gap-4 items-center p-10'>
        <h1 className='font-marhey font-bold text-green-900 text-[1.5em] md:text-[3em] pb-4  md:pb-20'>Find your best partner</h1>
        <Filter />
        <div className='flex flex-col gap-4 items-center py-4 md:py-20'>
           {allUsers.map((el, id) => <UserSmalCard key={id} user={el}/>)}
        </div>
        
    </div>
  )
}

export default MainList