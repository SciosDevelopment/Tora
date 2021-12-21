import React, { useState } from 'react';
import Draggable from 'react-draggable';
import iconSelect from '../../img/ide/ic_select.png'

function PopupBranch( {setIsShowBranch}) {
    const [tab, setTab] = useState(false);

    const clickTabButton = () => {
        setTab(tab ? false : true)
    }

    const clickClose = () => {
        setIsShowBranch(false)
    }

    return (
        <Draggable>
            <div className="popupIDE popupBranch">
                <div className="popupHead">브랜치</div>
                <div className="popupBody">
                    <div className="btnbox">
                        <button onClick={clickTabButton} className={`title ${tab && 'on'}`}>새 브랜치</button>
                        <button onClick={clickTabButton} className={`title ${!tab && 'on'}`}>브랜치 삭제</button>
                    </div>
                    <div className="tabWrap">
                        {
                            tab && 
                            <div className="new">
                                <div className="box">
                                    <b className="title">현재 브랜치</b>
                                    <select className="innerShadow" style={{backgroundImage:`url(${iconSelect})`}}>
                                        <option>Master</option>
                                    </select>
                                </div>
                                <div className="box">
                                    <b className="title">새 브랜치</b>
                                    <input className="innerShadow" type="text" />
                                </div>
                            </div>
                        }
                        {
                            !tab && 
                            <div className="del">
                                <div className="branchStyle">
                                    <div className="left">
                                        <b className="title">브랜치</b>
                                            <div className="box">
                                                <button>Master</button>
                                            </div>
                                    </div>
                                    <div className="center">
                                        <b className="title">위치</b>
                                            <div className="box">
                                                <b>로컬</b>
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
                            </div>
                        }
                        
                    </div>
                </div>
                <div className="popupFoot">
                    <div className="btn">
                        <button className="btn_confirm">생성</button>
                        <button className="btn_cancel" onClick={clickClose}>취소</button>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default PopupBranch;
