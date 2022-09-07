import React from 'react'
import Navigator from '../../Component/Navigator/Navigator'
import ForumPage from '../../view/ForumPage/ForumPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function MyRoute() {
  return (
    <div>
        <Navigator/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ForumPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
