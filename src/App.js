import "./App.css";
import Main from "./components/Main";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
    return (
        <div className="App">
            <ReactNotifications />
            <Main />
        </div>
    );
}

export default App;
