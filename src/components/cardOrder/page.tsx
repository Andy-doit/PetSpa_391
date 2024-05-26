'use client'
import { Button, Card, CardBody, Chip, Image, Slider } from "@nextui-org/react";
import { IoHeartCircleOutline } from "react-icons/io5";
import OrderDetail from "../orderDetail/page";
const orderService = [
    { name: "Dịch vụ tắm rửa", company: "Khoi Spa", date: "15/05/2024", process: "Đang xử lí" },
    { name: "Dịch vụ tắm rửa", company: "An Spa", date: "16/05/2024", process: "Thành Công" },
    { name: "Dịch vụ cắt tỉa lông", company: "Long Spa", date: "20/05/2024", process: "Đã huỷ" },
    { name: "Dịch vụ khách sạn thú cưng", company: "Nam Spa", date: "21/05/2024", process: "Đang xử lí" },
    { name: "Dịch vụ mát xa ", company: "Justin Spa", date: "22/05/2024", process: "Thành công" },



];
export default function CardOrder() {
    {

    }
    return (
        <>
            {
                orderService.map((service) => (
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 mt-2"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-5 md:gap-2 items-center justify-center">
                                <div className="relative col-span-10 md:col-span-2">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={100}
                                        shadow="md"
                                        src="https://nextui.org/images/album-cover.png"
                                    />
                                </div>
                                <div className="flex flex-col col-span-5 md:col-span-10">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-0">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-semibold text-2xl text-foreground/90">{service.name}</h3>
                                                <div className="ml-5">
                                                    <Chip size="sm" color="success">{service.process}</Chip>
                                                </div>
                                            </div>

                                            <p className="text-small text-foreground/80">{service.date}</p>
                                            <div className="flex  w-full justify-between">
                                                <h1 className="text-large font-medium ">{service.company}</h1>
                                                <OrderDetail />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
        </>
    )
}