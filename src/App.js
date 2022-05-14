import './Styles/App.css'
import {BrowserRouter, Route,} from "react-router-dom";
import Posts from "./Pages/Posts";
import About from "./Pages/About";
import {Routes} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path={"/posts"} element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
