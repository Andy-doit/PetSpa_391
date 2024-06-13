'use client'
import { createBooking, fetchServiceDetail } from "@/lib/redux/slice/listAllServiceSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { ServiceDetail } from "@/models/bookingModels";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Confirm() {
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
    const [serviceData, setServiceData] = useState({
        shopName: '',
        serviceName: '',
        shopAddress: '',
    });

    const dispatch = useAppDispatch();
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
        const service = sessionStorage.getItem('service');
        if (service) {
            setServiceData(JSON.parse(service));
        }
    }, []);
    useEffect(() => {
        const dataFromStorage = sessionStorage.getItem('bookingValues');


        if (dataFromStorage) {
            console.log(JSON.parse(dataFromStorage))
            setbookingData(JSON.parse(dataFromStorage));
        }
    }, []);
    const router = useRouter()
    const handleBooking = async () => {
        try {
            if (userId) {
                await dispatch(createBooking({ bookingData })).unwrap();
                console.log(bookingData);

                sessionStorage.removeItem('bookingValues');
                sessionStorage.removeItem('service');
                toast.success("Đặt lịch thành công! Bạn sẽ được chuyển về trang chủ trong giây lát...", {
                    onClose: () => {

                        setTimeout(() => {
                            router.replace('/');
                        }, 3000);
                    },
                    autoClose: 3000,
                });
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
                <Card className="w-[800px]">
                    <div className="rounded-lg">
                        <div className="rounded-lg p-6"
                            style={{
                                backgroundImage: 'url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",

                            }}
                        >

                            <div className="flex items-center ">
                                <div className="">
                                    <p className=" font-medium text-4xl text-orange-600">{serviceData.serviceName}</p>
                                    <p className="text-2xl text-white">{serviceData.shopName}</p>
                                    <p className="text-xl font-light text-white">{serviceData.shopAddress}</p>
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
                            className=" w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        >
                            Xác nhận
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}