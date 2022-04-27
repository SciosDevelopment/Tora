import { useEffect, useState } from "react"

const Pagination = ({total, limit, page, setPage}) => {
  const numPages = Math.ceil(total/limit)
  const [numPageList, _] = useState(Array(numPages).fill(0))
  const [curListNum, setCurListNum] = useState(1)

  const limits = 10
  const offset = (curListNum -1) * limits
  
  return (
      <ul className="pagination">
        <button onClick={() => { setCurListNum(curListNum - 1); setPage((curListNum-1)*limit+1)}} disabled={curListNum === 1}>&lt;</button>
        {numPageList.slice(offset, offset+limit+1).map((_, i) => (
            <button
              key={offset + i + 1}
              onClick={() => setPage(offset + i + 1)}
              className={page === offset + i + 1 ? "cur" : null}>
              {offset + i + 1}
            </button>
        ))}
        <button onClick={() => {setCurListNum(curListNum + 1); setPage((curListNum+1)*limit+1)}} disabled={curListNum === Math.ceil(numPages/limits)}>&gt;</button>
      </ul>
  )
}

export default Pagination