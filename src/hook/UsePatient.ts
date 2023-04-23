import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { removePatient, setPatients, editPatient as editPat, openModal } from "../redux/slice/medical-slice"
import { IPatient } from "../interface/interface"
import { ModalType, Pain } from "../enum/enum"


export const UsePatient = () => {
    const { doctors, patients } = useSelector((store: RootState) => store.Medical)
    const dispatch = useDispatch()
    const assignDoctor = (patient: IPatient) => {
        const updatedPatients = patients?.map((pat) => {
            if (pat.id === patient.id) {
                let bestDoctor = pat.doctor
                let description = `${patient.name} has a problem with ${patient.pain}
                so the ${bestDoctor} is the best`
                if (pat.pain === Pain.EYE) {
                    let max = 0
                    doctors?.forEach((doctor) => {
                        if (doctor.skills.eye > max) {
                            max = doctor.skills.eye
                            bestDoctor = doctor.name
                        }
                    })
                    description = `${patient.name} has a problem with ${patient.pain}
                    so the ${bestDoctor} is the best  `
                    dispatch(openModal({ isOpen: true, modalType: ModalType.DESCRIPTION, description }))
                    return { ...pat, doctor: bestDoctor }
                }

                else if (pat.pain === Pain.HEART) {
                    let max = 0
                    doctors?.forEach((doctor) => {
                        if (doctor.skills.heart > max) {
                            max = doctor.skills.heart
                            bestDoctor = doctor.name
                        }
                    })
                    description = `${patient.name} has a problem with ${patient.pain}
                    so the ${bestDoctor} is the best `
                    dispatch(openModal({ isOpen: true, modalType: ModalType.DESCRIPTION, description }))
                    return { ...pat, doctor: bestDoctor }
                }
                else if (pat.pain === Pain.LEG) {
                    let max = 0
                    doctors?.forEach((doctor) => {
                        if (doctor.skills.leg > max) {
                            max = doctor.skills.leg
                            bestDoctor = doctor.name
                        }
                    })
                    description = `${patient.name} has a problem with ${patient.pain}
                so the ${bestDoctor} is the best`
                    dispatch(openModal({ isOpen: true, modalType: ModalType.DESCRIPTION, description }))
                    return { ...pat, doctor: bestDoctor }
                }
                else if (pat.pain === Pain.SKIN) {
                    let max = 0
                    doctors?.forEach((doctor) => {
                        if (doctor.skills.skin > max) {
                            max = doctor.skills.skin
                            bestDoctor = doctor.name
                        }
                    })
                    description = `${patient.name} has a problem with ${patient.pain}
                so the ${bestDoctor} is the best `
                    dispatch(openModal({ isOpen: true, modalType: ModalType.DESCRIPTION, description }))
                    return { ...pat, doctor: bestDoctor }
                }

            }
            return pat

        }

        )
        dispatch(setPatients(updatedPatients!))
    }
    return { assignDoctor, }
}