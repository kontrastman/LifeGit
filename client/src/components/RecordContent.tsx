import React from 'react';
import { records } from "../records";

interface RecordProps{
    selectedItem: string | null;
}

const RecordContent: React.FC<RecordProps> = ({selectedItem}) => {
   const data = selectedItem ? records[selectedItem] : [];
    return(
        <div>
            {data.map((record,index) => (
                <div key={index}>
                    <time>{record.time}</time>
                    <p>{record.text}</p>
                </div>
            ))
            }
            <h1></h1>
        </div>
    )
}

export default RecordContent;