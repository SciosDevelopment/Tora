import React from 'react';
import './style/SecessionView.scss'
const SecessionView = () => {
    return (
        <div className = "Secess-account-view">
            <div className = "Secess-account-title">
                {`Are you sure to delete this account ?`}
            </div>
            <div className = "Secess-account-text-area">
                {
                    `Once you delete your account,
                    you can not restore your repos,
                    community posts, and etc.
                    After you delete your account,
                    your username could be used by 
                    other users.`
                }

            </div>

            <form className = "Secess-account-input-form">
                <div className = "Secess-account-input-wrapper">
                    {
                        `type in your username/email to 
                        procede to delete account`
                    }
                     <div className = "Secess-account-input-container">
                        <input type = "input" required/>
                    </div>
                    
                </div>
                
                <div className = "Secess-account-input-wrapper">
                    {
                        `type "delete account" below 
                        to finish deleting your account`
                    }
                      <div className = "Secess-account-input-container">
                        <input type = "input" required/>
                    </div>
                </div>
                
                <div className = "Secess-account-submit-button">
                    <button>Delete Account</button>
                </div>
            </form>
        </div>
    );
};

export default SecessionView