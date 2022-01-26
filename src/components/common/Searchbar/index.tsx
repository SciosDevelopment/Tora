import SearchIcon from '../../../img/search-navy.png'
import {useState} from 'react'
import DetailIcon from '../../../img/icon_arrow_issue_title.png'
import PopupSearchDetails from '../Modal/PopupSearchDetails'

const Searchbar = (SearchProp) => {
    const {onClick, details=false} = SearchProp
    const[queryText, setText] = useState("")
    const[showDetails, setDetails] = useState(false)
    const Search = ()=>onClick(queryText)
    
    const handleChange = (e) => {
        const{_,value} = e.target
        setText(value)    
    }
    return (
        <>
        <div className="searchbarContainer">
            <div className = "searchbar">
                <input type = "input" placeholder = 'Search' required value = {queryText} onChange = {handleChange} />
                <img src = {SearchIcon} alt="search" onClick={Search}/>
            </div>
            {details && <img src = {DetailIcon} alt="detail" onClick={()=>setDetails(!showDetails)}/>}
            {showDetails && <PopupSearchDetails/>}
        </div>
        </>
    )
}

export default Searchbar