import api from 'Config/axios/api'
import { url } from 'inspector'
import React, { useEffect, useState } from 'react'

type Props = {
  header: string
  paragraph: string
  setActiveRequest: (val: boolean) => void
  activeItem: any
}

const ModalIndex = ({
  header,
  paragraph,
  setActiveRequest,
  activeItem
}: Props) => {
  const [sentRequest, setSentRequest] = useState<any>()

  useEffect(() => {
    if (activeItem.status === 'PENDING') {
      setSentRequest(false)
    } else {
      setSentRequest(true)
    }
  }, [])

  const verifyMail = () => {
    activeItem.status === 'PENDING' &&
      api
        .post('/mail/verify-mail', {
          id: activeItem._id
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
  }

  const pressCheckbox = (e: any) => {
    verifyMail()
    setSentRequest(e.target.checked)
  }

  return (
    <div className='w-screen h-screen z-0 top-0 bg-modalBg absolute items-center justify-center flex'>
      <div className='fixed'>
        <div className='w-150 h-128 bg-white text-white z-10 rounded-xl shadow-md'>
          <div className='h-10 bg-white overflow-hidden rounded-t-xl'>
            <h4 className='m-0 p-4 text-secondary text-lg font-bold text-center'>
              {header}
            </h4>
          </div>
          <button
            className='-mt-2 -mr-2 self-end top-0 right-0 absolute shadow-md transition bg-white color-secondary text-base border-0 rounded font-bold cursor-pointer'
            onClick={() => setActiveRequest(false)}
          >
            <div className='bg-black -mb-sm text-base'>X</div>
          </button>
          <div className='p-2.5 text-md text-primary text-center'>
            {paragraph}
          </div>
          <div className='w-full p-4'>
            <div className='bg-white rounded-lg flex'>
              <img
                className='object-cover h-48 w-96'
                src={activeItem.image}
                alt='Request'
              />
              <div className='px-2'>
                <h5 className='mb-2 text-base font-bold tracking-tight text-secondary'>
                  {activeItem.imageText}
                </h5>
              </div>
            </div>
            <div className='flex items-center my-4'>
              <input
                value={sentRequest}
                id='default-checkbox'
                type='checkbox'
                defaultChecked={sentRequest}
                onChange={(e) => pressCheckbox(e)}
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='default-checkbox'
                className='ml-2 text-sm font-medium text-black'
              >
                Request sent to mail company?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalIndex
