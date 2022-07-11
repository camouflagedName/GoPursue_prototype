import React from 'react';
import { UsersMobile } from './UsersMobile'
import { UsersDesktop } from './UsersDesktop';

const Users = (props) => {
  console.log(window.innerWidth)
  if(window.innerWidth < 576) {
    return <UsersMobile users={props.users} />
  }
  else return <UsersDesktop users={props.users} />
}

export default Users