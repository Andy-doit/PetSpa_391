import React, { useEffect, useState } from "react";
import { Modal, ModalContent, Button, Chip, Avatar, Image } from "@nextui-org/react";
import CancelBooking from "../cancelBooking/page";
import CreateFeedback from "../createFeedback/page";
import { BookingDetail } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchOrderBooking } from "@/lib/redux/slice/userSlice";
import ConfirmBooking from "../confirmBooking/page";
import { getShopIdbyTime } from "@/lib/redux/slice/shopSlice";
import Cookies from "js-cookie";

export default function OrderDetail({ params }: { params: string }) {
    const [booking, setBooking] = useState<BookingDetail | null>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useAppDispatch();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const userRole = Cookies.get("role") ?? null;
        setRole(userRole);
    }, []);

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'Hoàn thành';
            case 'CANCELLED':
                return 'Đã Huỷ';
            case 'SCHEDULED':
                return 'Đã đặt lịch';
            case 'NEED_CONFIRM':
                return 'Cần xác nhận';
            default:
                return 'Không xác định';
        }
    };

    const getColor = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'success';
            case 'CANCELLED':
                return 'danger';
            case 'SCHEDULED':
                return 'warning';
            case 'NEED_CONFIRM':
                return 'secondary';
            default:
                return 'default';
        }
    };

    const bookingDetail = async () => {
        try {
            const response = await dispatch(fetchOrderBooking({ slug: params }));
            if (response.payload) {
                setBooking(response.payload);
                setIsOpenModal(true);
            }
        } catch (error) {
            console.error('Error fetching booking detail:', error);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <Button
                radius="sm"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                size="sm"
                onClick={bookingDetail}
            >
                Xem chi tiết
            </Button>

            <Modal
                size="5xl"
                isOpen={isOpenModal}
                onOpenChange={(open) => setIsOpenModal(open)}
                scrollBehavior="outside"
            >
                <ModalContent>
                    {booking && (
                        <div className="rounded-lg">
                            <div
                                className="rounded-lg p-6"
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <p className="font-medium text-4xl text-orange-600">{booking.serviceName}</p>
                                        <p className="text-xl text-white">{booking.startTime} - {booking.endTime} - {booking.localDate}</p>
                                        <p className="text-2xl text-white">{booking.shopName}</p>
                                        <p className="text-xl font-light text-white">{booking.shopAddress}</p>
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
                                                <p className="text-xl font-light mb-5 mt-5">Tên thú cưng</p>
                                                <p className="text-xl font-light mt-8">Cân nặng</p>
                                                <p className="text-xl font-light mt-2">Khung giờ</p>
                                                <p className="text-xl font-light mt-2">Ngày đặt</p>
                                                <p className="text-xl font-light mt-2">Ghi chú</p>
                                                <p className="text-xl font-light mt-5">Hình ảnh dịch vụ</p>
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-xl font-medium">{booking.typePet === 'DOG' ? 'Chó' : (booking.typePet === 'CAT' ? 'Mèo' : 'Không có gì')}</p>
                                                <p className="text-xl font-medium mb-5 flex justify-center mt-5 mr-10"><Avatar className="mr-5" isBordered radius="sm" src={booking.petPhoto} />{booking.petName} </p>
                                                <p className="text-xl font-medium">{booking.petWeight}</p>
                                                <p className="text-xl font-medium mt-2">{booking.startTime} - {booking.endTime}</p>
                                                <p className="text-xl font-medium mt-2">{booking.localDate}</p>
                                                <p className="text-xl font-medium mt-2">{booking.bookingNote}</p>
                                                <div className="flex items-center justify-center mt-5">
                                                    <div className="flex items-center justify-center">
                                                        {booking?.servicePhoto ? (
                                                            <Image
                                                                width={200}
                                                                height={100}
                                                                src={booking.servicePhoto}
                                                                fallbackSrc="https://via.placeholder.com/300x200"
                                                                alt="NextUI Image with fallback"
                                                            />
                                                        ) : (
                                                            <p className="text-center text-xl text-gray-500">Không có ảnh dịch vụ</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-end">
                                            {booking.status === 'SCHEDULED' && <CancelBooking params={params} />}
                                            {booking.status === 'NEED_CONFIRM' && <ConfirmBooking params={booking.id} />}
                                            {booking.status === 'NEED_CONFIRM' && <CancelBooking params={params} />}
                                            {booking.status === 'COMPLETED' && role === 'CUSTOMER' && <CreateFeedback shopData={booking} />}
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
