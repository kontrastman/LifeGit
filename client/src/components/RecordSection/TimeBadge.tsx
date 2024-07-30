import React from "react";

interface TimeBadge {
    time: string;
}

const TimeBadge:React.FC<TimeBadge> = ({time}) => {
    return <div className="badge badge-secondary min-w-16 mt-0.5 text-white">{time}</div>
}

export default TimeBadge;