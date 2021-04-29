import React,{useEffect, useState} from 'react'
import './style/LicenseItem.scss'

type licenseMainContents = {
    context : string,
    status : string
}

const LicenseItem:React.FC = () => {

    const [openStatus, setOpenStatus] = useState<Boolean>(false);
    const [currentTabValue, setCurrentTabValue] = useState<Number>(0);
    const [tabValue, setTabValue] = useState<Number>(0);

    useEffect(()=>{
        
    },[])
    
    const licenseMainContents = [
        {
            "context" :  "복제,배포,수정의 권한 허용", 
            "status" : "가능"
        },
        {
            "context" :  "배포시 라이선스 사본 첨부", 
            "status" : "가능"
        },
        {
            "context" :  "저작권 고지사항 또는 Attribution 고지사항 유지", 
            "status" : "가능"
        },
        {
            "context" :  "배포시 소스코드 제공의무(Reciprocity)와 범위", 
            "status" : "명시되어 있지 않음"
        },
        {
            "context" :  "조합저작물(Lager Work) 작성 및 타 라이선스 배포 허용	", 
            "status" : "조건부 가능"
        },
        {
            "context" :  "수정 시 수정내용 고지", 
            "status" : "명시되어 있지 않음"
        },
        {
            "context" :  "명시적 특허 라이선스의 허용", 
            "status" : "명시되어 있지 않음"
        },
        {
            "context" :  "복제,배포,수정의 권한 허용", 
            "status" : "가능"
        },

        
    ];
    
    const switchTab = (tabValue) => {
        switch(tabValue){
            case 0 : {
                return(
                    <div className = "License-item-description-wrapper">
                    {
                        licenseMainContents.map((value, index)=>{
                            return(
                                <div key = {index} className = "License-item-description">
                                    <div className = "License-item-description-list-context">
                                        {value.context}
                                    </div>
                                    <div className = "License-item-description-list-status">
                                        <p>{value.status}</p>
                                    </div>

                                </div>
                            )
                            
                        })
                    }

                    </div>
                )
            }
            case 1 : {
                return(
                    <div>
                        2
                    </div>
                )
            }
            case 2 : {

            }
        }
    }
        
    

    
    return(
        <div className = "License-item-main">
            <div className = "License-item-head-wrapper">
                <div className = "License-item-title-wrapper">
                    <p>2-clause BSD license (BSD-2-Clause)</p>
                </div>

                <div className ="License-item-domain-wrapper">
                    <p>관리 기관 Public Domain</p>                   
                </div>

                <div className = "License-item-more-button-container">
                    <div className = "License-item-more-button" onClick = {()=>setOpenStatus(!openStatus)}>
                        <p>More</p>
                        <img/>
                    </div>  
                </div>
            </div>
            
            <div className = "License-item-main-wrapper">
                {
                    openStatus === false ? 
                        <div className = "License-item-main-closed">
                            {
                                `원본 라이선스가 종종"BSD-old" 로 참고되어지고 있는만큼, 여기서 파생된3-조항 버전은"BSD-new" 로 불리기도 한다. 다른 이름으로는"New BSD", "revised BSD", "BSD-3" 혹은"3-조항BSD" 이 있다. 참고로 "New BSD"라는 말을 쓰고는 있지만, BSD 라이선스의 가장 최신 버전은 아니다. 이 버전 이후...`
                            }
                        </div>
                    
                    :
                    
                        <div className = "License-item-main-open">
                            <div className = "License-item-description-wrapper">
                                {
                                    `원본 라이선스가 종종"BSD-old" 로 참고되어지고 있는만큼, 여기서 파생된3-조항 버전은"BSD-new" 로 불리기도 한다. 다른 이름으로는"New BSD", "revised BSD", "BSD-3" 혹은"3-조항BSD" 이 있다. 참고로 "New BSD"라는 말을 쓰고는 있지만, BSD 라이선스의 가장 최신 버전은 아니다. 이 버전 이후...`
                                }
                            </div>
                            <div className = "License-item-label-container">
                               <label>Version : </label>
                               <label>Domain : </label>
                               <label>Related License : </label>
                               <label>License Category : </label>
                               <label>Website : </label>
                            </div>
                            
                            <div >
                                <div className = "License-item-tab-wrapper">
                                   <div className = "License-item-tab-button-wrapper">
                                       <div className = {tabValue === 0 ? `License-item-tab-clicked` : `License-item-tab` } onClick = {()=>setTabValue(0)} key = {0}>주요내용</div>
                                       <div className = {tabValue === 1 ? `License-item-tab-clicked` : `License-item-tab`} onClick = {()=>setTabValue(1)} key = {1}>영어전문</div>
                                       <div className = {tabValue === 2 ? `License-item-tab-clicked` : `License-item-tab`} onClick = {()=>setTabValue(2)} key = {2}>개발템플릿</div>
                                    </div> 
                                    <div className = "License-item-tab-body-wrapper">
                                        {
                                            switchTab(tabValue)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> 
                }
            </div>
        </div>
    )
}

export default LicenseItem