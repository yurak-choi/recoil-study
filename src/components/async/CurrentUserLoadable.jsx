import React from 'react';
import {useRecoilValueLoadable} from 'recoil';
import {getCurrentUser} from '../../recoil/async';

function CurrentUserLoadable() {
  const userLoadable = useRecoilValueLoadable(getCurrentUser);

  if (userLoadable.state === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>Now User is {userLoadable.contents.name}</p>
    </div>
  );
}

export default CurrentUserLoadable;