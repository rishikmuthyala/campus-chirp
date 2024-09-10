import React, { useState } from 'react';
import { createPost } from '../services/api';

function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(content, files);
      setContent('');
      setFiles([]);
      onPostCreated();
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening on campus?"
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;