"use client"
import { fetchUserInforPagination } from '@/lib/redux/slice/userSlice';
import { useAppDispatch } from '@/lib/redux/store';
import { UserInfor } from '@/models/userModels';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'

export default function Profile() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<UserInfor>();
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchUserInforPagination());
            setItems(response.payload);

        }
        allService();
    }, [dispatch]);
    console.log(items)
    const [isEditing, setIsEditing] = useState(false);
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

        <div className='h-screen'>

            <div
                style={{
                    backgroundImage: 'url(https://i.pinimg.com/originals/5b/15/2a/5b152a7d4faa4b8ffb158eaa95fde428.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '21px'
                }}>
            </div>
            <div className='container relative'>
                <div className='justify-center flex items-center'>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                </div>

                <div className='justify-center flex items-center mt-2'>
                    {!isEditing && (
                        <h1 className='text-2xl font-bold uppercase'>{items?.username}</h1>
                    )}

                    {isEditing && (
                        <div className='w-fit'>
                            <Input className="text-center" size='sm' type="name" variant='faded' defaultValue={items?.username} />
                        </div>
                    )}
                </div>
                <div className='justify-center flex items-center'>
                    {!isEditing && (
                        <h1 className='text-1xl font-light '>A funny man</h1>
                    )}

                    {isEditing && (
                        <div className='w-fit my-2'>
                            <Input className="text-center" size='sm' type="name" variant='faded' defaultValue='A funny man' />
                        </div>
                    )}

                </div>
                <div className='flex justify-end '>
                    <div className=' absolute mt-2' >
                        {!isEditing && (
                            <Button onClick={handleEditClick} startContent={<BiEdit className=" h-4 w-4" />}>
                                Chỉnh sửa
                            </Button>
                        )}
                    </div>
                </div>

                <Divider />
                <div className='container mt-4'>
                    <Tabs className="flex justify-center">
                        <Tab className='flex justify-center' key="account" title="Tài khoản">
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
                                        <p >Tên</p>
                                        <Input id="firstName" disabled={!isEditing} defaultValue={items?.firstName} />
                                    </div>
                                    <div className="space-y-1">
                                        <p >Họ</p>
                                        <Input id="lastName" disabled={!isEditing} defaultValue={items?.lastName} />
                                    </div>
                                    <div className="space-y-1">
                                        <p >Email</p>
                                        <Input id="email" disabled={!isEditing} defaultValue={items?.email} />
                                    </div>
                                    <div className="space-y-1">
                                        <p >Số điện thoại</p>
                                        <Input id="phone" disabled={!isEditing} defaultValue=".." />
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
                        <Tab className='flex justify-center' key="password" title="Mật khẩu">
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
    )
}