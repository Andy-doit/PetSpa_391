"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { QuantityFeedBack } from "@/components/quantityFeedBack/page";
import { QuantityService } from "@/components/quantityService/page";
import { QuantityBooking } from "@/components/quantityBooking/page";

const Chart = dynamic(
    () => import("../../components/chartShopowner/page").then((mod) => mod.Steam),
    {
        ssr: false,
    }
);

export default function Home() {
    return (
        <div className="h-full lg:px-6">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
                <div className=" gap-6 flex flex-col w-full">
                    <div className="flex flex-col gap-2">
                        <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
                            <QuantityFeedBack />
                            <QuantityService />
                            <QuantityBooking />
                        </div>
                    </div>


                    <div className="h-full flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Thống kê</h3>
                        <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}