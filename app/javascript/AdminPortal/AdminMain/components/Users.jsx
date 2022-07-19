import React, { useEffect, useState } from 'react';
import { UsersMobile } from './UsersMobile'
import { UsersDesktop } from './UsersDesktop';

const Users = (props) => {
  const [stacked, setStacked] = useState(false)
  const [buttonIcon, setButtonIcon] = useState("bi bi-view-stacked")
  const [buttonText, setButtonText] = useState("View Stacked")
  const [display, setDisplay] = useState(<UsersDesktop users={props.users}/>)

  useEffect(() => {
    if (window.innerWidth < 576 || stacked === true) {
      setButtonIcon("bi bi-list-ul")
      setButtonText("View List")
      setDisplay(<UsersMobile users={props.users} />)
    }
    else {
      setButtonIcon("bi bi-view-stacked")
      setButtonText("View Stacked")
      setDisplay(<UsersDesktop users={props.users}/>)
    }
  }, [window.innerWidth, stacked])

  const handleClick = () => {
    setStacked(prev => !prev)
  }

  return (
    <>
      <div className='mt-4 mx-3'>
        <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>
          <i className={`${buttonIcon} me-2`} />
          {buttonText}
        </button>
      </div>
      {display}
    </>
  )
}

export default Users