import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
 { name: "Jan", hires: 10 },
 { name: "Feb", hires: 20 },
 { name: "Mar", hires: 35 },
 { name: "Apr", hires: 50 },
 { name: "May", hires: 65 }
];

function DashboardGraph(){

 return(

  <div style={{width:"100%",height:180}}>

   <ResponsiveContainer>

    <LineChart data={data}>

      <XAxis dataKey="name" stroke="#94a3b8"/>

      <YAxis stroke="#94a3b8"/>

      <Tooltip/>

      <Line
       type="monotone"
       dataKey="hires"
       stroke="#3b82f6"
       strokeWidth={3}
      />

    </LineChart>

   </ResponsiveContainer>

  </div>

 );

}

export default DashboardGraph;