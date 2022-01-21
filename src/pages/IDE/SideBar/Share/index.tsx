import React, {useState} from 'react'

const SidebarShare = (props) => {
    const {projectId} = props
   
    return (
        <div className="sharebox">
            <div className="header"> Shared address</div>
            <div className="body">
                <input type='text'/>
                <div>
                    <button>Create link</button>
                    <button>Copy</button>
                </div>
            </div>
        </div>
    )
}

export default SidebarShare