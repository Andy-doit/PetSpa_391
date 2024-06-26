'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input, Textarea } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { MdClose, MdHomeRepairService, MdMenuOpen, MdOnlinePrediction, MdOpenInNew, MdOpenWith, MdOutlinePerson } from "react-icons/md";
import { Tabs, Tab } from "@nextui-org/react";

import { BiEdit } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchShopInforPagination } from "@/lib/redux/slice/shopSlice";
import { shopInfor } from "@/models/shopModel";
import AddShop from "@/components/createShop/page";
import CreateShop from "@/components/createbyShop/page";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";


export default function Profile() {
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false);
    const [items, setItems] = useState<shopInfor>();
    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [userId]);

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
            <div className="flex justify-end">
                <div className="flex justify-between flex-wrap gap-4 items-center">
                    <div className="flex flex-row gap-3.5 flex-wrap">
                        <CreateShop userId={userId} />
                    </div>
                </div>
            </div>

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
                            <MdOnlinePrediction className="w-8 h-8 mr-5" />
                            <p className="text-2xl font-semibold mr-3">Giờ mở: </p>
                            <p className="text-xl font-medium text-orange-600">{items?.openTime}</p>
                        </div>

                        <div className="flex justify-start items-center">
                            <MdClose className="w-8 h-8 mr-5" />
                            <p className="text-2xl font-semibold mr-3">Giờ đóng: </p>
                            <p className="text-xl font-medium text-orange-600">{items?.closeTime}</p>
                        </div>
                    </div>
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