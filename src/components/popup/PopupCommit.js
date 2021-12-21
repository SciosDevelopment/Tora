import React, { useCallback, useState } from 'react';
import Draggable from 'react-draggable';

function PopupCommit({setIsShowCommit}) {
    const [folder, setFolder] = useState(false);
    const [isShowFolder, setIsShowFolder] = useState('');
    const clickClose = () => setIsShowCommit(false);
    const clickFolder = (i) => setIsShowFolder(i);

    /**
     * 21/12/08 각 버튼 클릭시 하단 커밋내용 바뀌도록 수정요청.
     * 클릭한 idx와 커밋내용박스 idx가 일치하는 커밋내용박스만 보이도록 작업
     */
    const folderArr = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
    ]
    const contentArr = [
        {id:1, content:'1'},
        {id:2, content:'2'},
        {id:3, content:'3'},
        {id:4, content:'4'},
        {id:5, content:'5'},
    ]
    const FolderContent = () => {
        return(
            contentArr.map((e,i)=> 
                isShowFolder == i &&
                <div className="commitInfo innerShadow" key={i}>
                    <ul className="num">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>
                    <div className="text">
                        <p className="line">{e.content}</p>
                        <p className="line">## . Component</p>
                    </div>
                </div>
            )
        )
    }

    /* label에 click이벤트를 생성하게 되면서, label이 checkbox를 인식못하는 오류때문에 useCallback으로 리랜더링 막음 */
    const ButtonFolder = useCallback(({isShowFolder}) => {
        return(
            folderArr.map((e,i)=> 
                <label key={i} onClick={() => clickFolder(i)}>
                    <div className="left">
                        <mark></mark>
                        <b className={isShowFolder === i ? 'bold' : ''}>New Community</b>
                    </div>
                    <input type="checkbox" />
                </label>
            )
        )
    },[]);



    return (
        <Draggable>
            <div className="popupIDE PopupCommit">
                <div className="popupHead">커밋 스테이지</div>
                <div className="popupBody">
                    <div className="commitList">
                        <ButtonFolder isShowFolder={isShowFolder} />
                    </div>  
                    <FolderContent />
                    <div className="commitContent">
                        <textarea name="" id="" placeholder="Content"></textarea>
                    </div>
                </div>{/* // popupBody */}
                <div className="popupFoot">
                    <div className="btn">
                        <button className="btn_confirm">커밋</button>
                        <button className="btn_cancel" onClick={clickClose}>취소</button>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default PopupCommit;
