import React, { useState, useEffect } from "react";

const Subtracker = () => {
  const [tot, setTot] = useState([]);

  const getdata = async () => {
    const url = "https://api.covid19india.org/data.json";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.statewise);
    setTot(data.statewise);
    
    console.log(tot);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-primary">
            <tr>
              <th> State</th>
              <th> Confirmed</th>
              <th> Active</th>
              <th> Recovered</th>
              <th> Deaths</th>
              <th> Last Update</th>
            </tr>
          </thead>
          <tbody>
            {
                tot.map((item, id)=>{
                    return(
                        <tr>
                            <td> {item.state}</td>
                            <td> {item.confirmed}</td>
                            <td> {item.active}</td>
                            <td> {item.recovered}</td>
                            <td> {item.deaths}</td>
                            <td> {item.lastupdatedtime}</td>
                        </tr>
                    )
                })
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Subtracker;
