import "./App.css";
import { CustomComponent } from "./components/html/CustomComponent";

function App() {
    return (
        <div className="App">
            <CustomComponent name="Dong Joon" isLoggedIn={false} />
        </div>
    );
}

export default App;
