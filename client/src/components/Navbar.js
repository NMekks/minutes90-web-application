import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    // Handle RTL for Arabic
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/feed">minutes90</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/feed">{t('nav_feed')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/search">{t('nav_search')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/messages">{t('nav_messages')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/subscription">{t('nav_subscription')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">{t('nav_admin')}</Link></li>
          </ul>
          <div className="d-flex">
            <div className="dropdown me-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown">
                <i className="bi bi-globe"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('de')}>German</button></li>
                <li><button className="dropdown-item" onClick={() => handleLanguageChange('ar')}>Arabic</button></li>
              </ul>
            </div>
            <Link className="btn btn-outline-light" to="/login">{t('nav_logout')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;