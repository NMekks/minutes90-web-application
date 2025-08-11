import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockUsers } from '../mock-data/users';

const AdminDashboard = () => {
    const { t } = useTranslation();
    const [users, setUsers] = useState(mockUsers);

    const handleVerify = (userId) => {
        setUsers(users.map(u => u.id === userId ? { ...u, is_verified: !u.is_verified } : u));
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">{t('admin_dashboard_title')}</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.profile.displayName}</td>
                                <td className="text-capitalize">{t(`role_${user.role}`)}</td>
                                <td>{user.is_verified ? 
                                    <span className="badge bg-success">Verified</span> : 
                                    <span className="badge bg-warning">Not Verified</span>}
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-primary me-2" onClick={() => handleVerify(user.id)}>
                                        {t('admin_action_verify')}
                                    </button>
                                    <button className="btn btn-sm btn-danger">
                                        {t('admin_action_suspend')}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;