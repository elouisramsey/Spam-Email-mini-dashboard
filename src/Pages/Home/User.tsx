import Loader from 'Components/loading/loader'
import ModalIndex from 'Components/Modal/ModalIndex'
import TableIndex from 'Components/Table/TableIndex'
import api from 'Config/axios/api'
import { userHeaderData } from 'Pages/User/userheaderdata'
import UserTableItem from 'Pages/User/UserTableItem'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

export default function User({}: Props) {
  const [userRequests, setUserRequests] = useState([])
  const [activeRequest, setActiveRequest] = useState<boolean>(false)
  const [activeReaquestItemID, setActiveRequestItemID] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState({})

  let params = useParams()

  useEffect(() => {
    setLoading(true)

    api
      .get(`/mail/${params.id}`)
      .then((res) => {
        setLoading(false)
        setUserRequests(res.data.requests)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
      })
  }, [])

  return (
    <section className='w-11/12'>
      {!loading && (
        <TableIndex
          header='User Information'
          headerData={userHeaderData}
          heading='List of requests logged by user'
        >
          {userRequests.length >= 1 &&
            userRequests.map((item: any) => (
              <tr
                onClick={() => {
                  setActiveRequest(true)
                  setActiveItem(item)
                }}
                key={item._id}
                className='bg-white border-b dark:border-gray-700 cursor-pointer'
              >
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-black whitespace-nowrap '
                >
                  {item._id}
                </th>
                <td className='py-4 px-6 text-center'>{item.id}</td>
                <td className='py-4 px-6 text-center'>{item.status}</td>
              </tr>
            ))}
          {userRequests.length === 0 && (
            <tr className=''>
              <td>No requests yet.</td>
            </tr>
          )}
        </TableIndex>
      )}
      {loading && <Loader />}
      {activeRequest && (
        <ModalIndex
          activeItem={activeItem}
          setActiveRequest={setActiveRequest}
          header='Request Information'
          paragraph='Unsubsribe request information'
        />
      )}
    </section>
  )
}
