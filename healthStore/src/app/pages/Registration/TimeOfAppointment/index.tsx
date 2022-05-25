import {useLocation} from "react-router-dom";

export const TimeOfAppointment = () => {
    const location = useLocation();
    const doctorId = location.pathname.split('/').slice(-1)

    return (
        <>
            <p>{doctorId}</p>
        </>
    )
}