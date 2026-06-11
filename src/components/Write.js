import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    const saveData = () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "health/heartRate"));

        set(newDocRef, {
            PatientID: inputValue1,
            heartRate: inputValue2
        })
        .then(() => {
            alert("Data saved successfully!");
            setInputValue1("");
            setInputValue2("");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                placeholder="Patient ID"
            />

            <input
                type="text"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
                placeholder="Heart Rate"
            />

            <br />

            <button onClick={saveData}>Save Data</button>
        </div>
    );
}

export default Write;