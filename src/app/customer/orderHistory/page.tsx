'use client'
import CardOrder from "@/components/cardOrder/page";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
const Slot = [

    { label: "Slot 3", value: "Slot 3", description: "Giá từ cao đến thấp" },
    { label: "Slot 4", value: "Slot 4", description: "Giá từ thấp đến cao" },

];
export default function OrderHistory() {
    return (
        <div className="">
            <div className="py-2 container">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Trang cá nhân
                            </a>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-black md:ms-2 dark:text-black">Lịch sử đặt lịch</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className=" flex mb-5 mt-2 h-screen">

                <div className="container ">
                    <CardOrder />

                </div>
            </div>

        </div>
    )
}