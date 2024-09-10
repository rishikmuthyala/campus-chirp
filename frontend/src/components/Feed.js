import React, { useState, useEffect } from 'react';
import Post from './Post';
import { getPosts } from '../services/api';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  return (
    <div className="feed">
      {posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default Feed;