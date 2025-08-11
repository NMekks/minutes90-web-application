import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockUsers } from '../mock-data/users';

const ProfilePage = () => {
  const { userId } = useParams();
  const { t } = useTranslation();
  const user = mockUsers.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div className="container text-center mt-5"><h2>User not found.</h2></div>;
  }

  return (
    <div>
      <div style={{ height: '300px', background: `url(${user.profile.coverPhoto}) center center / cover no-repeat` }}></div>
      <div className="container" style={{ marginTop: '-75px' }}>
        <img src={user.profile.profilePicture} alt={user.profile.displayName} className="rounded-circle border border-5 border-white" width="150" height="150" />
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="mt-3">{user.profile.displayName} {user.is_verified && <i className="bi bi-patch-check-fill text-primary"></i>}</h2>
            <button className="btn btn-outline-secondary">{t('profile_edit')}</button>
        </div>
        <p className="text-muted text-capitalize">{t(`role_${user.role}`)}</p>

        <div className="row mt-4">
          <div className="col-md-4">
            <h4>{t('profile_stats')}</h4>
            <ul className="list-group">
              {Object.entries(user.profile.stats).map(([key, value]) => (
                <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                  {key}
                  <span className="badge bg-primary rounded-pill">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-8">
            <h4>{t('profile_videos')}</h4>
            {user.profile.videos && user.profile.videos.length > 0 ? (
                <div className="ratio ratio-16x9">
                    <iframe src={user.profile.videos[0]} title="YouTube video player" allowFullScreen></iframe>
                </div>
            ) : <p>No videos available.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;