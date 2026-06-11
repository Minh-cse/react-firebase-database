import React from 'react'
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {

    let [patientArray, setPatientArray] = useState([]);

    const fetchData = () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "health/heartRate"); 
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setPatientArray(Object.values.snapshot.val())
        }
    }
    return (
        <div>
            <button onClick = {fetchData}>Display Data</button>
        </div>
    )
}

export default Read