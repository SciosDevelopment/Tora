import iconGoTop from '../../../img/goTop.png'

const GoTop = () => {
    const moveScrollToBottom = () => window.scrollTo(0,10)
    
    return (
        <button className="GoTop" onClick={moveScrollToBottom}>
            <img src={iconGoTop} alt="goTop" />
        </button>
    )
}

export default GoTop