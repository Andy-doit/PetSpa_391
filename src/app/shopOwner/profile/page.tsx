'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input, Textarea } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { Tabs, Tab } from "@nextui-org/react";

import { BiEdit } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchShopInforPagination } from "@/lib/redux/slice/shopSlice";
import { shopInfor } from "@/models/shopModel";


export default function Profile() {
    const dispatch = useAppDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [items, setItems] = useState<shopInfor>();
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchShopInforPagination());
            setItems(response.payload);

        }
        allService();
    }, [dispatch]);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = () => {
        setIsEditing(false);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    };
    return (
        <>
            <div className="container mt-5">
                <div className="flex justify-around">
                    <Card className="max-w-[600px]">
                        <CardHeader className="flex gap-3 p-5 x">
                            <Image
                                alt="nextui logo"
                                height={80}
                                radius="full"
                                src="https://th.bing.com/th/id/OIP.2-iZBJy9PVnzZI7_aVMJ7QHaH_?rs=1&pid=ImgDetMain"
                                width={80}
                            />
                            <div className="flex flex-col">
                                {!isEditing && (
                                    <p className="text-3xl font-extrabold text-orange-600 ">{items?.shopName}</p>
                                )}

                                {isEditing && (
                                    <div className='w-fit'>
                                        <Input size="sm" className="text-center" type="name" variant='underlined' defaultValue={items?.shopName} />
                                    </div>
                                )}

                                <p className="text-2xl text-default-500">{items?.shopTitle}</p>
                            </div>
                        </CardHeader>
                    </Card>
                    <div className="flex flex-row w-[500px] items-center justify-between">
                        <div className="flex justify-start items-center">
                            <MdHomeRepairService className="w-8 h-8 mr-5" />
                            <p className="text-2xl font-semibold mr-3">Dịch vụ: </p>
                            <p className="text-xl font-medium text-orange-600">{items?.totalServices}</p>
                        </div>

                        <div className="flex justify-start items-center">
                            <FaStar className="w-8 h-8 mr-5" />
                            <p className="text-2xl font-semibold mr-3">Đánh giá: </p>
                            <p className="text-xl font-medium text-orange-600">{items?.nomination}</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className='flex justify-end '>
                        <div className=' absolute mt-2' >
                            {!isEditing && (
                                <Button onClick={handleEditClick} startContent={<BiEdit className=" h-4 w-4" />}>
                                    Chỉnh sửa
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="flex w-full flex-col mt-5 ">
                        <Tabs color="success" aria-label="Options" className="flex justify-center ">
                            <Tab key="intro" title="Giới thiệu" className="px-12 py-5 text-xl ">
                                <Card>
                                    <CardBody className="p-10">
                                        {!isEditing && (
                                            <div>
                                                <p className="text-3xl font-medium text-orange-600">Giới thiệu</p>
                                                <p className="text-2xl font-normal ">{items?.shopDescription}</p>
                                                <p className="text-2xl ">1. Dịch vụ tắm rửa: Thú cưng của bạn sẽ được tận hưởng một buổi tắm rửa thư giãn với các sản phẩm chăm sóc da dịu nhẹ và không gây kích ứng.</p>
                                                <p className="text-2xl ">2. Dịch vụ mát xa: Để giúp thú cưng giảm căng thẳng và cải thiện tinh thần, chúng tôi cung cấp dịch vụ mát xa chuyên nghiệp dành cho thú cưng của bạn.</p>
                                                <p className="text-2xl ">3. Dịch vụ làm đẹp: Đội ngũ chuyên gia làm đẹp của chúng tôi sẽ giúp thú cưng của bạn trở nên lộng lẫy hơn bao giờ hết, với các dịch vụ như cắt tỉa lông, làm móng, và làm đẹp tổng thể.</p>
                                                <p className="text-2xl ">4. Dịch vụ mát xa đặc biệt: Để mang lại trải nghiệm thư giãn tối đa cho thú cưng của bạn, chúng tôi còn cung cấp các dịch vụ mát xa đặc biệt, được thiết kế đặc biệt để giúp cải thiện sức khỏe và tinh thần của thú cưng.</p>
                                                <p className="text-2xl ">5. Khách sạn thú cưng: Nếu bạn cần một nơi an toàn và thoải mái để thú cưng của bạn ở lại trong thời gian bạn đi xa, chúng tôi cũng cung cấp dịch vụ khách sạn thú cưng đầy tiện nghi và an toàn.</p>
                                                <p className="text-2xl ">Tại Andy Spa, chúng tôi cam kết mang lại trải nghiệm chăm sóc tốt nhất cho thú cưng của bạn, với sự quan tâm và chuyên môn từ đội ngũ nhân viên giàu kinh nghiệm của chúng tôi.</p>
                                            </div>
                                        )}

                                        {isEditing && (
                                            <div className='w-full'>
                                                <Textarea className="text-center" type="name" variant='faded' defaultValue='' />
                                            </div>
                                        )}

                                    </CardBody>
                                </Card>
                            </Tab>

                            <Tab key="account" title="Tài Khoản" className="px-12 py-5 text-xl flex justify-center">
                                <Card className='w-[550px] p-4'>
                                    <CardHeader className='w-full flex justify-center text-center'>
                                        <div>
                                            <p className='text-2xl font-bold'>Tài Khoản</p>
                                            <p>
                                                Thực hiện thay đổi cho tài khoản của bạn tại đây.
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="space-y-2">
                                        <div className="space-y-1">
                                            <p >Email</p>
                                            <Input id="email" disabled={!isEditing} defaultValue={items?.shopEmail} />
                                        </div>
                                        <div className="space-y-1">
                                            <p >Số điện thoại</p>
                                            <Input id="phone" disabled={!isEditing} defaultValue={items?.shopPhone} />
                                        </div>
                                    </CardBody>
                                    {isEditing && (
                                        <CardFooter>
                                            <Button color="success" onClick={handleSaveClick}>Lưu</Button>
                                            <Button className="ml-5" onClick={handleCancelClick}>Huỷ</Button>
                                        </CardFooter>
                                    )}
                                </Card>
                            </Tab>
                            <Tab key="password" title="Mật khẩu" className="px-12 py-5 text-xl flex justify-center">
                                <Card className='w-[550px] p-4'>
                                    <CardHeader className='w-full flex justify-center text-center'>
                                        <div>
                                            <p className='text-2xl font-bold'>Tài Khoản</p>
                                            <p>
                                                Thay đổi mật khẩu của bạn ở đây.
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="space-y-2">
                                        <div className="space-y-1">
                                            <p >Mật khẩu hiện tại</p>
                                            <Input id="currentPassword" disabled={!isEditing} type='password' />
                                        </div>
                                        <div className="space-y-1">
                                            <p >Mật khẩu mới</p>
                                            <Input id="newPassword" disabled={!isEditing} type='password' />
                                        </div>
                                    </CardBody>
                                    {isEditing && (
                                        <CardFooter>
                                            <Button color="success" onClick={handleSaveClick}>Lưu</Button>
                                            <Button className="ml-5" onClick={handleCancelClick}>Huỷ</Button>
                                        </CardFooter>
                                    )}
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>


            </div>
        </>
    )
}