import { Socket } from 'net'
import React, {FunctionComponent, useState, useEffect} from 'react'
import { Terminal } from 'xterm'
import { AttachAddon } from 'xterm-addon-attach'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import './style/Terminal.scss'

const options = {
    lineHeight:1.1,
    cursorblink: true,
    rows: 10,
    cols: 120,
}

const TerminalView  = (props) => {
    const {terminalID, userInfo = "userInfo"} = props
    var term : Terminal
    var cur_line = ''
    var cursor = 0
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const welcomeText = "this is tora command\n\rthis cmd version is 0.0.1\n\n\n\n\n\n\n\n\n\n\n\n"
    useEffect(() => { init() }, [])

    const termEnter = () => {
        var shellprompt = userInfo + ">"
        term.write("\r\n" + shellprompt)
        // send data
        if(cur_line != "") {
            console.log(cur_line)
            cur_line = ''
        }

    }
    const termBackspace = () => {
        if (cur_line.length > 0) {  // 한글에 대해서는 처리가 되지않은 상태
            // if deletable text has, delete text.
            cur_line = cur_line.slice(0, -1)
            term.write('\b \b')
        }
    }

    const init = async() => {
        var terminalView = document.getElementById('Terminal-main')
        if(terminalView == null) return

        var terminal = document.createElement('div')
        terminal.id = terminalID
        terminalView.appendChild(terminal)
        
        if(terminal == null) return // terminal is not activated. (error)
        var ws = new WebSocket('ws://localhost:9898/')
        term = new Terminal(options)
        term.open(terminal)

        const attachAddon = new AttachAddon(ws)
        ws.onopen = function() { term.loadAddon(attachAddon) }
        ws.onerror = function(e) { console.log(e) }
        InitUISetting()
    }

    
    const InitUISetting = async() => {
        term.write(welcomeText)
        termEnter()

        term.onData((data) => {
            // 참고자료 : https://www.linkedin.com/pulse/xtermjs-local-echo-ioannis-charalampidis/
            const code_ = data.charCodeAt(0)

            if(code_ > 127) return // 한글입력 임시차단

            if (code_ == 13) termEnter() // Enter
            else if(code_ == 127) termBackspace() // backspace
            else if (code_ < 32) return// Control  
            else { // Visible
                term.write(data)
                cur_line += data
            }
        })
    }
    return (<div id="Terminal-main"/>)
}
export default TerminalView

// xterm example : https://codepen.io/ScreaminSauce/pen/ZBRGEE
// node-pty : Writing a terminal emulater (eg. via xterm.js) : https://github.com/microsoft/node-pty
// node-pty + ws + xterm example : https://blog.totaljs.com/posts/140289001cx61b/

// wetty (Web + tty) 참고자료 : https://github.com/butlerx/wetty