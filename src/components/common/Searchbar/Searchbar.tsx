import './style/Searchbar.scss'
import SearchIcon from '../../../img/search-navy.png'
const Searchbar = () => {
    return (
        <div className = "Searchbar-container">
            <input type = "input" placeholder = 'Search'/>
            <div>
                <img src = {SearchIcon}/>
            </div>      
        </div>
    )
}

export default Searchbar;