import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function List({url}) {

  const [list, setList] = useState([])

  const fetchLIst = async () => {
    const response = await axios.get(`${url}/api/food/list`)

    if (response.data.success) {
      setList(response.data.data)
    }  else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchLIst()
  }, [])

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchLIst()
    if (response.data.success) {
      toast.success(response.data.message)
    }  else {
      toast.error("Error")
    }
  }

  return (
    <div className='w-[70%] ml-16 mt-14 text-lg add columns'>
      <p>All Foods List</p>
      <div>
        <div className='table-format bg-gray-100 text-xl hidden md:grid'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
            return (
              <div key={index} className='table-format grid'>
                <img src={`${url}/images/` + item.image} alt={item.name} className='w-[60px]'/>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className='cursor-pointer' onClick={() => removeFood(item._id)}>x</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default List