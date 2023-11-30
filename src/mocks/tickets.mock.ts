import { Ticket, Majeur } from '../models/ticket';
import { Student } from '../models/student';
import { STUDENTS_MOCKED } from '../mocks/student.mock';
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Majeur.IA ,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Majeur.CPI ,
    archived: false

  },
];
