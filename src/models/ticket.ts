import { Student } from '../models/student';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Majeur; 
  archived: boolean;
}

export enum Majeur { 
  IA = "IA",  
  BigData = "BigData",
  HyperMedia = "HyperMedia",
  CPI = "CPI",
}
