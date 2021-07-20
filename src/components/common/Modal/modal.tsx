import {FunctionComponent} from 'react'
import Modal from 'react-modal'

const CustomModal:FunctionComponent<any> = (Props) => {
    const {modalOpen, modalClose} = Props

    // https://reactcommunity.org/react-modal 참고
    const customstyle = {
        content : {
            display: 'flex',
            justifyContent:'center',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
            backgroundColor: '#fefefe',
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content'
        },

        overlay: {zIndex: 999}
    }

    const contentstyle = {
        
    }

    const buttonstyle = {
        color: 'black',
        display: 'block',
        position: 'absolute' as 'absolute',
        top: '10px',
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
            <div className="modal-contents" style={contentstyle}>
                    {Props.children}
            </div>
            <div className="modal-close">
                <span className="close" onClick={modalClose} style={buttonstyle}>
                    &times;
                </span>
            </div>
        </Modal>
    )
}

export default CustomModal