import React, { useState } from "react";
import styled from "styled-components";

const countries = [
    {
        name: "india",
        value: "IN",
        cites: ["delhi", "mumbai"],
    },
    {
        name: "pak",
        value: "PAK",
        cites: ["Lahore", "Karachi"],
    },
    {
        name: "Ban",
        value: "BAN",
        cites: ["dhaka", "chittagog"],
    },
];

function Dropdown() {
    const [selectedcountry, setSelectedcountry] = useState("");
    const [selectedcites, setselectedcites] = useState([]);

    const handlecoutrychange = (e) => {
        const cntryvalue = e.target.value;
        const cntryobject = countries.find(
            (country) => country.value === cntryvalue
        );
        setSelectedcountry(cntryvalue)
        setselectedcites(cntryobject.cites)
    };

    return (
        <Totaldiv>
            <Selectcntry>
                <p>Select Country</p>
                <select class="custom-select" onChange={handlecoutrychange}>
                    {countries.map((item) => {
                        return <option value={item.value}>{item.name}</option>;
                    })}
                </select>
            </Selectcntry>
         
        <Selectcntry>
          <p>Select city</p>
          <select className="custom-select">
            {selectedcites.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </Selectcntry>
 
        
        </Totaldiv>
    );
}

export default Dropdown;

const Totaldiv = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const Selectcntry = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 
    flex-direction: column;
    .custom-select {
        width: 200px; /* Set a fixed width or use percentage */
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        color: #333;
        font-size: 14px;
        padding: 5px;
    }
`;
