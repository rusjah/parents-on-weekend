import React, { useEffect } from 'react'
import data from '../../data.json'
import UserSmalCard from '../components/UserSmalCard';
import Filter from '../components/Filter';
import { useAppContext } from '../../context/AppContext';
import AboutUserModal from '../components/AboutUserModal';

function MainList() {
  const {allUsers, getAllUsers, filterUsers, isFilter, togleFilter, filteredUsers, usersModalStatus, changeUserModalContent, changeUsertModalStatus} = useAppContext()

  function aboutUser(content) {
    changeUsertModalStatus()
    changeUserModalContent(content)
  }
  

  useEffect(() => {
    // togleFilter()
    filterUsers()
    filterUsers()
    getAllUsers()
  },[])
  return (
    <div className='flex flex-col gap-4 items-center p-10'>
        <h1 className='font-marhey font-bold text-green-900 text-[1.5em] md:text-[3em] pb-4  md:pb-20'>Find your best partner</h1>
        <Filter />
        <div className='flex flex-col md:flex-row flex-wrap  w-8/12 gap-4 items-center py-4 md:py-20'>
        {isFilter ? filteredUsers.map((el, id) => <UserSmalCard key={id} user={el}/>) : allUsers.map((el, id) => <UserSmalCard key={id} user={el}/>) }
        </div>

        {usersModalStatus && <AboutUserModal />}
    </div>
  )
}

export default MainList