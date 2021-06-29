import React from 'react';
import './style/SnsAccounts.scss'
import Google from '../../../../../img/googleicon.png'
import Reddit from '../../../../../img/redditicon.png'
import Github from '../../../../../img/githubicon.png'
import Stackoverflow from '../../../../../img/stackoverflowicon.png'
import Facebook from '../../../../../img/facebookicon.png'
import Twitter from '../../../../../img/twittericon.png'

const SnsAccounts = () => {
    return (
        <div className = "SNS-accounts">
            <div className = "SNS-accounts-google">
                <img src = {Google} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
            <div className = "SNS-accounts-reddit">
                <img src = {Reddit} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
            <div className = "SNS-accounts-github">
                <img src = {Github} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
            <div className = "SNS-accounts-stackoverflow">
                <img src = {Stackoverflow} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
            <div className = "SNS-accounts-facebook">
                <img src = {Facebook} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
            <div className = "SNS-accounts-twitter">
                <img src = {Twitter} alt=""/>
                <p>gkeoajed@naver.com</p>
            </div>
        </div>
    );
};

export default SnsAccounts;