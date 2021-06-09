import './style/Searchbar.scss'
import SearchIcon from '../../../img/search-navy.png'
type SearchProps = {
    SerachText : string
    onClick: () => void // props none => void
}

const Searchbar = (SearchProp) => {
    const {onClick} = SearchProp
    return (
        <div className = "Searchbar-container">
            <input type = "input" placeholder = 'Search' />
            <div>
                <img src = {SearchIcon} onClick={onClick}/>
            </div>      
        </div>
    )
}

Searchbar.defaultProps = {
    SearchText:"",
    onClick:()=>{console.log("Searchbar onClick default")}
}
export default Searchbar;