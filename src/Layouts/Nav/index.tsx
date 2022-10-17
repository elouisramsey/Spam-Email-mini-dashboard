import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function NavIndex({}: Props) {
  return (
    <aside className='w-2/12 h-full bg-secondary' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3'>
        <ul className='space-y-2'>
          <li>
            <Link
              to={'/'}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='#fff'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to={'/requests'}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='#fff'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Requests</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}