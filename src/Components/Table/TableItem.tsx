import React from 'react'
import { useNavigate } from 'react-router-dom'

export interface UserProps {
  username: string
  phone: string
  createdAt: string
  _id: string
  status: string
}

export default function TableItem({ username, phone, createdAt, _id, status }: UserProps) {
  const navigate = useNavigate()

  const navigateToDetails = (id: string) => {
    // 👇️ navigate to /contacts
    navigate(`/user/${id}`)
  }
  return (
    <tr
      className='bg-white border-b dark:border-gray-700 cursor-pointer'
      onClick={() => navigateToDetails(_id)}
    >
      <th
        scope='row'
        className='py-4 px-6 font-medium text-black whitespace-nowrap capitalize'
      >
        {username}
      </th>
      <td className='py-4 px-6 text-center'>{phone}</td>
      <td className='py-4 px-6 text-center uppercase'>{status}</td>
      <td className='py-4 px-6 text-center'>{createdAt}</td>
    </tr>
  )
}
