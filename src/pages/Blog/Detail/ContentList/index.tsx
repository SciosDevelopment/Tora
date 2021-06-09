import { useEffect } from 'react'
import { history } from '../../../../configureStore'
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
                            <div className = "Blog-Detail-List-text-subject">
                                {/* 임시 처리 */}
                                {/*<p onClick={()=> history.push(`/blog/${datum.id}`)}>{datum.title}</p>*/}
                                <a href={"/blog/" + datum.id}>
                                    <p>{datum.title}</p>
                                </a>
                            </div>
                            
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