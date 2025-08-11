// src/pages/MessagingPage.js (UI Only)
import React from 'react';
import { useTranslation } from 'react-i18next';

const MessagingPage = () => {
    const { t } = useTranslation();
    return (
        <div className="container-fluid h-100">
            <h1 className="text-center my-3">{t('nav_messages')}</h1>
            <div className="row" style={{ height: 'calc(100vh - 150px)'}}>
                {/* Contacts List */}
                <div className="col-md-4 border-end">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-action active">
                            <img src="https://img.a.transfermarkt.technology/portrait/header/28003-1710182518.jpg?lm=1" width="40" height="40" className="rounded-circle me-2" alt="Leo Messi"/>
                            Leo Messi
                        </li>
                         <li className="list-group-item list-group-item-action">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" width="40" height="40" className="rounded-circle me-2" alt="FC Bayern"/>
                            FC Bayern
                        </li>
                    </ul>
                </div>
                {/* Chat Window */}
                <div className="col-md-8 d-flex flex-column">
                    <div className="flex-grow-1 p-3">
                        {/* Messages */}
                        <div className="d-flex justify-content-start mb-3">
                           <div className="bg-light p-2 rounded">Hi, how is the contract negotiation going?</div>
                        </div>
                         <div className="d-flex justify-content-end mb-3">
                           <div className="bg-primary text-white p-2 rounded">Hi Leo, sending the final draft over tomorrow.</div>
                        </div>
                    </div>
                    <div className="p-3 bg-light border-top">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a message..." />
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagingPage;