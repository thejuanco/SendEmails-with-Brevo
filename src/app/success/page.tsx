import React from 'react'
import Link from "next/link"

const success = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-20'>
        <div className='flex justify-center items-center flex-col p-6 rounded-lg shadow-lg border w-1/4 space-y-6'>
          <img src='comprobado.png' alt='success' className='w-14 h-14' />
          <h1 className='font-bold text-3xl mt-6 text-center'>¡Tú correo se envio correctamente!</h1>
          <p className='text-center text-gray-500'>Tu correo se ha enviado con exito, tu contacto respondera a la brevedad posible.</p>
          <Link href='/' className='text-center rounded-lg text-white bg-gray-900 px-4 py-2'>Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}

export default success