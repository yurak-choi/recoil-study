import React from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {currentUserIDState, getUsers} from '../../recoil/async';

function UserList() {
  const userList = useRecoilValue(getUsers);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);

  return (
    <ul>
      {userList.map(user => (
        <li key={user.id}>
          <button onClick={() => setCurrentUserID(user.id)}>{user.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;