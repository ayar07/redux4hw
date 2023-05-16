import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersDet  from "../../Components/UsersDet"; 
import UsersPosts from "../usersPosts.jsx/UsersPosts";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><UsersPosts /></>} />
                <Route path="/posts/:id" element={<><UsersDet/></>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    )
};

export default App;