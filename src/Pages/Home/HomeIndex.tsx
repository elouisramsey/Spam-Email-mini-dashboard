import Loader from 'Components/loading/loader'
import { headerData } from 'Components/Table/headerData'
import TableIndex from 'Components/Table/TableIndex'
import TableItem, { UserProps } from 'Components/Table/TableItem'
import api from 'Config/axios/api'
import { UserInterFcae } from 'Config/types/UserType'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function HomeIndex({}: Props) {
  const [allUsers, setAllUsers] = useState<UserInterFcae[] | []>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    api
      .get('/user')
      .then((res) => {
        setAllUsers(res.data.users)
        setLoading(false)
      })
      .catch((err: any) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='w-11/12'>
      {!loading && (
        <TableIndex
          header='Registered Users'
          headerData={headerData}
          heading='Browse a list of our registered users'
        >
          {allUsers.map((item: any, i: number) => (
            <React.Fragment key={item._id}>
              <TableItem {...item} />
            </React.Fragment>
          ))}
        </TableIndex>
      )}
      {loading && <Loader />}
    </div>
  )
}
