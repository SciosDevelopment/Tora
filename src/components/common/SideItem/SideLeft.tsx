import React,{useState} from 'react';

import iconLeftStar from '../../../img/img2/icon_left_star.png';
import iconLeftLive from '../../../img/img2/icon_left_live.png';
import iconLeftShare from '../../../img/img2/icon_left_share.png';
import iconBranchAdd from '../../../img/img2/icon_branch_add.png';
import iconBranchDown from '../../../img/img2/icon_branch_down.png';
import iconBranchSearch from '../../../img/img2/icon_branch_search.png';
import iconBranchClose from '../../../img/img2/icon_branch_close.png';
import iconBranchShare from '../../../img/img2/icon_branch_share.png';
import iconBranchArrowDownBlack from '../../../img/img2/icon_branch_arrow_down_black.png';
import iconBranchArrowRightBlack from '../../../img/img2/icon_branch_arrow_right_black.png';
import iconBranchSearchNavy from '../../../img/img2/icon_branch_search_navy.png';

const SideLeft = () => {

    const [isShowPopupProject, setIsShowPopupProject] = useState(false);
    const [isShowLeftSharePopup, setIsShowLeftSharePopup] = useState(false);
    const [isShowLeftFilesPopup, setIsShowLeftFilesPopup] = useState(false);
    const [isShowBranchesPopup, setIsShowBranchesPopup] = useState(false);
    const clickLeftShare = () => setIsShowLeftSharePopup(true);
    const clickLeftFiles = () => setIsShowLeftFilesPopup(true);
    const clickLeftFilesPopupClose = () => setIsShowLeftFilesPopup(false);
    const clickBranch = () => setIsShowBranchesPopup(isShowBranchesPopup ? false: true);

    return (
        <>
            <div className="sideleft">
                    <div className="wrap">
                        <button>
                            <img src={iconLeftStar} alt="star" />
                            <p>320</p>
                        </button>
                        <button onClick={clickLeftFiles}>
                            <img src={iconLeftLive} alt="files" />
                            <p>Files</p>
                        </button>
                        <button>
                            <img src={iconLeftShare} alt="IDE" />
                            <p>IDE</p>
                        </button>
                        <button>
                            <img src={iconLeftShare} alt="채팅" />
                            <p>채팅</p>
                        </button>
                        <button>
                            <img src={iconLeftLive} alt="북마크" />
                            <p>북마크</p>
                        </button>
                        <button onClick={clickLeftShare}>
                            <img src={iconLeftLive} alt="공유" />
                            <p>공유</p>
                        </button>

                        {
                            isShowLeftFilesPopup && 
                            <div className="file_popup">
                                <div className="wrap">
                                    <div className="head">
                                        <div className="left">
                                            <img src={iconBranchShare} alt="share" />
                                            <button onClick={clickBranch}>Master</button>
                                            <img src={iconBranchDown} alt="down" />
                                            {
                                                isShowBranchesPopup &&
                                                <div className="branchesPopup innerShadow2">
                                                    <div className="wrap">
                                                        <div className="searchbox">
                                                            <input type="text" />
                                                            <button>
                                                                <img src={iconBranchSearchNavy} alt="search" />
                                                            </button>
                                                        </div>
                                                        <h5>Branches</h5>
                                                        <div className="items innerShadow2">
                                                            <button>
                                                                <img src={iconBranchArrowDownBlack} alt="check" />
                                                                master
                                                            </button>
                                                            <button>
                                                                master1
                                                            </button>
                                                            <button>
                                                                master2
                                                            </button>
                                                            <button>
                                                                master3
                                                            </button>
                                                            <button>
                                                                master4
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div className="right">
                                            <button><img src={iconBranchAdd} alt="add" /></button>
                                            <button><img src={iconBranchSearch} alt="search" /></button>
                                            <button onClick={clickLeftFilesPopupClose}><img src={iconBranchClose} alt="close" /></button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <button className="line">
                                            <img src={iconLeftLive} alt="file" className="icon_size1" />
                                            <b>Local</b>
                                            <img src={iconBranchArrowDownBlack} alt="arrow" />
                                        </button>
                                        <button className="line indent1">
                                            <img src={iconBranchArrowRightBlack} alt="arrow" />
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                        <button className="line indent2">
                                            <img src={iconBranchArrowDownBlack} alt="arrow" />
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                        <button className="line indent2">
                                            <span className="rect"></span>
                                            <img src={iconLeftLive} alt="file" className="icon_size2" />
                                            <b>gkrm/femdsdsdsdsdsdsdsds</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>{/* // leftItems */}
        </>
    );
};

export default SideLeft;