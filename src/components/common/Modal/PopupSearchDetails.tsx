const PopupSearchDetails = (props) =>{
    const {tags=['django', 'node.js', 'ruby','c++', 'javscript', '','',''], options} = props
    const Taglist = ()=> {
        return (
            <div className="taglist">
                {tags.map((data, index)=>{
                    return <mark className={`skillMark ${(index%4 === 0) && 'mark_red'}`} >{data}</mark> 
                })}
            </div>
        )
    }

    return (
        <>
        <div className="searchpopup innerShadow2">
            {/* <Taglist/> */}
            <div className="option">
                { options.map((data)=>{return <p onClick={data.onClick}>{data.title}</p>}) }
            </div>
        </div>
        </>
    )
}

export default PopupSearchDetails
