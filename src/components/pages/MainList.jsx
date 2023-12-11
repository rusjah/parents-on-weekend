import React from 'react'
import data from '../../data.json'
import UserSmalCard from '../components/UserSmalCard';
import Filter from '../components/Filter';

function MainList() {
  const users = data.users;
  
  return (
    <div className='flex flex-col gap-4 items-center'>
        <Filter />
        <div className='flex flex-col gap-4 items-center py-20'>
           {users.map((el, id) => <UserSmalCard key={id} user={el}/>)}
        </div>
        
    </div>
  )
}

export default MainList