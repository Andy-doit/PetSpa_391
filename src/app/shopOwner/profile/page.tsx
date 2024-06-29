'use client'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input, Textarea } from "@nextui-org/react";
import { FaDoorClosed, FaDoorOpen, FaStar } from "react-icons/fa";
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
import UpadteProfileShop from "@/components/updateProfileShop/page";


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
    console.log(items);
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
                <div className="flex justify-between">
                    <Card className="w-[500px]">
                        <CardHeader className="flex gap-2 ">
                            <Avatar
                                className="w-20 h-20 text-large mr-5"
                                radius="full"
                                src="https://i.pinimg.com/564x/09/05/5b/09055b06494c0fb44e4c68f20123f88a.jpg"
                            />
                            <div className="flex flex-col">
                                <p className="text-4xl font-extrabold text-orange-600 ">{items?.shopName}</p>
                                <p className="text-xl text-default-500">{items?.shopTitle}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className="flex items-center justify-around">
                                <div className="flex items-center">
                                    <p className="text-xl font-light mr-1">Mở cửa:</p>
                                    <p className="text-xl font-normal ">{items?.openTime}</p>
                                </div>
                                <div className="flex items-center ">
                                    <p className="text-xl font-light mr-1">Đóng cửa:</p>
                                    <p className="text-xl font-normal ">{items?.closeTime}</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-[300px] ">
                        <CardHeader>
                        </CardHeader>
                        <Divider />
                        <CardBody className="flex justify-center items-center">
                            <div className="">
                                <div className="flex justify-start items-center">
                                    <p className="text-xl font-light mr-1">Dịch vụ: </p>
                                    <p className="text-xl font-normal">{items?.totalServices} dịch vụ</p>
                                </div>
                                <div className="flex justify-start items-center">
                                    <p className="text-xl font-light mr-1">Đánh giá: </p>
                                    <p className="text-xl font-normal">{items?.nomination} đánh giá</p>
                                </div>
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter></CardFooter>
                    </Card>
                </div>

                <div className="relative">
                    <div className='flex justify-end '>
                        <div className=' absolute mt-2' >

                            {items ? (
                                <UpadteProfileShop params={items} />
                            ) : (
                                <CreateShop userId={userId} />
                            )}
                        </div>
                    </div>
                    <div className="flex w-full flex-col mt-5 ">
                        <Tabs color="success" aria-label="Options" className="flex justify-center ">
                            <Tab key="intro" title="Giới thiệu" className="px-12 py-5 text-xl ">
                                <Card>
                                    <CardBody className="p-10">
                                        <div>
                                            <p className="text-3xl font-medium text-orange-600">Giới thiệu</p>
                                            <p className="text-2xl font-normal ">{items?.shopDescription}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>

                            <Tab key="account" title="Tài Khoản" className="px-12 py-5 text-xl flex justify-center">
                                <Card className='w-[550px] p-4'>
                                    <CardHeader className='w-full flex justify-center text-center'>
                                        <div>
                                            <p className='text-2xl font-bold'>Thông tin tài khoản</p>
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

                        </Tabs>
                    </div>
                </div>


            </div>
        </>
    )
}