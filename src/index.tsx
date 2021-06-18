import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as dotenv from "dotenv";

import App from "./App";
import store from "./store";

import "../node_modules/font-awesome/css/font-awesome.min.css";

dotenv.config();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
