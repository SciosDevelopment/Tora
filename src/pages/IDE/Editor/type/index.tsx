import './style/FileType.scss'
import IDEType from '../../../../img/idetype.png'

const FileType = (props) => {
    const {File, onSelected, CanSaved, onClosed, Selected} = props
    
    return (
        <div className={`IDE-Filetype${Selected ? ' active': ''}`}
            onClick={onSelected} title={File.filename}>
            <img src = {IDEType} alt=""/> {/* temp */}
            <p>{File.filename}</p>
            <div className = "IDE-Filetype-close" onClick={onClosed}>{CanSaved ? '*' : 'X'}</div>
        </div>
    )
}

export default FileType