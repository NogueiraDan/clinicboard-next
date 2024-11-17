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

export type Patient = {
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
