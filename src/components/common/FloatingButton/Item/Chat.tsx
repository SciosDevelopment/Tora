import {FunctionComponent, useState, useEffect, CSSProperties} from 'react'
import FloatingButtonItem from '.'
import Chat from '../../Chat'
import TestImage from '../../../../img/ToraLogo@1.png'

const FloatingChat = () => {
    const [activate, setActivate] = useState(false)
    

    // temp
    const tempStyle:CSSProperties= {
        position: "absolute",
        right:"100px",
        bottom: "40px",
        width: "360px",
        height: "540px",
        border: "solid 1px #707070",
        borderRadius: "10px",
        backgroundColor: "skyblue"
    }
    return (
            <FloatingButtonItem onActivate={()=>setActivate(!activate)} icon={TestImage}>
                { activate && <Chat onClose={()=>{setActivate(false)}}/>}
            </FloatingButtonItem>    
    )
}

export default FloatingChat

//--isolatedModules