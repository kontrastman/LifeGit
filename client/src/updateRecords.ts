import { records } from "./records";

export function addNote (date: string) {
    records[date] = [];
}

export function addRecord (date:string, newRecord: {time: string, text: string}){
    records[date].push(newRecord);
}