import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from 'antd';
function Dashboard()
{
  const {logout} = useAuth();
  return(
    <>
      <div>Dashboard</div>
      <Button onClick={logout}>Logout</Button>
    </>
  )
}
export default Dashboard;