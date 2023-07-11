import { useState } from "react";
import { Chart } from 'react-google-charts';
const Left=()=>{
    const date=new Date().toDateString();
    const time=new Date().toLocaleTimeString();
    const [operational,setOperational]=useState(39);
    const [degraded,setDegraded]=useState(0);
    const [partial,setPartial]=useState(5);
    const [major,setMajor]=useState(0);
    const [unresolved,setUnresolved]=useState(0);
    const [scheduled,setScheduled]=useState(0);

    const data = [
        ['Label', 'Value'],
        ['operational', operational],
        ['degraded', degraded],
        ['partial', partial],
        ['major', major],
        ['unresolved', unresolved],
        ['scheduled', scheduled],
      ];
    
      const options = {
        title: '',
        width: 300,
        height: 350,
      };
    
    return(
        <>
            <h6 className="bg-success text-white col-5 m-3 p-3">Twilio: All System Operational</h6>
            <div className="row m-3 d-flex border">
                <div className="col-5">
                    <div className="p-3 border"><span>{date}</span><span className="mx-2">{time}</span></div>
                    <div className="p-3 border">operational <span className="float-end">{operational}</span></div>
                    <div className="p-3 border">degraded performance <span className="float-end">{degraded}</span></div>
                    <div className="p-3 border">partial outage <span className="float-end">{partial}</span></div>
                    <div className="p-3 border">major outage <span className="float-end">{major}</span></div>
                    <div className="p-3 border">unresolved incident <span className="float-end">{unresolved}</span></div>
                    <div className="p-3 border">scheduled maintenances <span className="float-end">{scheduled}</span></div>
                </div>

                <div className="col-6 m-3">
                    <p>{operational}/{44} Services Operational</p>
                    
                    <Chart chartType="PieChart" data={data} options={options} />

                </div>
            </div>
        </>
    )
}

export default Left;