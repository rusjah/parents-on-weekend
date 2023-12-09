import React from 'react'

function AddReviw() {
    // function submitHandler(e) {
    //     e.preventDefault()
    //     const todo = {
    //         todo: e.target.todo.value,
    //         time: e.target.time.value ? String(e.target.time.value) : '',
    //         status: 'aktive',
    //         date_todo: e.target.date.value ? String(e.target.date.value) : '',
    //         type: e.target.type.value 
    //     }
    //     e.target.todo.value = ''
    //     addTodo(todo);
    // }

    function sendReview() {

    }

  return (
    <div>
        <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="w-[60vw] collapse-title bg-yellow-100 text-black font-bold peer-checked:bg-orange-50 peer-checked:text-black">
            Add new ToDo to my task
            </div>
            <div className=" w-[60vw] collapse-content bg-yellow-100 text-black peer-checked:bg-orange-50 peer-checked:text-black"> 
                <form action="" className='w-[100%] relative' onSubmit={sendReview}>
                    <textarea name='newMsg' className="textarea textarea-warning h-[12vh] w-[100%] " placeholder="Write message"></textarea>
                    <button type='submit'className='absolute right-1 bottom-1 text-green-800 text-[2em]' ><ion-icon name="send-outline"></ion-icon></button>
                </form>
            </div>
        </div>

    </div>

  )
}

export default AddReviw

 