import { Pain } from "../enum/enum";

export interface IDoctor {
    id: string
    name: string;
    age: number;
    skills: {
        heart: number,
        eye: number,
        leg: number,
        skin: number
    };
};

export interface IFormikValues {
    name: string | undefined
    age: number | null | undefined
    pain: Pain | '' | undefined
}
export interface IPatient extends IFormikValues {
    id: string
    doctor?: string
}