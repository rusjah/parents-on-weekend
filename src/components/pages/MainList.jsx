import React from 'react'
import data from '../../data.json'
import UserSmalCard from '../components/UserSmalCard';
import Filter from '../components/Filter';

function MainList() {
  const users = data.users;
  
  return (
    <div className='flex flex-col gap-4 items-center p-10'>
        <h1 className='font-marhey font-bold text-green-900 text-[2em]'>Find your best partner</h1>
        <Filter />
        <div className='flex flex-col gap-4 items-center py-20'>
           {users.map((el, id) => <UserSmalCard key={id} user={el}/>)}
        </div>
        
    </div>
  )
}

export default MainList