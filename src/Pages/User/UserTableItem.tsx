import React from 'react'

type Props = {
  _id: string
  id: string
  status: string
}

function UserTableItem({
  _id,
  id,
  status,
}: Props) {
  return (
    <tr
    key={_id}
      className='bg-white border-b dark:border-gray-700 cursor-pointer'
    >
      <th
        scope='row'
        className='py-4 px-6 font-medium text-black whitespace-nowrap '
      >
        {_id}
      </th>
      <td className='py-4 px-6 text-center'>{id}</td>
      <td className='py-4 px-6 text-center'>{status}</td>
    </tr>
  )
}

export default UserTableItem