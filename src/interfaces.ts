export interface ISocialBarProps {
  whatsapp: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  email: string;
}

export interface IDoctorProps {
  name: string;
  specialtie: string;
  university: string;
  description: string;
  image: string;
  social: ISocialBarProps;
}
