import React from 'react'
import iconBitcoin from '../../../img/icon_bitcoin.png'
import iconStar from '../../../img/icon_star.png'
import iconPerson from '../../../img/icon_person.png'

const IssuePostItem = (props) => {
    // Issue DataStructure가 정해지면 작성예정
    const {data} = props
    return (
        <div className="item">
            <div className="iconbox">
                <img src={iconBitcoin} alt="coin" />
                <p>112</p>
            </div>
            <div className="textbox">
                <div className="text1">
                    <span>API From users repos to fork owner</span>
                    <mark className='skillMark'>node.js</mark>
                    <mark className='skillMark'>django</mark>
                </div>
                <div className="text2">
                    I'm working with BootstrapVue. I want to splice my inputs in my child.vue after clicking on a button in my parent.vue. But every time I delete something in my parent.vue - which I can promise that it'
                </div>
            </div>
            <div className="num1box">32</div>
            <div className="num2box">1234</div>
            <div className="gradebox">
                <img src={iconStar} alt="star" />
                <p>320</p>
            </div>
            <div className="userbox">
                <p>Oct 21 at 10:55</p>
                <img src={iconPerson} alt="user" />
            </div>
        </div>
    )
}

export default IssuePostItem