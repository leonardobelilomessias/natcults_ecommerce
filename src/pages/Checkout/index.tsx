import React, { useContext, useEffect, useState } from 'react'
import { Container } from './Styles'
import {useForm,FormProvider } from 'react-hook-form'
import { CartContext } from '../../context/ContextCart'
import { api } from '../../services/api'
import getStripeJs from '../../services/stripe-js'



function Checkout() {
  const methods = useForm()
  const [total,setTotal] =useState(0)
  const {cart,deleteItem,setCart} = useContext(CartContext)
  useEffect(()=>{
   setTotal( cart.reduce((acc,vlr)=>{
      return acc + vlr.price
    },0))
  },[cart])
  const handleSubmit = async(event)=>{
    event.preventDefault()
    try{
      const response = await api.post('/payment',{totalAmount:total})
      const {sessionId}= response.data
      const stripe = await getStripeJs()
      await  stripe.redirectToCheckout({sessionId})
      
       
    }catch(err){
      alert(err)
    }
  }
  return (
    <Container>
      <h1>Checkout</h1>
      <FormProvider {...methods}>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
      <h2>{total}</h2>
        <button type="submit">Finalizar</button>
        </form>

      </FormProvider>

    </Container>
  )
}

export default Checkout