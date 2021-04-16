import {FunctionComponent} from 'react';
import './style/Title.scss'

interface TextProps{
    name : string
}

const Title:FunctionComponent<TextProps> = (Props : TextProps) => {
    const {name} = Props;
    

    return (
        <div className = "TitleView">
            {/* <div className = "TitleView-dot-container">
                <div className = "TitleView-dot"/>    
            </div> */}
            
            <p >{name}</p>            
        </div>
    );
};

export default Title;