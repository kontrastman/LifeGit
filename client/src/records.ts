interface Record {
    time: string;
    text: string;
}

interface Records {
    [date: string]: Record[];
}

export const records:Records = {
    '21/07/2024': [
        {time: '14:05', text: "Finally finished sidebar!"}
    ],
    '16/03/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '17/03/2024': [
        {time: '15:30', text: "It was Amazing!"}
    ],
    '18/10/2024': [
        
    ]
}

export const dates = Object.keys(records);
