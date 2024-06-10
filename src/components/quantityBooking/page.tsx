import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { BiCalendarEdit } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";


export const QuantityBooking = () => {
    return (
        <Card className="xl:max-w-sm bg-orange-500 rounded-xl shadow-md px-3 w-full h-fit">
            <CardBody className="py-5 overflow-hidden">
                <div className="flex gap-2.5">
                    <BiCalendarEdit color="white" className="w-10 h-10" />
                    <div className="flex flex-col">
                        <span className="text-white text-xl">Tổng số lịch đặt</span>
                        <span className="text-white text-md">1200 lượt đặt lịch</span>
                    </div>
                </div>

            </CardBody>
        </Card>
    );
};
