import React from 'react';
import { CareersTable } from './CareersTable';

const Careers = (props) => {
  console.log(window.innerWidth)
  if(window.innerWidth < 576) {
    return <UsersMobile users={props.users} />
  }
  else return <CareersTable users={props.users} />
}

export default Careers