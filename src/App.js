import React from 'react';
import {RecoilRoot} from 'recoil';
import TodoList from './components/tutorial/TodoList';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
