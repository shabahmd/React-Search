import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
    const [searchstate, setSearch] = useState("");

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search...."
                onChange={(event) => setSearch(event.target.value)}
            />

            {JSONDATA.filter((val) => {
                if (searchstate === "") {
                    return true; // Include all items if searchstate is empty
                } else if (val.first_name.toLowerCase().includes(searchstate.toLowerCase())) {
                    return true; // Include the item if the first_name matches the searchstate
                } else {
                    return false; // Exclude the item if it doesn't match
                }
            }).map((val, key) => (
                <div className="user" key={key}>
                    <p>{val.first_name}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
