import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function Confirm() {
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
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}>
                    <div className="rounded-lg">
                        <div className="rounded-lg p-6"
                            style={{
                                backgroundImage: `url("https://i.pinimg.com/564x/11/e5/bd/11e5bd4736dbf8f404eb90bf306a0562.jpg")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",

                            }}
                        >
                            <div className="flex items-center ">
                                <div className="">
                                    <p className=" font-medium text-4xl text-orange-600">Dịch vụ tắm rửa</p>
                                    <p className="text-2xl text-white"> Khoi Spa</p>
                                    <p className="text-xl font-light text-white"> Địa chỉ: Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.</p>


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
                                            <p className="text-xl font-medium">Chó</p>
                                            <p className="text-xl font-medium">Justin</p>
                                            <p className="text-xl font-medium">45Kg</p>
                                            <p className="text-xl font-medium">09:00 - 10:30</p>
                                            <p className="text-xl font-medium">25/04/2025</p>
                                            <p className="text-xl font-medium">Có tiền sử bị bệnh tim</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <CardFooter className="w-full flex justify-center mt-3">
                        <Button radius="full" className=" w-1/2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Xác nhận</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}