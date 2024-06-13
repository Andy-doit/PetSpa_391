'use client'
import { createBooking, fetchServiceDetail } from "@/lib/redux/slice/listAllServiceSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { ServiceDetail } from "@/models/bookingModels";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Confirm({ params }: { params: { slug: string } }) {
    const [bookingData, setbookingData] = useState({
        customerId: 0,
        additionalMessage: '',
        serviceId: 0,
        localDate: '',
        timeSlotDto: {
            startLocalDateTime: '',
            endLocalDateTime: ''
        },
        petName: '',
        petAge: 0,
        typePet: '',
        petWeight: 0,
        petId: '',
        petGender: '',
    });

    const [service, setService] = useState<ServiceDetail | any>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const serviceDetail = async () => {
            const response = await dispatch(fetchServiceDetail(params));
            if (response.payload) {
                setService(response);
            }
        };
        serviceDetail();
    }, [dispatch]);
    console.log(service)
    const [userId, setUid] = useState<string>('');
    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                console.log('userId:', uid);
                if (uid) {
                    setUid(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [userId]);

    useEffect(() => {
        const dataFromStorage = sessionStorage.getItem('bookingValues');
        if (dataFromStorage) {
            console.log(JSON.parse(dataFromStorage))
            setbookingData(JSON.parse(dataFromStorage));
        }
    }, []);

    const handleBooking = async () => {
        try {
            if (userId) {
                await dispatch(createBooking({ bookingData })).unwrap();
                console.log(bookingData);
                sessionStorage.removeItem('bookingValues');
            }

        } catch (error) {
            console.error('Error creating :', error);
        }


    };

    return (
        <div
            style={{
                backgroundImage: 'url(https://i.pinimg.com/736x/91/27/3e/91273ed3de2f0c4f869655e05668a9d2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
        >
            <div className="container h-screen flex justify-center items-center "
                style={{

                }}>
                <Card style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.😎',
                }}>
                    <div className="rounded-lg">
                        <div className="rounded-lg p-6"
                            style={{
                                backgroundImage: 'url(https://i.pinimg.com/736x/91/27/3e/91273ed3de2f0c4f869655e05668a9d2.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",

                            }}
                        >
                            {service && (
                                <div className="flex items-center ">
                                    <div className="">
                                        <p className=" font-medium text-4xl text-orange-600">{service.serviceName}</p>
                                        <p className="text-2xl text-white">{service.shopName}</p>
                                        <p className="text-xl font-light text-white">{service.address}</p>
                                    </div>
                                </div>
                            )}

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
                                        <div className="ml-20">
                                            <p className="text-xl font-medium">{bookingData.typePet}</p>
                                            <p className="text-xl font-medium">{bookingData.petName}</p>
                                            <p className="text-xl font-medium">{bookingData.petWeight}</p>
                                            <p className="text-xl font-medium">{bookingData.timeSlotDto.startLocalDateTime} - {bookingData.timeSlotDto.endLocalDateTime}</p>
                                            <p className="text-xl font-medium">{bookingData.localDate}</p>
                                            <p className="text-xl font-medium">{bookingData.additionalMessage}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <CardFooter className="w-full flex justify-center mt-3">
                        <Button
                            onClick={handleBooking}
                            radius="full"
                            className=" w-1/2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        >
                            Xác nhận
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}