import {FunctionComponent} from 'react';
import Modal from 'react-modal';

const MyModal:FunctionComponent<any> = (Props) => {
    const {message} = Props;
    const {modalOpen} = Props;
    const {modalClose} = Props;

    const width = 300;
    const height = width*2/3;

    const customstyle = {
        content : {
            top: '0',
            bottom: '0',
            left: '0',
            rigt: '0',
            margin: 'auto',
            backgroundColor: '#fefefe',
            boxSizing: 'border-box',
            width: width + 'px',
            height: height + 'px'
        }
    }

    const contentstyle = {

    }

    const buttonstyle = {
        color: 'black',
        display: 'block',
        position: 'absolute' as 'absolute',
        top: '10px',
        right: '15px',
        cursor: 'pointer'
    }
    
    return (
        <div className="Modal-main">
            <Modal
            portalClassName="modal-design"
            isOpen={modalOpen}
            onRequestClose={modalClose}
            style={customstyle}>
            <div className="modal-contents" style={contentstyle}>
                <p>{message}</p>
            </div>
            <div className="modal-close">
                <span className="close" onClick={modalClose} style={buttonstyle}>
                    &times;
                </span>
            </div>
            </Modal>
        </div>
    );
};
export default MyModal;