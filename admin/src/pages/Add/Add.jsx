import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add({url}) {

    const [image, setImage] = useState(false)

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data, [name]: value}))
    }

    const onSubmitHandler = async (event) => { 

        event.preventDefault()

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', Number(data.price))
        formData.append('category', data.category)
        formData.append('image', image)

        const response = await axios.post(`${url}/api/food/add`, formData)

        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })

            setImage(false)
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

  return (
    <div className='w-[70%] ml-16 mt-14 text-lg add'>
        <form action="#" className='cloumns gap-5' onSubmit={onSubmitHandler}>
            <div className='cloumns'>
                <p>Upload image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[120px]'/>
                </label>
                <input type="file" name="image" id="image" hidden required onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <div className='columns prod-name'>
                <p>Product name</p>
                <input type="text" name="name" id="name" placeholder='Type here' required onChange={onChangeHandler} value={data.name}/>
            </div>

            <div className='columns prod-desc'>
                <p>Product description</p>
                <textarea name="description" id="description" placeholder='Write content here' rows="6" required onChange={onChangeHandler} value={data.description}/>
            </div>

            <div className='flex gap-8'>
                <div className='columns'>
                    <p>Product category</p>
                    <select name="category" id="category" className='max-w-[120px] p-3 border border-black focus:border-primary' onChange={onChangeHandler}>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>

                <div className='columns'>
                    <p>Product price</p>
                    <input type="number" name="price" id="price" placeholder='$00' className='max-w-[120px] p-3'onChange={onChangeHandler} value={data.price}/>
                </div>
            </div>
            
            <button type='submit' className='max-w-[120px] border-none py-2 px-11 rounded-lg font-medium bg-black text-white cursor-pointer'>
                ADD 
            </button>
        </form>
    </div>
  )
}

export default Add