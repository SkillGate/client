import React from 'react'
import Image from 'next/image'
import { imageUrl } from '@/constants'

const Item = ({ data }: any): JSX.Element => {
  return (
    <div>
      <div className='p-4'>
        <div className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50' >
          <div>
            <Image className='mb-10' src={imageUrl[data.icon].url} alt={imageUrl[data.icon].alt} width='60' height='60' />
            {data.title}
            <span className='absolute inset-0'></span>
            <p className='mt-1 text-gray-500'>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
