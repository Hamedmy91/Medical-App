export interface IDoctor {
  _id: string;
  name: string;
  about: string;
  address: Address;
  available: boolean;
  date: number; // Unix timestamp (milliseconds)
  degree: string;
  experience: string;
  fees: number;
  image: string;
  speciality: string;
  slots_booked: SlotsBooked;
  __v: number;
}

interface Address {
  line1: string;
  line2: string;
}

interface SlotsBooked {
  [date: string]: string[];
}
