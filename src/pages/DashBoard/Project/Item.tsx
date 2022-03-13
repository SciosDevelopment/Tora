import Profile11 from 'src/img/profile11.png'
import IdeBtn from 'src/img/ToraLogo@2x.png'
import ChatBtn from 'src/img/openchaticon.png'
import { history } from 'src/configureStore'

const ProjectItem = (Props)=> {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {item} = Props
   
    return (
        <div className = "dbProjectItem">
            <div className="thumbnail">
                <img src={Profile11} alt="Thumbnail"/>
            </div>

            <div className = "description" onClick={()=>history.push(`/project/${item.id}`)}>
                <div>
                    <div className = "title">
                        <p> {item.attributes.name} </p>
                    </div>
                    <div className = "tag">
                        <p>{item.attributes.program_language}</p>
                        {/* {item.attributes.tags.split(" ").map((data)=>{return data && <p>{data}</p>})} */}
                    </div>
                </div>
            </div>
            
            <div className = "details">
                <div className = "items">
                    <div> updated 1시간 전</div>
                    <div>
                        <div>
                            <img src = {IdeBtn} alt="IDE"/>
                        </div>
                        <div>
                            <img src = {ChatBtn} alt="Chat"/>
                            <p>123</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectItem