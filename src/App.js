import React, { useRef, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'sohee',
      email: 'sohee@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'dahyun',
      email: 'dahyun@nate.com',
      active: false
    },
    {
      id: 3,
      username: 'nayun',
      email: 'nayun@gmail.com',
      active: false
    }
  ]);
  const nextId = useRef(4);

  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users,user]);
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    console.log('toggle')
    setUsers(users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ));
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
