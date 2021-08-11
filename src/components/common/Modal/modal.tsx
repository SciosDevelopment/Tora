import {FunctionComponent} from 'react'
import Modal from 'react-modal'
import './style/Modal.scss'
const CustomModal:FunctionComponent<any> = (Props) => {
    const {modalOpen, modalClose,title} = Props

    // https://reactcommunity.org/react-modal 참고
    const customstyle = {
        content : {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
            padding:'3px',
            backgroundColor: '#fefefe',
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content'
        },
        overlay: {zIndex: 999}
    }

    const buttonstyle = {
        color: 'black',
        display: 'block',
        position: 'absolute' as 'absolute',
        top: '-3px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '25px'
    }
    
    return (
        <Modal
        portalClassName="modal-design"
        isOpen={modalOpen}
        onRequestClose={modalClose}
        style={customstyle}>
            <div className="modal-title">
                {title && <span className="title"><p>{title}</p></span>}
                <span className="close" onClick={modalClose} style={buttonstyle}>
                    &times;
                </span>
            </div>
            <div className="modal-contents">
                    {Props.children}
            </div>
        </Modal>
    )
}

export default CustomModal