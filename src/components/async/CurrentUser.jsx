import React from 'react';
import {useRecoilValue} from 'recoil';
import {getCurrentUser} from '../../recoil/async';

function CurrentUser() {
  const user = useRecoilValue(getCurrentUser);

  return (
    <div>
      <p>Now User is {user.name}</p>
    </div>
  );
}

export default CurrentUser;