import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Tooltip, XAxis, YAxis} from "recharts";

const AxiosBarChart = () => {
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json()).then(data => setPhones(data.data));
        // used axios over fetch
        axios.get(
          "https://openapi.programming-hero.com/api/phones?search=iphone",
        ).then(data => {
            const allPhones = data.data.data;
            const phoneData = allPhones.map(phone => {
                const phoneObject = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return phoneObject;
            })
            setPhones(phoneData);
        });

    },[])
 
    return (
      <div>
        <h2>Total Phone - {phones.length}</h2>
       
        <BarChart width={600} height={300} data={phones}>
          <Bar dataKey="price" fill={"#8884d8"} />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip tick={{ fill: "#000" }}></Tooltip>
        </BarChart>
      </div>
    );
};

export default AxiosBarChart;