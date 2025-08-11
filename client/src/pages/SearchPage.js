import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mockUsers } from '../mock-data/users';

const SearchPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredUsers = useMemo(() => {
    return mockUsers
      .filter(user => roleFilter === 'all' || user.role === roleFilter)
      .filter(user => user.profile.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, roleFilter]);

  return (
    <div className="container mt-4">
      <h1>{t('nav_search')}</h1>
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder={t('search_placeholder')}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select" value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
            <option value="all">{t('search_role_all')}</option>
            <option value="player">{t('role_player')}</option>
            <option value="club">{t('role_club')}</option>
            <option value="agent">{t('role_agent')}</option>
            <option value="scout">{t('role_scout')}</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredUsers.map(user => (
          <div className="col-md-6 col-lg-4 mb-3" key={user.id}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                  <div className="text-center">
                    <img src={user.profile.profilePicture} alt={user.profile.displayName} className="rounded-circle mb-2" width="80" height="80"/>
                    <h5 className="card-title">
                        <Link to={`/profile/${user.id}`} className="text-decoration-none">{user.profile.displayName}</Link>
                        {user.is_verified && <i className="bi bi-patch-check-fill text-primary ms-1"></i>}
                    </h5>
                    <p className="text-muted text-capitalize">{t(`role_${user.role}`)}</p>
                  </div>
                  <Link to={`/profile/${user.id}`} className="btn btn-sm btn-outline-primary mt-auto">View Profile</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;