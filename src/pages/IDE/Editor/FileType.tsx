import IDEType from '../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected, CanSaved, onClosed, Selected} = props
    
    return (
        <button className={`${Selected ? 'on': ''}`}
            onClick={onSelected} title={File.filename}>
            <img src = {IDEType} alt=""/> {/* temp */}
            <span>{File.filename}</span>
            <div className = "close" onClick={onClosed}>{CanSaved ? '*' : 'X'}</div>
        </button>
    )
}

export default FileType