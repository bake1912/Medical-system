import { Button, Input, Modal, Select } from "antd"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import * as Yup from 'yup'
import { IFormikValues } from "../interface/interface"
import { useDispatch, useSelector } from "react-redux"
import { addPatient, editPatient, openModal } from "../redux/slice/medical-slice"
import { ModalType, Pain } from "../enum/enum"
import { v4 as uuid } from 'uuid';
import { RootState } from "../redux/store"
import './ModalComponent.scss'
export const ModalComponent = () => {
    const id = uuid()
    const { isOpen, modalType, currentPatient, description } = useSelector((store: RootState) => store.Medical.isModalOpen)
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        age: Yup.number().required(),
        pain: Yup.string().required().oneOf([
            Pain.EYE,
            Pain.HEART,
            Pain.LEG,
            Pain.SKIN,
        ]),
    })

    const initialValues: IFormikValues = modalType === ModalType.ADD ? {
        name: '',
        age: null,
        pain: ''

    } :
        {
            name: currentPatient?.name,
            age: currentPatient?.age,
            pain: currentPatient?.pain
        }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {

            if (modalType === ModalType.ADD) {
                const newPatient = { ...values, id }
                dispatch(addPatient(newPatient))
            }
            else {
                dispatch(editPatient(values))
            }
            dispatch(openModal({ isOpen: false }))

        },
        validationSchema,
        enableReinitialize: true

    })

    useEffect(() => {
        formik.resetForm()
    }, [isOpen])
    const { errors, touched } = formik
    return (
        <div>
            <Button type="primary" onClick={() => dispatch(openModal({ isOpen: true, modalType: ModalType.ADD }))}>Add patient</Button>

            <Modal
                open={isOpen}
                footer={null}
                onCancel={() => dispatch(openModal({ isOpen: false }))}
            >
                {modalType !== ModalType.DESCRIPTION ?
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            placeholder="name"
                            onChange={formik.handleChange}
                            name="name"
                            value={formik.values.name}
                        ></Input>
                        {errors.name && touched.name && <div className="error">{errors.name}</div>}
                        <Input
                            placeholder="age"
                            onChange={formik.handleChange}
                            name="age"
                            value={formik.values.age!}
                        ></Input>
                        {errors.age && touched.age && <div className="error">{errors.age}</div>}
                        < Select value={formik.values.pain}
                            onChange={formik.handleChange("pain")}
                            placeholder='pain'
                        >
                            <Select.Option value={Pain.EYE}>{Pain.EYE}</Select.Option >
                            <Select.Option value={Pain.HEART}>{Pain.HEART}</Select.Option >
                            <Select.Option value={Pain.LEG}>{Pain.LEG}</Select.Option >
                            <Select.Option value={Pain.SKIN}>{Pain.SKIN}</Select.Option >
                        </Select>
                        {errors.pain && touched.pain && <div className="error">{errors.pain}</div>}
                        <div style={{ display: 'flex', justifyContent: 'right' }}>
                            <Button onClick={() => dispatch(openModal({ isOpen: false }))}>Close</Button>
                            <Button htmlType="submit">Submit</Button>
                        </div>
                    </form>
                    : <h1 className="description">{description}</h1>

                }

            </Modal>
        </div >
    )
}