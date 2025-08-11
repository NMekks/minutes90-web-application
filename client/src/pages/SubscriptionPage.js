import React from 'react';
import { useTranslation } from 'react-i18next';

const SubscriptionPage = () => {
    const { t } = useTranslation();
    const plans = [
        { name: "Basic", price: "Free", features: ["Basic Profile", "View Posts", "Limited Search"] },
        { name: "Pro Player", price: "€9.99/mo", features: ["Verified Badge", "Advanced Stats", "Video Uploads", "Priority Support"] },
        { name: "Club / Agency", price: "€49.99/mo", features: ["Post Tryouts", "Advanced Search Filters", "Direct Messaging to Players", "Multiple Accounts"] }
    ];

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1>{t('subscription_title')}</h1>
                <p className="lead">Unlock your full potential on minutes90.</p>
            </div>
            <div className="row">
                {plans.map(plan => (
                    <div className="col-lg-4" key={plan.name}>
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">{plan.name}</h5>
                                <h6 className="card-price text-center">{plan.price}<span className="period"></span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    {plan.features.map(feature => <li key={feature}><span className="fa-li"><i className="bi bi-check"></i></span>{feature}</li>)}
                                </ul>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary text-uppercase">{t('subscription_button')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPage;