import React from "react";
import { Box } from "@chakra-ui/react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';


const staticDatas = [
    { name: "Januari", pv: 0 },
    { name: "Februari", pv: 0 },
    { name: "Maret", pv: 0 },
    { name: "April", pv: 0 },
    { name: "Mei", pv: 0 },
    { name: "Juni", pv: 8 },
    { name: "Juli", pv: 0 },
];

const StatisticCard = () => {
    return (
        <Box elevation={0} bgColor="white" borderRadius={8}>
            <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={staticDatas}
                        margin={{ top: 20, right: 20, left: -12, bottom: 4 }}
                        maxBarSize={12}
                    >
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
                        <YAxis />
                        <Tooltip cursor={{ fill: "rgb(239 239 239)" }} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="pv" fill="#3F51B5" radius={2} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Box>
    );
};

export default StatisticCard;