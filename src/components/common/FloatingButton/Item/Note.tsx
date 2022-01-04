import {FunctionComponent, useState, useEffect} from 'react'
import FloatingButtonItem from '.'
import TestImage from '../../../../img/ToraLogo@1.png'

// tempfile
const FloatingNote = () => {
    const [activate, setActivate] = useState(false)
  
    return (
            <FloatingButtonItem onActivate={()=>setActivate(!activate)} icon={TestImage}>
                {activate && "Hello world"}
            </FloatingButtonItem>    
    )
}

export default FloatingNote