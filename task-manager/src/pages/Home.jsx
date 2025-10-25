import React from 'react';
import TaskManager from '@/components/TaskManager';
import PostList from '@/components/PostList';

const Home = () => {
  return (
    <>
      <TaskManager />
      <PostList />
    </>
  );
};

export default Home;