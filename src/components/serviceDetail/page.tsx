'use client'
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Avatar, Link, Chip, CircularProgress } from "@nextui-org/react";
import { ServiceDetail } from "@/models/bookingModels";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchServiceDetail } from "@/lib/redux/slice/listAllServiceSlice";
import PriceTable from "../priceTable/page";
import FeedbackDetail from "../feedbackDetail/page";




export default function DetailService({ params }: { params: { id: number } }) {
    const [service, setService] = useState<ServiceDetail | any>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const serviceDetail = async () => {
            const response = await dispatch(fetchServiceDetail(params));
            if (response) {
                setService(response.payload);
            }
            console.log(response.payload)
        }
        serviceDetail();
    }, [dispatch]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (

        <div>
            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full" onPress={onOpen}>
                Xem chi tiết
            </Button>
            <div className="flex flex-col gap-2">


                <Modal
                    size="5xl"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    scrollBehavior="outside"
                >
                    <ModalContent >
                        {(onClose) => (
                            <div className="rounded-lg">
                                <div className="rounded-lg p-6 "
                                    style={{
                                        backgroundImage: `url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: "cover",

                                    }}
                                >
                                    <div className="flex items-center ">
                                        <div className="ml-4">
                                            <p className=" font-medium text-4xl text-orange-600">{service.serviceName}</p>
                                            <p className="text-2xl text-white">{service.shopName}</p>
                                            <p className="text-xl font-light text-white"> Địa chỉ: {service.shopAddress}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="rounded-lg p-6 ">
                                    <div className="flex justify-end ">
                                        <div className="fixed">
                                            <Link className=" w-[350px]" href={localStorage.getItem('token') ? `/customer/bookingPage/${service.id}` : '/login'}>
                                                <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500   text-white shadow-lg w-[350px]">
                                                    Đặt lịch
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-medium">Giới thiệu</p>
                                    <p className="text-xl">{service.serviceDescription}</p>
                                    <p className="text-2xl mt-2 font-medium">Bảng giá</p>

                                    <div className="mt-3">
                                        <PriceTable />
                                    </div>
                                    <p className="text-2xl mt-2 font-medium">FeedBack</p>
                                    <FeedbackDetail />

                                </div>

                            </div>


                        )}
                    </ModalContent>
                </Modal>
            </div >
        </div>
    );
}
