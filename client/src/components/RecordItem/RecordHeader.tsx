import React from "react";
import SaveButton from "./SaveButton";

const RecordHeader: React.FC = () => {
    return(
        <div className="flex">
            <h1 className="flex-1 font-bold">22 Apr 2024</h1>
            <SaveButton/>
        </div>
    )
}

export default RecordHeader;