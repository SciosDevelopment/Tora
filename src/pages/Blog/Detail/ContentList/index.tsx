import { useEffect } from 'react'
//import { history } from '../../../../configureStore'
import './style/BlogDetailList.scss'
import moment from 'moment'

const ContentList = (props) => {
    const {data} =  props
    
    useEffect(()=>{},[])

    return (
        <div className = "Blog-Detail-List">
            <div className = "Blog-Detail-List-title">
                <div className = "Blog-Detail-List-title-subject">
                    <p>목록</p>
                </div>
                <div className = "Blog-Detail-List-title-date">
                    <p>작성일</p>
                </div>
            </div>
            
            {            
                data.map((datum) => {
                    if(datum.kind !== "blog") return
                    if(datum.state !== "show") return

                    return (
                        <div className = "Blog-Detail-List-text">
                            {/* 임시로 a tag 사용 : history.push()시 refresh되지 않는 문제 존재 */}
                            <a href={`/blog/${datum.id}`}> 
                                <div className = "Blog-Detail-List-text-subject">
                                    <p>{datum.title}</p>
                                </div>
                            </a>
                            <div className = "Blog-Detail-List-text-date">
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