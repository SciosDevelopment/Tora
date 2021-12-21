import React from 'react';
import Draggable from 'react-draggable';
import iconSelect from '../../img/ide/ic_select.png'

function PopupPush({setIsShowPush}) {

    const clickClose = () => {
        setIsShowPush(false)
    }

    return (
        <Draggable>
            <div className="popupIDE PopupPush">
                <div className="popupHead">Push</div>
                <div className="popupBody">
                   <div className="top">
                       <b className="title">이 저장소에 푸시</b>
                       <select className="innerShadow" 
                        style={{backgroundImage:`url(${iconSelect})`}}
                       >
                           <option>Master1</option>
                           <option>Master2</option>
                       </select>
                       <input type="text" className="innerShadow" />
                   </div>
                   <div className="mid branchStyle">
                       <div className="left">
                           <b className="title">로컬 브랜치</b>
                            <div className="box">
                                <button>Master</button>
                            </div>
                       </div>
                       <div className="center">
                           <b className="title">리모트 브랜치</b>
                            <div className="box">
                                <select className="innerShadow"
                                    style={{backgroundImage:`url(${iconSelect})`}}
                                >
                                    <option>Master1</option>
                                    <option>Master2</option>
                                </select>
                            </div>
                       </div>
                       <div className="right">
                           <div className="box">
                               <div className="inputWrap">
                                <input type="checkbox" />
                            </div>
                            <div className="inputWrap">
                                    <input type="checkbox" />
                            </div>

                           </div>
                       </div>
                   </div>
                </div>{/* // popupBody */}
                <div className="popupFoot">
                    <div className="btn">
                        <button className="btn_confirm">Push</button>
                        <button className="btn_cancel" onClick={clickClose}>취소</button>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default PopupPush;
