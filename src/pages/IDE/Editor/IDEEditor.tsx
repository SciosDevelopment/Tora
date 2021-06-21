import React from 'react';
import './style/IDEEditor.scss'
import SplitScreen from '../../../img/splitscreen.png'
import IDEType from '../../../img/idetype.png'
import MiniView from './MiniView/IDEEditorMiniView'

const IDEEditor = () => {
    return (
        <div className = "IDE-Editor">
            <div className = "IDE-Editor-function">
                <div className = "IDE-Editor-type">
                    <img src = {IDEType}/>
                    <p>Package-json</p>
                </div>
                <div className = "IDE-Editor-splitscreen">
                    <img src = {SplitScreen}/>
                </div>
            </div>
            <div className = "IDE-Editor-main">

            </div>
            <div className= "IDE-Editor-miniview">
                <MiniView/>
            </div>
        </div>
    );
};

export default IDEEditor;