import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import PicturePage from "./screens/PicturePage";
import Homepage from "./screens/Homepage";
import "./styles/componentsStyles.scss";
import "./styles/styles.scss";

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/photos" component={PicturePage} />
            <Route exact path="/" component={Homepage} />
        </Router>
    );
};

export default App;
