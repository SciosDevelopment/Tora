import React from 'react';
import Draggable from 'react-draggable';
import iconSelect from '../../img/ide/ic_select.png'

function PopupPull({setIsShowPull}) {

    const clickClose = () => {
        setIsShowPull(false)
    }

    return (
        <Draggable>
            <div className="popupIDE popupPull">
                <div className="popupHead">Push</div>
                <div className="popupBody">
                    <div className="box">
                        <b className="title">타 저장소에서 가져오기</b>
                        <select className="innerShadow" style={{backgroundImage:`url(${iconSelect})`}}>
                            <option>origin</option>
                        </select>
                    </div>
                    <div className="box">
                        <b className="title"></b>
                        <input type="text" className="innerShadow" value="https://torapod.com" />
                    </div>
                    <div className="h20"></div>
                    <div className="box">
                        <b className="title">가져오는 원격 브랜치</b>
                        <select className="innerShadow" style={{backgroundImage:`url(${iconSelect})`}}>
                            <option>origin</option>
                        </select>
                    </div>
                </div>
                <div className="popupFoot">
                    <div className="btn">
                        <button className="btn_confirm">Pull</button>
                        <button className="btn_cancel" onClick={clickClose}>취소</button>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default PopupPull;
