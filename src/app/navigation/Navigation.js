import React, { useState } from 'react';
import NavBar from './NavBar';
import Notification from '../notifacations/Notification';
import Togglable from '../togglable/Togglable';
import Login from '../login/Login';
import { Button }  from 'react-bootstrap'

const Navigation = ({ user, toggler }) => {
  const [formVisible, setFormVisible] = useState('neither')

  return user ? (
    <>
      <NavBar user={user} toggler={toggler} />
      <Notification />
    </>
  )
    :(
      <>
        <Notification />
        <div style={{ display: 'flex', marginTop: '1em' }}>
          { formVisible !== 'Log in' && 
            <Togglable style={{ marginRight: '2em'}} buttonLabel='Sign up' visible={false}>
              <Button />
            </Togglable>
          }
          { formVisible !== 'Sign up' &&
            <Togglable setFormVisible={setFormVisible} buttonLabel='Log in' visible={false}>
              <Login />
            </Togglable>
          }
        </div>
      </>
    );
};

export default Navigation;