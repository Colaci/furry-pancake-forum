import React from 'react'
import Navigator from '../../Component/Navigator/Navigator'
import ForumPage from '../../view/ForumPage/ForumPage'
import DetailPage from '../../view/DetailPage/DetailPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function MyRoute() {
  return (
    <div>
        <Navigator/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ForumPage/>}></Route>
                <Route path="/detail/:postId" element={<DetailPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
