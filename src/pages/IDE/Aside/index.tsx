import React, { useState } from 'react'
import { Resizable } from 're-resizable'
import iconCoin1 from 'src/img/icon_coin1.png'

const Aside = (props) => {
    const {visible} = props
    const [asideBoxSize, setAsideBoxSize] = useState({width:0});
    return (
        visible &&
        <Resizable className="asideBox"
            size={{ width: asideBoxSize.width, height:'100%'}} 
            enable={{ left:true, }} minWidth={300} maxWidth={1000}
            onResizeStop={(e, direction, ref, d) => {setAsideBoxSize({ width: asideBoxSize.width + d.width, })}}>
            <div className="asideHead">
                <button>Issues</button>
                <button>Snippets</button>
            </div>
            <div className="asideBody">
                <button>
                    <img src={iconCoin1} alt="coin icon" />
                    <span>Loginview.tsx src\compoLoginview.tsx src\compo</span>
                </button>
                <button>
                    <img src={iconCoin1} alt="coin icon" />
                    <span>Loginview.tsx src\compoLoginview.tsx src\compo</span>
                </button>
                <button>
                    <img src={iconCoin1} alt="coin icon" />
                    <span>Loginview.tsx src\compoLoginview.tsx src\compo</span>
                </button>
                <button>
                    <img src={iconCoin1} alt="coin icon" />
                    <span>Loginview.tsx src\compoLoginview.tsx src\compo</span>
                </button>
                <button>
                    <img src={iconCoin1} alt="coin icon" />
                    <span>Loginview.tsx src\compoLoginview.tsx src\compo</span>
                </button>
            </div>
        </Resizable>
    )
}

export default Aside