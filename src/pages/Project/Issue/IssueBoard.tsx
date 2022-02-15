import React, {useEffect} from 'react'
import menuDot from '../../../img/menu_dot.png'
import iconIssueRight from '../../../img/icon_issue_right.png'
import iconObjectiveAdd from '../../../img/icon_objective_add.png'
import IssueBoardItem from './IssueCard'
import { Sortable } from 'sortablejs'


const IssueBoard = (props) => {
    const {title, data=[], color, open} = props

    useEffect(() => {
        const items = document.getElementById('cardview')
        Sortable.create(items, {
            group: 'shared',
            multiDrag: true,
            selectedClass: "selected",
            animation: 200
        })
    }, [])
    // Sortable을 통해서 변하는 데이터 위치에 따라서 data array가 변하는지 판단이 필요
    const colorstyle = {
        background: color
    }

    return (    
        <div className="innerContent" style={colorstyle}>
            <div className="head">
                <div className="left">
                    <button>
                        <img src={iconIssueRight} alt="arrow" />
                        {title}
                        <span>{data?.length}</span>
                    </button>
                </div>
                <div className="right">
                    <button>
                        <img src={iconObjectiveAdd} alt="arrow" />
                    </button>
                    <button>
                        <img src={menuDot} alt="arrow" />
                    </button>
                </div>
            </div>
            <div className="body" id="cardview">
                {data.map((data, index)=>{
                  return <IssueBoardItem/>
                })} 
            </div>
        </div>
    )
}

export default IssueBoard