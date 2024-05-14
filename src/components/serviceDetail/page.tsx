'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Avatar, Link } from "@nextui-org/react";
import PriceTable from "../priceTable/page";

export default function ServiceDetail() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div className="flex flex-col gap-2">
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onPress={onOpen}>
                View details
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
                                    <div>
                                        <Avatar size="lg" name="Junior" />
                                    </div>
                                    <div className="ml-4">
                                        <p className=" font-medium text-4xl text-orange-600">Grooming and Nail</p>
                                        <p className="text-2xl text-white"> Khoi Spa</p>

                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-xl font-light text-white"> Địa chỉ: Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.</p>
                                </div>
                                <div className="mt-2" >
                                    <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"><Link href="customer/bookingPage">Booking now</Link></Button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-2xl">Giới thiệu</p>
                                <p>Khoi Spa là một thương hiệu dịch vụ spa dành cho thú cưng, nơi mà bạn có thể mang đến cho các thành viên cưng của gia đình những trải nghiệm thư giãn và chăm sóc tốt nhất.</p>
                                <p className="text-orange-600">Dịch vụ Grooming tại Khoi Spa được thiết kế đặc biệt để đáp ứng mọi nhu cầu chăm sóc và làm đẹp cho thú cưng của bạn. Dù là chó, mèo hay các loài thú cưng khác, đội ngũ chuyên gia tại Khoi Spa sẽ đảm bảo rằng thú cưng của bạn được làm đẹp với chất lượng cao nhất và một cách an toàn và thoải mái nhất có thể.</p>
                            </div>
                            <div className="px-6">
                                <p className="text-2xl">Bảng giá</p>
                                <div className="py-6">
                                    <PriceTable />
                                </div>
                            </div>
                        </div>

                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
