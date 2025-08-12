import React from 'react'
import { useParams } from 'react-router-dom'
function UserData() {
    let {userid} =useParams()
  return (
    <div>
      userdata :{userid}
    </div>
  )
}

export default UserData
