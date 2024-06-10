import React from "react";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [

    {
        name: "Series2",
        data: [11, 32, 45, 32, 34, 52, 41, 58, 89, 125, 1, 12],
    },
];

const options: Props["options"] = {
    chart: {
        type: "area",
        animations: {
            easing: "linear",
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: "basic-bar",
        foreColor: "hsl(var(--nextui-default-800))",
        stacked: true,
        toolbar: {
            show: false,
        },
    },

    xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        labels: {
            // show: false,
            style: {
                colors: "hsl(var(--nextui-default-800))",
            },
        },
        axisBorder: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
        axisTicks: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
    },
    yaxis: {
        labels: {
            style: {
                // hsl(var(--nextui-content1-foreground))
                colors: "hsl(var(--nextui-default-800))",
            },
        },
    },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "hsl(var(--nextui-default-200))",
        strokeDashArray: 0,
        position: "back",
    },
    stroke: {
        curve: "smooth",
        fill: {
            colors: ["red"],
        },
    },
    // @ts-ignore
    markers: false,
};

export const Steam = () => {
    return (
        <>
            <div className="w-full z-20">
                <div id="chart">
                    <Chart options={options} series={state} type="area" height={425} />
                </div>
            </div>
        </>
    );
};
