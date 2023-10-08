import { AutoFit } from "autofit.js-react";
import { ReactEchartsBar } from "./components/ReactEchartsBar";
import "./App.css";

function App() {
    return (
        <AutoFit id="container" className="container" designWidth="1920" designHeight="1080">
            <div className="block-1">
                <ReactEchartsBar />
            </div>
            <div className="block-2">
                <ReactEchartsBar />
            </div>
        </AutoFit>
    );
}

export default App;
