import React from 'react';
import TimeBadge from './RecordItem/TimeBadge';
import { records } from "../records";

interface RecordProps{
    selectedItem: string | null;
}

const RecordContent: React.FC<RecordProps> = ({selectedItem}) => {
   const data = selectedItem ? records[selectedItem] : [];
    return(
        <div className="flex flex-row w-screen">
            {data.map((record,index) => (
                <div key={index}>
                    <TimeBadge time={record.time}/>
                    <p>{record.text}</p>
                </div>
            ))
            }
            <h1></h1>
        </div>
    )
}

export default RecordContent;