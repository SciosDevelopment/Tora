import './style/Searchbar.scss'
import SearchIcon from '../../../img/search-navy.png'
import {useState} from 'react'

const Searchbar = (SearchProp) => {

    const {onClick} = SearchProp
    const[queryText, setText]=useState("")
    const Search = ()=>onClick(queryText)
    
    const handleChange = (e) => {
        const{_,value} = e.target
        setText(value)    
    }
    return (
        <div className = "Searchbar-container">
            <input type = "input" placeholder = 'Search' required value = {queryText} onChange = {handleChange} />
            <div>
                <img src = {SearchIcon} onClick={Search}/>
            </div>      
        </div>
    )
}

export default Searchbar