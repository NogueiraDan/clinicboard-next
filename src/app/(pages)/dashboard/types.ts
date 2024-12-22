export type ScheduleDetailsProps = {
  patientId: string;
  scheduleId: string;
};

export type Schedule = {
  id: string;
  date: string;
  hour: string;
  type: string;
  user_id: string;
  patient_id: string;
};

export type PatientRequest = {
  name: string;
  age: number;
  email: string;
  phone: string;
  street: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
  additional_info: string;
  user_id: string;
};

export type PatientResponse = {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  street: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
  additional_info: string;
  user_id: string;
};

export type ScheduleRequest = {
  date: string;
  hour: string | undefined;
  type: string;
  patient_id: string;
  user_id: string | undefined;
};

export type ScheduleResponse = {
  id: string;
  date: string;
  hour: string | undefined;
  type: string;
  patient_id: string;
  user_id: string | undefined;
};


export type UserUpdateRequest = { 
  name: string; 
  email: string;
  contact: string;
}

export type UserUpdateResponse = { 
  id: string; 
  name: string; 
  email: string;
  contact: string; 
  role: string; 
}