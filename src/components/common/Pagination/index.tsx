import React,{useState} from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = []
  const [cur_page,setCur] = useState(1)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className= "page-item">
              <a onClick={() => {paginate(number); setCur(number);}} className={`page-link ${cur_page === number ? 'active': 'notactive'}`}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Pagination