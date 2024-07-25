import React from 'react';
import {format, parse} from 'date-fns';

export function formatDate(sourceDate:string, inputFormat: string, outputFormat:string):string {
    const parsedDate = parse(sourceDate, inputFormat, new Date());
    const formattedDate = format(parsedDate, outputFormat);
    return formattedDate;
  }


  export function checkIfIsToday(sourceDate: string) :boolean
  {
    const today = new Date();
    const todayFormatted = format(today,"yyyy-MM-dd");
    const inputDate = formatDate(sourceDate, "dd/MM/yyyy", "yyyy-MM-dd"); 
    return inputDate === todayFormatted;
  }

  export function formatTime (date: Date) : string {
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }