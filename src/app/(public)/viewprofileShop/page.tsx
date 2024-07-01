'use client'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea } from "@nextui-org/react";
import { FaDoorClosed, FaDoorOpen, FaStar } from "react-icons/fa";
import { MdClose, MdHomeRepairService, MdMenuOpen, MdOnlinePrediction, MdOpenInNew, MdOpenWith, MdOutlinePerson } from "react-icons/md";
import { Tabs, Tab } from "@nextui-org/react";

import { BiEdit } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { shopInfor } from "@/models/shopModel";
import AddShop from "@/components/createShop/page";
import CreateShop from "@/components/createbyShop/page";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import UpadteProfileShop from "@/components/updateProfileShop/page";
import { allServicePaginationData, detailShopPaginationData } from "@/models/userModels";
import { fetchAllServiceInfo, fetchShopInfo } from "@/lib/redux/slice/userSlice";


export default function Profile({ params }: { params: { slug: string } }) {
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false);
    const [pets, setPets] = useState<allServicePaginationData[]>([]);
    const [items, setItems] = useState<detailShopPaginationData>();
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
            const response = await dispatch(fetchAllServiceInfo(params));
            setPets(response.payload);
        }
        allService();
    }, [dispatch]);
    useEffect(() => {
        const petDetail = async () => {
            const response = await dispatch(fetchShopInfo(params));
            if (response.payload) {
                setItems(response.payload);
            }
        };
        petDetail();
    }, [dispatch, params]);
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

                            <Tab key="account" title="Dịch vụ " className="px-12 py-5 text-xl flex justify-center">
                                <Card className='w-[1500px] p-4'>
                                    <CardHeader className='w-full flex justify-center text-center'>
                                        <div>
                                            <p className='text-2xl font-bold'>Thông tin Tất cả các dịch vụ </p>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="space-y-2">
                                        {pets && (
                                            <Table aria-label="Example static collection table">
                                                <TableHeader>
                                                    <TableColumn>Tên dịch  vụ</TableColumn>
                                                    <TableColumn>Địa chỉ</TableColumn>
                                                    <TableColumn>Giá </TableColumn>
                                                    <TableColumn>Đánh giá</TableColumn>
                                                    <TableColumn>Hành động</TableColumn>
                                                </TableHeader>
                                                <TableBody>
                                                    {pets.map((pet) => (
                                                        <TableRow key={pet.id}>
                                                            <TableCell>{pet.serviceName}</TableCell>
                                                            <TableCell>{pet.address}</TableCell>
                                                            <TableCell>{pet.price}</TableCell>
                                                            <TableCell>{pet.nomination}</TableCell>


                                                            <TableCell>
                                                                <div className="flex items-center gap-4">


                                                                </div>


                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        )}
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