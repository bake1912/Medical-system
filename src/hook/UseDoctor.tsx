import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setDoctors } from "../redux/slice/medical-slice";

export const UseDoctor = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        await axios.get('https://6449786ee7eb3378ca4a956e.mockapi.io/doctors/all').
            then((response) => dispatch(setDoctors(response.data)))
    }
    useEffect(() => {
        fetchData()
    }, [])
}