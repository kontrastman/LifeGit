import React from "react";
import SaveButton from "./SaveButton";
import { formatDate } from "../../utils/dateHelper";

interface RecordHeaderProps {
    date: string | null;
}


const RecordHeader: React.FC<RecordHeaderProps> = ({date}) => {
    const displayDate = date ? formatDate(date, "dd/MM/yyyy", "dd MMM yyyy") : "";
    return(
        <div className="flex items-center bg-base-100 sticky top-0 border-b-[1px] pt-[30px] pb-[15px]">
            <h1 className="flex-1 font-bold text-xl ">{displayDate}</h1>
            <SaveButton/>
        </div>
    )
}

export default RecordHeader;