import React from 'react';
import CurrentUser from './CurrentUser';
import UserList from './UserList';

function index() {
  return (
    <div>
      <CurrentUser />
      <UserList />
    </div>
  );
}

export default index;