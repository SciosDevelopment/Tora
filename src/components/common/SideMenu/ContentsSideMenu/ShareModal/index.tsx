import Modal from '../../../Modal/modal'

const ShareModal = (props) => {
    const {modalOpen, modalClose} = props
    
    return (
        <Modal modalOpen ={modalOpen} modalClose = {modalClose} title="Tora Share">
            공유하시겠습니까?<br/>
            <a href={window.location.href}>{window.location.href}</a>
        </Modal>
    )
}

export default ShareModal