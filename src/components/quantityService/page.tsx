import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { BiHome } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";


export const QuantityService = () => {
    return (
        <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardBody className="py-5">
                <div className="flex gap-2.5">
                    <MdHomeRepairService color="black" className="w-10 h-10" />
                    <div className="flex flex-col">
                        <span className="text-black text-xl">Tổng số dịch vụ</span>
                        <span className="text-black text-md">25 dịch vụ</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
