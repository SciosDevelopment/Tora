import React, {useState} from 'react'
import Terminal, {term} from '../../../components/common/Terminal'
import iconDown from 'src/img/ide/icon_down.png'
import iconClose from 'src/img/ide/icon_close.png'
import { Resizable } from 're-resizable'

const TerminalView = (props) => {
    const {tokenValue, sessionUrl} = props
    const [terminalBoxSize, setTerminalBoxSize] = useState({height:330})
    
    return (    
        <Resizable className="terminalBox"
        size={{ width: '100%', height:terminalBoxSize.height}}
        onResizeStop={(e, direction, ref, d) => {
            const height = terminalBoxSize.height + d.height
            setTerminalBoxSize({ height: height })
            if(term != null) term.resize(term.cols, Math.floor((height-30)/20)-2)
        }}>
            <div className="terminalHead">
                <div className="left">
                    <button className="on">Terminal</button>
                    <button>Debug</button>
                    <button>Path</button>
                </div>
                <div className="right">
                    <button>
                        <img src={iconDown} alt="down" />
                    </button>
                    <button>
                        <img src={iconClose} alt="close" />
                    </button>
                </div>
            </div>
            <div className="terminalBody">
                <Terminal tokenValue={tokenValue} sessionUrl={sessionUrl}/>
            </div>
        </Resizable>
    )
}

export default TerminalView