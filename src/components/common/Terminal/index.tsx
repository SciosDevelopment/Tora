import React, { useEffect } from 'react'
import { Terminal } from 'xterm'
import { ssm } from 'ssm-session'
import 'xterm/css/xterm.css'
import axios from 'axios'

const options = {
    lineHeight:1.1,
    cursorblink: true,
    rows: 15,
    cols: 150,
}

export let term : Terminal

const textDecoder = new TextDecoder()
const textEncoder = new TextEncoder()

const TerminalView  = (props) => {
    let {tokenValue, sessionUrl} = props
    let socket : WebSocket

    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const welcomeText = "this is tora command\n\rthis cmd version is 0.0.1\n\n\n\n\n\n\n\n\n\n"
    
    useEffect(() => { init() }, [])
    
    const init = async() => {
        var terminalView = document.getElementById('terminalView')
        if(terminalView == null) return
        var terminal = document.createElement('div')
        terminal.id = "terminal"
        terminalView.appendChild(terminal)
        
        if(terminal == null) return // terminal is not activated. (error)
        // sessionUrl = "sessinUrl"
        // tokenValue = "TokenValue"
        reConnect()
        if(sessionUrl !== undefined) { // sessionInfo is exist
            socket = new WebSocket(sessionUrl)
            socket.binaryType = "arraybuffer"

            socket.addEventListener("open", (event)=>{
                ssm.init(socket, {
                    token: tokenValue,
                    termOptions: options,
                })
            })
    
            socket.addEventListener("close", async(event)=>{
                console.log("WebSocket Closed")
                reConnect()
            })
    
            socket.addEventListener("message", (event)=>{
                var agentMessage = ssm.decode(event.data)
                ssm.sendACK(socket, agentMessage)
                if(agentMessage.payloadType === 1) {
                    term.write(textDecoder.decode(agentMessage.payload))
                } else if(agentMessage.payloadType === 17) {
                    ssm.sendInitMessage(socket, options)
                }
            })
        }

        term = new Terminal(options)
        term.open(terminal)
        term.write(welcomeText)
        term.onData(data => socket ?
            ssm.sendText(socket, textEncoder.encode(data)) : alert("Terminal is not Connected"))
        term.focus()
    }
    
    const reConnect = async() => {
        const data = {"taskid":"1a6df2e7e7ee4b4db304cc78688ce053"} // temp taskid - get by server.
        console.log(data)
        // not send, cors err. 재설정이 필요함
        const API_URL = 'https://example.apiserver.com/'
        // axios.post(API_URL + `/v1/terminal`, data)
        // .then((res)=>{ console.log(res)})
        // .catch((e)=>{ console.log(e)})
    }

    const stopTerm = ()=> {
        if(socket) socket.close()
        term.dispose()
    }
 
    return (<div id="terminalView"/>)
}
export default TerminalView

// xterm example : https://codepen.io/ScreaminSauce/pen/ZBRGEE
// node-pty : Writing a terminal emulater (eg. via xterm.js) : https://github.com/microsoft/node-pty
// node-pty + ws + xterm example : https://blog.totaljs.com/posts/140289001cx61b/
// node-pty with xterm : https://stackoverflow.com/questions/66058499/how-to-combine-node-pty-and-xterm
// wetty (Web + tty) 참고자료 : https://github.com/butlerx/wetty
// xterm resize : https://www.tabnine.com/code/javascript/functions/xterm/rows