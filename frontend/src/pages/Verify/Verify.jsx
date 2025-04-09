import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

function Verify() {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const navigate = useNavigate()

    const { url } = useContext(StoreContext)

    const verifyPayment = async ( ) => {
        const response = await axios.post(url + "/api/order/verify", {success, orderId})
        if (response.data.success) {
            navigate("/myorders")
        } else {
            alert("Failed to verify payment")
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [])
    

  return (
    <div className='min-h-[60vh] grid'>
        <div className='verify w-[100px] h-[100px] place-self-center border-4 border-gray-300 border-t-primary'>

        </div>
    </div>
  )
}

export default Verify