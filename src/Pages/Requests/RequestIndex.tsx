import Loader from 'Components/loading/loader'
import ModalIndex from 'Components/Modal/ModalIndex'
import TableIndex from 'Components/Table/TableIndex'
import api from 'Config/axios/api'
import { userHeaderData } from 'Pages/User/userheaderdata'
import React, { useEffect, useState } from 'react'

type Props = {}

function RequestIndex({}: Props) {
  const [allRequests, setAllRequests] = useState<any>([])
  const [activeRequest, setActiveRequest] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState({})

  useEffect(() => {
    setLoading(true)
    api
      .get('/mail')
      .then((res) => {
        setAllRequests(res.data.unsubscribeRequests)
        setLoading(false)
      })
      .catch((err: any) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='w-11/12'>
        {!loading &&
      <TableIndex
        header='Unsubscribe Requests'
        headerData={userHeaderData}
        heading='Browse a list of our mail unsubscribe requests.'
      >
        {allRequests.length >= 1 &&
          allRequests.map((request: any) => (
            <tr
              onClick={() => {
                setActiveRequest(true)
                setActiveItem(request)
              }}
              key={request._id}
              className='bg-white border-b dark:border-gray-700 cursor-pointer'
            >
              <th
                scope='row'
                className='py-4 px-6 font-medium text-black whitespace-nowrap '
              >
                {request._id}
              </th>
              <td className='py-4 px-6 text-center'>{request.id}</td>
              <td className='py-4 px-6 text-center'>{request.status}</td>
            </tr>
          ))}
        {allRequests.length === 0 && (
          <tr className=''>
            <td>No requests yet.</td>
          </tr>
        )}
      </TableIndex>}
      {loading && <Loader />}
      {activeRequest && (
        <ModalIndex
          activeItem={activeItem}
          setActiveRequest={setActiveRequest}
          header='Request Information'
          paragraph='Unsubsribe request information'
        />
      )}
    </div>
  )
}

export default RequestIndex
