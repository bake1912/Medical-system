import { Button, Space, Table } from "antd"
import { useState } from "react";
export const TableFull = () => {
    enum Pain {
        EYE = 'eye',
        SKIN = 'skin',
        HEART = 'heart',
        LEG = 'leg'

    }
    const [patients, setPatients] = useState<IPatient[]>([
        {
            id: 0,
            age: 21,
            name: 'Ivan',
            pain: Pain.EYE,
            doctor: ''

        },
        {
            id: 1,
            age: 18,
            name: 'Sasha',
            pain: Pain.LEG,
            doctor: ''

        },
        {
            id: 2,
            age: 42,
            name: 'Tolya',
            pain: Pain.SKIN,
            doctor: ''

        },
        {
            id: 3,
            age: 27,
            name: 'Ihor',
            pain: Pain.HEART,
            doctor: ''

        }
    ]
    )
    const doctors: Doctor[] = [
        {
            id: 1,
            name: "Dr. John Smith",
            age: 35,
            specialization: "Cardiology",
            skills: {
                heart: 7,
                eye: 3,
                leg: 5,
                skin: 3

            },
        },
        {
            id: 2,
            name: "Dr. Sarah Lee",
            age: 42,
            specialization: "Dermatology",
            skills: {
                heart: 2,
                eye: 4,
                leg: 3,
                skin: 5
            },
        },
        {
            id: 2,
            name: "Dr. David Kim",
            age: 28,
            specialization: "Pediatrics",
            skills: {
                heart: 5,
                eye: 4,
                leg: 5,
                skin: 4
            },
        },
    ];

    enum ColumnsTopOptions {
        NAME = 'name',
        AGE = 'age',
        SPECIALIZATION = 'specialization',
        SKILLS = 'skills',
        PAIN = 'pain',
        DOCTOR = 'doctor'

    }
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
            title: ColumnsTopOptions.SPECIALIZATION,
            dataIndex: ColumnsTopOptions.SPECIALIZATION,
            key: ColumnsTopOptions.SPECIALIZATION,
        },
        {
            title: ColumnsTopOptions.SKILLS,
            dataIndex: ColumnsTopOptions.SKILLS,
            key: ColumnsTopOptions.SKILLS,
            render: (skills: any) =>
                Object.keys(skills).map((skill) => `${skill}: ${skills[skill]}`).join(", "),
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
                <Space size="middle">
                    <a onClick={() => {
                        setPatients(patients.map((pat) => {
                            if (pat.id === patient.id) {
                                if (pat.pain === Pain.EYE) {
                                    let max = 0
                                    let bestDoctor = pat.doctor
                                    doctors.forEach((doctor) => {
                                        if (doctor.skills.eye > max) {
                                            max = doctor.skills.eye
                                            bestDoctor = doctor.name
                                        }
                                    })
                                    return { ...pat, doctor: bestDoctor }
                                }
                                else if (pat.pain === Pain.HEART) {
                                    let max = 0
                                    let bestDoctor = pat.doctor
                                    doctors.forEach((doctor) => {
                                        if (doctor.skills.heart > max) {
                                            max = doctor.skills.heart
                                            bestDoctor = doctor.name
                                        }
                                    })
                                    return { ...pat, doctor: bestDoctor }
                                }
                                else if (pat.pain === Pain.LEG) {
                                    let max = 0
                                    let bestDoctor = pat.doctor
                                    doctors.forEach((doctor) => {
                                        if (doctor.skills.leg > max) {
                                            max = doctor.skills.leg
                                            bestDoctor = doctor.name
                                        }
                                    })
                                    return { ...pat, doctor: bestDoctor }
                                }
                                else if (pat.pain === Pain.SKIN) {
                                    let max = 0
                                    let bestDoctor = pat.doctor
                                    doctors.forEach((doctor) => {
                                        if (doctor.skills.skin > max) {
                                            max = doctor.skills.skin
                                            bestDoctor = doctor.name
                                        }
                                    })
                                    return { ...pat, doctor: bestDoctor }
                                }
                            }
                            return pat
                        }))
                    }
                    }
                    > Assign doctor</a>

                </Space>
            ),
        },


    ]
    interface Doctor {
        id: number
        name: string;
        age: number;
        specialization: string;
        skills: {
            heart: number,
            eye: number,
            leg: number,
            skin: number
        };
    };


    interface IPatient {
        id: number
        name: string
        age: number
        pain: Pain
        doctor?: string
    }
    return (
        <div>
            <h3>Doctors</h3>
            <Table columns={doctorColumns} dataSource={doctors}></Table>
            <h3>Patients</h3>
            <Table columns={patientColumns} dataSource={patients}></Table>
        </div>
    )
}