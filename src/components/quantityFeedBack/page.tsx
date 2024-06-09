import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { MdRateReview } from "react-icons/md";


export const QuantityFeedBack = () => {
    return (
        <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full h-fit">
            <CardBody className="py-5 overflow-hidden">
                <div className="flex gap-2.5">
                    <MdRateReview color="white" className="w-10 h-10" />
                    <div className="flex flex-col">
                        <span className="text-white text-xl">Đánh giá từ khách hàng</span>
                        <span className="text-white text-md">1200 lượt đánh giá</span>
                    </div>
                </div>

            </CardBody>
        </Card>
    );
};
