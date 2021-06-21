import React from 'react';
import './style/ProjectLicenseMainView.scss'
import Modify from '../../../../img/modify.png'

const ProjectLicenseMainView = () => {
    return (
        <div className = "Project-License-MainView">
            <div className = "Project-License-MainView-modify">
                <img src = {Modify}/>
            </div>
            <div className = "Project-License-MainView-contents">
                'The following is a BSD 2-Clause license template. To generate your own license, change the values of OWNER and YEAR from their original values as given here, and substitute your own.
                see also the BSD-3-Clause license.
                This prelude is not part of the license.
                = Regents of the University of California
                = 1998
                In the original BSD license, both occurrences of the phrase "COPYRIGHT HOLDERS AND CONTRIBUTORS" in the disclaimer read "REGENTS AND CONTRIBUTORS".
                Here is the license template:
                Copyright (c) ,
                All rights reserved.
                Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
            </div>
        </div>
    );
};

export default ProjectLicenseMainView;