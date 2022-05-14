import './Styles/App.css'
import {BrowserRouter, Route} from "react-router-dom";
import Posts from "./Pages/Posts";
import About from "./Pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path={"/posts"}>
                    <Posts/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
