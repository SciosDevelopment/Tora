import {FunctionComponent} from 'react'

interface TextProps { name : string }

const Title:FunctionComponent<TextProps> = (Props : TextProps) => {
    const {name} = Props;

    return (
        <div className = "TitleView">
            <p >{name}</p>            
        </div>
    )
}

export default Title