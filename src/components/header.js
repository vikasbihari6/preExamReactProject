import { useState } from "react";
const Header=()=>{
    const [critical,setCritcal]=useState(0);
    const [major,setMajor]=useState(0);
    const [minor,setMinor]=useState(0);
    const [normal,setNormal]=useState(0);
    const [fail,setFail]=useState(0);
    return(
        <>
            <div className="col-6 d-flex my-2">
                <div className="mx-3 bg-danger px-2 rounded-1">Critical: {critical}</div>
                <div className="mx-3 bg-danger px-2 rounded-1">Major: {major}</div>
                <div className="mx-3 bg-warning px-2 rounded-1">Minor: {minor}</div>
                <div className="mx-3 bg-success px-2 rounded-1">Normal: {normal}</div>
                <div className="mx-3 bg-primary px-2 rounded-1">Failed to load status: {fail}</div>
                <div><i class="fa fa-refresh"></i></div>
            </div>
        </>
    )
}

export default Header;