import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Pagination from '../../../../components/common/Pagination'
import BountyItem from './BountyItem'

const BountyItemView = (props) => {
    var {query, sorted} = props.props.match.params
    const SERVER_IP = process.env.REACT_APP_BACKEND_HOST
    const [BountyList, setBountyList] = useState([])
    const [curPage, setCurPage] = useState(1)
    const limit = 10
    const offset = (curPage - 1) * limit

    useEffect(()=>{
        // issue db, api 구현 후 기능 구현 예정.
        if(sorted !== "new" || sorted !== "best") sorted = "new"
        if(query==="\n") query=""
        const data = {"post": {"kind": "free_board", "search_text": query, "sort": sorted }}
        axios.post(`${SERVER_IP}/api/v1/posts`, data).then(res => {setBountyList(res.data.data)})
        .catch((e)=>{setBountyList([])})
    }, [query])

    // 데이터 부분
    return (
        <div className = "bountylist">
            {
            BountyList.length !== 0 ?
            BountyList.slice(offset, offset+limit).map((item) => {return <BountyItem item={item}/>})
            : 
            /* 임시 : page 중요 */
            <div>Contents is nothing</div> 
            }

            {
            BountyList.length !== 0 &&
                <Pagination total={BountyList.length}
                limit={limit}
                page={curPage}
                setPage={setCurPage}/>
            }
        </div>
    )
}

export default BountyItemView