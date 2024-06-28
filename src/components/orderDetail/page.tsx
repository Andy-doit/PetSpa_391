'use client'
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Avatar, Link, Chip } from "@nextui-org/react";
import PriceTable from "../priceTable/page";
import CustomerFeedback from "../customerFeedback/page";
import { BookingDetail } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchOrderBooking } from "@/lib/redux/slice/userSlice";
import CancelBooking from "../cancelBooking/page";
import CreateFeedback from "../createFeedback/page";

export default function OrderDetail({ params }: { params: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [booking, setBooking] = useState<BookingDetail | any>();
    const dispatch = useAppDispatch();
    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'Hoàn thành';
            case 'CANCELLED':
                return 'Đã Huỷ';
            case 'SCHEDULED':
                return 'Đã đặt lịch';
            default:
                return 'Không xác định';
        }
    }
    const getColor = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'success';
            case 'CANCELLED':
                return 'danger';
            case 'SCHEDULED':
                return 'warning';
            default:
                return 'default';
        }
    }

    useEffect(() => {
        const bookingDetail = async () => {
            const response = await dispatch(fetchOrderBooking({ slug: params }));
            if (response.payload) {
                setBooking(response.payload);

            }
        };
        bookingDetail();
    }, [dispatch, params]);
    // console.log(booking);

    return (
        <div className="flex flex-col gap-2">
            <Button radius="sm" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="sm" onPress={onOpen}>
                Xem chi tiết
            </Button>

            <Modal
                size="5xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
            >
                <ModalContent >
                    {(onClose) => (
                        <div className="rounded-lg">
                            <div className="rounded-lg p-6"
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "cover",

                                }}
                            >
                                <div className="flex items-center ">
                                    <div className="ml-4">
                                        <p className=" font-medium text-4xl text-orange-600">{booking.serviceName}</p>
                                        <p className="text-xl text-white">{booking.startTime} - {booking.endTime} - {booking.localDate}</p>
                                        <p className="text-2xl text-white">{booking.shopName}</p>
                                        <p className="text-xl font-light text-white"> {booking.shopAddress}</p>
                                        <Chip className="my-2" color={getColor(booking.status)}>{getStatusLabel(booking.status)}</Chip>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <p className="text-2xl font-semibold">Thông tin đặt lịch</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div>
                                                <p className="text-xl font-light">Loại thú cưng</p>
                                                <p className="text-xl font-light">Tên thú cưng</p>
                                                <p className="text-xl font-light">Cân nặng</p>
                                                <p className="text-xl font-light">Khung giờ</p>
                                                <p className="text-xl font-light">Ngày đặt </p>
                                                <p className="text-xl font-light">Ghi chú</p>
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-xl font-medium">{booking.typePet === 'DOG' ? 'Chó' : (booking.typePet === 'CAT' ? 'Mèo' : 'Không có gì')}</p>
                                                <p className="text-xl font-medium">{booking.petName}</p>
                                                <p className="text-xl font-medium">{booking.petWeight}</p>
                                                <p className="text-xl font-medium">{booking.startTime} - {booking.endTime}</p>
                                                <p className="text-xl font-medium">{booking.localDate}</p>
                                                <p className="text-xl font-medium">{booking.bookingNote}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-end">
                                            {booking.status === 'SCHEDULED' && <CancelBooking params={params} />}
                                            {booking.status === 'COMPLETED' && <CreateFeedback shopData={booking} />}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
