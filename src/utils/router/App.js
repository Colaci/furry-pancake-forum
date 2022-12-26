import React from "react";
import Navigator from "../../Component/Navigator/Navigator";
import ForumPage from "../../view/ForumPage/ForumPage";
import DetailPage from "../../view/DetailPage/DetailPage";
import SettingsPage from "../../view/SettingsPage/SettingsPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Root = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navigator navigate={navigate} />
            <Routes>
                <Route path="/" element={<ForumPage />}></Route>
                <Route path="/detail/:postId" element={<DetailPage />}></Route>
                <Route path="/settings" element={<SettingsPage />}></Route>
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
};

export default App;
