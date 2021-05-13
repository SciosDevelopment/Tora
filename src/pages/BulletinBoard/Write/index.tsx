import React from 'react';
import Header from 'src/components/common/Header/Header';
import './style/BulletinBoardWrite.scss'

const BulletinBoardWrite = () => {
    return (
        <>
        <Header/>
        <div className = "BulletBoard-write-main">
            <div className = "BulletBoard-write-view">
                <div className = "BulletBoard-write-produce">
                    <div className = "BulletBoard-write-title">
                        <div className = "BulletBoard-write-title-left">
                            <div className = "BulletBoard-write-title-tag-left">
                                <div className = "BulletBoard-write-title-left">
                                    <p>제목을 입력하세요.</p>
                                </div>
                                <div className = "BulletBoard-write-tag-left">
                                    <p>태그를 입력하세요.</p>
                                </div>
                            </div>
                            <div className = "BulletBoard-write-toolbar-left">
                            </div>
                        </div>
                    </div>

                    <div className = "BulletBoard-write-text">
                        <p>Markdown 사용가능</p>
                    </div>

                    <div className = "BulletBoard-write-button">
                        <input type='submit' value="Create"/>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default BulletinBoardWrite;