import React from 'react';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <CreatePost onPostCreated={() => {/* Refresh feed */}} />
      <Feed />
    </div>
  );
}

export default Dashboard;
