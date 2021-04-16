import * as React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import MainPage from '../pages/Main/index'
import FindPasswordPage from '../pages/FindPassword/FindPasswordMain'
const Router:React.FC = () => (
    <BrowserRouter>
        <Route path = "/" exact component={MainPage}/>
        {<Route path = "/find" component={FindPasswordPage}/>}
    </BrowserRouter>
)

export default Router