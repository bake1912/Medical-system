import { Space } from "antd"
import { IDoctorSkills, IPatient } from "../interface/interface"
import { ColumnsTopOptions, ModalType } from "../enum/enum"
import { UsePatient } from "./UsePatient"
import { openModal, removePatient } from "../redux/slice/medical-slice"
import { useDispatch } from "react-redux"

export const UseTable = () => {
    const { assignDoctor } = UsePatient()
    const dispatch = useDispatch()
    const doctorColumns = [
        {
            title: ColumnsTopOptions.NAME,
            dataIndex: ColumnsTopOptions.NAME,
            key: ColumnsTopOptions.NAME,
        },
        {
            title: ColumnsTopOptions.AGE,
            dataIndex: ColumnsTopOptions.AGE,
            key: ColumnsTopOptions.AGE,
        },

        {
            title: ColumnsTopOptions.SKILLS,
            dataIndex: ColumnsTopOptions.SKILLS,
            key: ColumnsTopOptions.SKILLS,
            render: (skills: IDoctorSkills) => {
                let arr: any[] = []
                const currentDoctorSkills = skills
                const nameSkills = Object.keys(currentDoctorSkills)
                for (const name of nameSkills) {
                    arr = [...arr, (`${name}:${currentDoctorSkills[name]}; `)]
                }
                return arr
            }
        },

    ]

    const patientColumns = [
        {
            title: ColumnsTopOptions.NAME,
            dataIndex: ColumnsTopOptions.NAME,
            key: ColumnsTopOptions.NAME,
        },
        {
            title: ColumnsTopOptions.AGE,
            dataIndex: ColumnsTopOptions.AGE,
            key: ColumnsTopOptions.AGE,
        },
        {
            title: ColumnsTopOptions.PAIN,
            dataIndex: ColumnsTopOptions.PAIN,
            key: ColumnsTopOptions.PAIN,
        },
        {
            title: ColumnsTopOptions.DOCTOR,
            dataIndex: ColumnsTopOptions.DOCTOR,
            key: ColumnsTopOptions.DOCTOR,
        },
        {
            title: "Action",
            key: "action",

            render: (patient: IPatient) => (
                <Space size="large">
                    <a onClick={() => { assignDoctor(patient) }}> Assign doctor</a>
                    <a onClick={() => dispatch(openModal({ isOpen: true, modalType: ModalType.EDIT, currentPatient: patient }))}> Edit patient</a>
                    <a onClick={() => dispatch(removePatient(patient))}> Delete patient</a>
                </Space>
            ),
        },
    ]
    return { patientColumns, doctorColumns }
}

