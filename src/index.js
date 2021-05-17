import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainApp from "./MainApp";
import store from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
