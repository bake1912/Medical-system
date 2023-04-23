import {Table } from "antd"
import { UseTable } from "../hook/UseTable";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ModalComponent } from "./ModalComponet";
export const TableFull = () => {

    const { doctorColumns, patientColumns } = UseTable()
    const { doctors, patients } = useSelector((store: RootState) => store.Medical)
    console.log(patients);
    
    return (
        <div>
            <h3>Doctors</h3>
            <Table columns={doctorColumns} dataSource={doctors}></Table>
            <h3>Patients</h3>
            <Table columns={patientColumns} dataSource={patients}></Table>
            <ModalComponent/>

        </div>
    )
}