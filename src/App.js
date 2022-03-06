import React from 'react';
import {RecoilRoot} from 'recoil';
import Async from './components/async';

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Async />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
