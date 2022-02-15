import React, { FunctionComponent } from 'react'
import {history} from '../../../configureStore'
import Bell from 'src/img/icon_bell.png'
import iconUser from 'src/img/icon_user.png'
import iconExit from 'src/img/icon_exit.png'

const IDEHeaderOption = () => {
    const openPage = (url) => { history.push(url) }

    return (
        <>
            <button>
                <img src={Bell} onClick={()=>{}} alt="bell"/>
            </button>
            <button>
                <img src={iconUser} onClick={()=>openPage('/mypage')} alt="user"/>
            </button>
            <button>
                <img src={iconExit} onClick={()=>openPage('/')} alt="exit"/>
            </button>
        </>
    )
}

export default IDEHeaderOption