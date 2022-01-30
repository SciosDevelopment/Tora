import iconFolder from '../../../img/img_sample2.png'
const CollaborItem = (props) => {
    const {projectId, data} = props    

    return (
        <div className="collaborItem">
            <div><img src={iconFolder} alt="t"/>gkasdmklas</div>
            <div>
            <img src={iconFolder} alt="Pr"/>
                PR :
                <a href="#">
                        data
                </a>
            </div>
            <div>Oct 21 at 10:55</div>
        </div>
    )
}

export default CollaborItem