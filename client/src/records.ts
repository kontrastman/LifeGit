interface Record {
    time: string;
    text: string;
}

interface Records {
    [date: string]: Record[];
}

export const records:Records = {
    // '21/07/2024': [
    //     {time: '14:05', text: "Finally finished sidebar!"}
    // ],
    '16/03/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '17/03/2024': [
        {time: '15:30', text: "It was Amazing!"}
    ],
    '18/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '16/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '15/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '14/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '13/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '12/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '11/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '10/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '09/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '08/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '07/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '06/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '05/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '04/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
    '03/10/2024': [
        {time: '16:04', text: "I was in the pool"},
        {time: '17:07', text: "Walking now"},
    ],
}

export const dates = Object.keys(records);
