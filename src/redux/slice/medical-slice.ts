import { createSlice } from "@reduxjs/toolkit";
import { IDoctor, IFormikValues, IPatient } from "../../interface/interface";
import { ModalType, Pain } from "../../enum/enum";
import { v4 as uuid } from 'uuid';
interface IModal {
    isOpen: boolean,
    modalType?: ModalType | ''
    currentPatient?: IPatient
    description?:string
}
interface IInitialState {
    patients: IPatient[]
    doctors: IDoctor[]
    isModalOpen: IModal
}

const initialState: IInitialState = {

    patients: [
        {
            id: uuid(),
            age: 21,
            name: 'Ivan',
            pain: Pain.EYE,
            doctor: ''

        },
        {
            id: uuid(),
            age: 18,
            name: 'Sasha',
            pain: Pain.LEG,
            doctor: ''

        },
        {
            id: uuid(),
            age: 42,
            name: 'Tolya',
            pain: Pain.SKIN,
            doctor: ''

        },
        {
            id: uuid(),
            age: 27,
            name: 'Ihor',
            pain: Pain.HEART,
            doctor: ''

        }
    ],
    doctors: [
        {
            id: uuid(),
            name: "Dr. John Smith",
            age: 35,
            skills: {
                heart: 7,
                eye: 3,
                leg: 5,
                skin: 3

            },
        },
        {
            id: uuid(),
            name: "Dr. Sarah Lee",
            age: 42,
            skills: {
                heart: 2,
                eye: 4,
                leg: 3,
                skin: 5
            },
        },
        {
            id: uuid(),
            name: "Dr. David Kim",
            age: 28,
            skills: {
                heart: 5,
                eye: 4,
                leg: 5,
                skin: 4
            },
        }
    ],
    isModalOpen: {
        isOpen: false,
        modalType: '',
        description:''
    }
}

const medicalSlice = createSlice({
    name: 'medicalSlice',
    initialState,
    reducers: {
        openModal(state, payload: { type: string, payload: IModal }) {
            return { ...state, isModalOpen: payload.payload }
        },
        addPatient(state, payload: { type: string, payload: IPatient }) {
            return { ...state, patients: [...state.patients, payload.payload] }

        },
        setPatients(state, payload: { type: string, payload: IPatient[] }) {
            return { ...state, patients: payload.payload }
        },
        removePatient(state, payload: { type: string, payload: IPatient }) {
            return { ...state, patients: state.patients.filter((patient) => patient.id !== payload.payload.id) }
        },
        editPatient(state, payload: { type: string, payload: IFormikValues }) {
            return {
                ...state, patients: state.patients.map((pat) => {
                    if (pat.id === state.isModalOpen.currentPatient?.id) {
                        return {
                            ...pat, name: payload.payload.name,
                            age: payload.payload.age,
                            pain: payload.payload.pain
                        }
                    }
                    else {
                        return pat
                    }
                })
            }

        }
    }
})
export default medicalSlice
export const { addPatient, setPatients, removePatient, editPatient, openModal } = medicalSlice.actions