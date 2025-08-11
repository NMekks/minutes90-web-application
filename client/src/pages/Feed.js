import React from 'react';
import { useTranslation } from 'react-i18next';
import { mockPosts } from '../mock-data/posts';

// Reusable Post component
const Post = ({ post }) => (
  <div className="card mb-3">
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <img src={post.userProfilePicture} alt={post.userDisplayName} width="40" height="40" className="rounded-circle me-2" />
        <div>
          <h6 className="card-title mb-0">{post.userDisplayName}</h6>
          <small className="text-muted">{post.timestamp}</small>
        </div>
      </div>
      <p className="card-text">{post.text}</p>
      {post.image && <img src={post.image} className="img-fluid rounded" alt="Post content" />}
    </div>
  </div>
);

const Feed = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="text-center my-3">{t('nav_feed')}</h1>
          <div className="card mb-3">
            <div className="card-body">
                <textarea className="form-control" rows="3" placeholder="What's on your mind?"></textarea>
                <button className="btn btn-primary mt-2">{t('feed_new_post')}</button>
            </div>
          </div>
          {mockPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Feed;