import React from 'react'

type Props = {
  heading: string
  headerData: Array<string>
  children: React.ReactNode
  header: string
}

export default function TableIndex({
  heading,
  headerData,
  children,
  header
}: Props) {
  return (
    <table className='w-full p-4'>
      <caption className='p-5 text-lg font-semibold text-left text-gray-900'>
        {header}
        <p className='mt-1 text-sm font-normal text-gray-500 dark:text-gray-400'>
          {heading}
        </p>
      </caption>
      <thead className='text-xs text-gray-700 uppercase w-full'>
        <tr>
          {headerData.map((item: string, i: number) => (
            <th scope='col' className='py-3 px-6' key={i}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
