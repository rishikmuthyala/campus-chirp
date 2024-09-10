import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.author.username}</h3>
      <p>{post.content}</p>
      {post.files && post.files.map((file, index) => (
        <img key={index} src={file.url} alt="Post attachment" />
      ))}
      <span>Likes: {post.likes.length}</span>
    </div>
  );
}

export default Post;