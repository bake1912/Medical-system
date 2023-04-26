import { Table } from "antd"
import { UseTable } from "../hook/UseTable";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ModalComponent } from "./ModalComponet";
import './TableFull.scss'
import { UseDoctor } from "../hook/UseDoctor";
export const TableFull = () => {
    const { doctorColumns, patientColumns } = UseTable()
    const hook = UseDoctor()
    const { doctors, patients } = useSelector((store: RootState) => store.Medical)
    return (
        <div>
            <h3 className="table-title">Doctors</h3>
            <Table columns={doctorColumns} dataSource={doctors}></Table>
            <h3 className="table-title">Patients</h3>
            <Table columns={patientColumns} dataSource={patients}></Table>
            <ModalComponent />

        </div>
    )
}