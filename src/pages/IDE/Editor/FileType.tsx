import IDEType from '../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected, CanSaved, onClosed, Selected} = props
    
    return (
        <button className={`${Selected ? 'on': ''}`}
            onClick={onSelected} title={File.filename}>
            <img src = {IDEType} alt=""/> {/* temp */}
            <span>{File.filename}</span>
            <button className = "close" onClick={onClosed}>{CanSaved ? '*' : 'X'}</button>
        </button>
    )
}

export default FileType