import { useEffect, useState } from 'react'
import moment from 'moment'

const ContentList = (props) => {
    const {data} =  props
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(data === undefined) return
        setLoading(false)
    },[data])

    return (
        <div className = "wrapper">
            <div className = "header">
                <div className = "title">
                    <p>목록</p>
                </div>
                <div className = "date">
                    <p>작성일</p>
                </div>
            </div>
            
            {
            !loading && data.map((datum) => {
                return (
                    <div className = "row">
                        <div className = "title">
                            {/* 임시 처리 */}
                            {/*<p onClick={()=> history.push(`/blog/${datum.id}`)}>{datum.title}</p>*/}
                            <a href={"/blog/" + datum.id}>
                                <p>{datum.title}</p>
                            </a>
                        </div>
                        
                        <div className = "date">
                            <p>{moment(datum.created_at).format("YYYY.MM.DD")}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )    
}

export default ContentList