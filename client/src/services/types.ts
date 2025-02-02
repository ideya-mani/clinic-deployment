export interface AppointmentData {
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    doctorName: string;
    date: string;
    timePeriod: string;
    time: string;
  }
  
  export interface ContactData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }
  
  export interface PostData {
    content: string;
    image?: string;
  }
  
  export interface Appointment {
    _id: string;
    patientName: string;
    patientEmail: string;
    doctorName: string;
    date: string;
    timePeriod: string;
    time: string;
    status: string;
  }
  
  export interface Post {
    _id: string;
    content: string;
    image?: string;
    likes: number;
    comments: string[];
  }
  