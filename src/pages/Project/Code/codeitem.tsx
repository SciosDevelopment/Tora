import iconFolder from '../../../img/icon_left_live.png'
const CodeItem = (props) => {
    const {projectId} = props    

    return (
        <div className="projectCodeItem">
            <div><img src={iconFolder} alt="t"/>gkasdmklas</div>
            <div>sdafjkdlasfjdsaklfjdsaklfjsadkldfjkldsfakljsdfakjlasdfkjldasfjklas</div>
            <div>Oct 21 at 10:55</div>
        </div>
    )
}

export default CodeItem