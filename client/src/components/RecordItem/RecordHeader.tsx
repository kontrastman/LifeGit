import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SaveButton from "./SaveButton";
import { formatDate } from "../../utils/dateHelper";


const RecordHeader: React.FC = () => {
    const date = useSelector((state: RootState) => state.selectedNote.selectedNote);
    const displayDate = date ? formatDate(date, "dd/MM/yyyy", "dd MMM yyyy") : "";
    return(
        <div className="flex items-center bg-base-100 sticky top-0 border-b-[1px] pt-[30px] pb-[15px]">
            <h1 className="flex-1 font-bold text-xl ">{displayDate}</h1>
            <SaveButton/>
        </div>
    )
}

export default RecordHeader;