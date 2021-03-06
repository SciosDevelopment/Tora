import Profile11 from 'src/img/profile11.png'
import { history } from 'src/configureStore'

const FollowItem = (Props)=> {
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const {item, Follower} = Props
    const OptionBtn = ()=>{
        return Follower ? 
        (<button>Follower</button>) : 
        (<button>Following</button>)
    }

    return (
        <div className = "dbFollowItem">
            <div className="profiles">
                <img src={Profile11} alt="profiles"/>
            </div>

            <div className = "description" onClick={()=>history.push(`/project/${item.id}`)}>
                <div>
                    <div className = "title">
                        <p> {item.attributes.user_id} </p>
                    </div>
                    <div className = "desc">
                        <p>this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description</p>
                        {/* {item.attributes.tags.split(" ").map((data)=>{return data && <p>{data}</p>})} */}
                    </div>
                </div>
            </div>
            
            <div className = "details">
                <OptionBtn/>
            </div>
        </div>
    )
}

export default FollowItem