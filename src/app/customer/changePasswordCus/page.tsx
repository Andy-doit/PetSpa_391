"use client"
import { fetchUserInforPagination, patchPasswordProfile, patchUpdateProfile } from '@/lib/redux/slice/userSlice';
import { useAppDispatch } from '@/lib/redux/store';
import { UserInfor, passwordInfor, updatePasswordInput, updateProfileInput } from '@/models/userModels';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<passwordInfor>();
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchUserInforPagination());
            setItems(response.payload);

        }
        allService();
    }, [dispatch]);
    const [userId, setUserId] = useState<string>('');
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
    const [profileData, setProfileData] = useState<updatePasswordInput>({
        id: userId,
        oldPassword: items?.oldPassword,
        newPassword: items?.newPassword,
        confirmPassword: items?.confirmPassword

    });
    useEffect(() => {
        if (userId) {
            setProfileData(prevData => ({
                ...prevData,
                id: userId,
            }));
        }
    }, [userId]);
    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setProfileData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
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
    const handleUpdate = async () => {
        try {
            if (userId) {
                await dispatch(patchPasswordProfile({ profileData })).unwrap();
                toast.success("Cập nhật dịch vụ thành công!", {
                    autoClose: 1500,
                });
                setIsEditing(false);
            }
        } catch (error) {
            console.error('Lỗi  cập nhật:', error);
            toast.error("Đã xảy ra lỗi khi cập nhật dịch vụ. Vui lòng thử lại sau!");
        }
    };
    console.log(profileData)
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

                    <h1 className='text-2xl font-bold uppercase mr-2'>{items?.firstName}</h1>
                    <h1 className='text-2xl font-bold uppercase'>{items?.lastName}</h1>
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
                <div className='container mt-4'
                >
                    <Tabs className="flex justify-center">
                       
                        <Tab className='flex justify-center' key="password" title="Mật khẩu">
                            <Card className='w-[550px] p-4'
                                style={{
                                    backgroundImage: 'url(https://i.pinimg.com/564x/a6/b0/89/a6b0891684b7e9d0ddc6262191ff340c.jpg)',
                                    backgroundSize: 'top',
                                }}
                            >
                                <CardHeader className='w-full flex justify-center text-center'>
                                    <div>
                                        <p className='text-3xl text-white uppercase font-bold'>Tài Khoản</p>
                                        <p className='text-white'>
                                            Thay đổi mật khẩu cho tài khoản của bạn tại đây.
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody className="space-y-2 text-white">
                                    <div className="space-y-1">
                                        <p >Mật khẩu hiện tại</p>
                                        <Input onChange={(e) => handleInputChange('oldPassword', e.target.value)} disabled={!isEditing} type='password' />
                                    </div>
                                    <div className="space-y-1">
                                        <p >Mật khẩu mới</p>
                                        <Input  disabled={!isEditing} type='password' onChange={(e) => handleInputChange('newPassword', e.target.value)}/>
                                    </div>
                                    <div className="space-y-1">
                                        <p >Xác nhận mật khẩu</p>
                                        <Input  disabled={!isEditing} type='password'onChange={(e) => handleInputChange('confirmPassword', e.target.value)} />
                                    </div>
                                </CardBody>
                                {isEditing && (
                                    <CardFooter>
                                        <Button color="success" onClick={handleUpdate}>Lưu</Button>
                                        <Button className="ml-5" onClick={handleCancelClick}>Huỷ</Button>
                                    </CardFooter>
                                )}
                            </Card>
                        </Tab>

                    </Tabs>
                </div>


            </div>
            <ToastContainer />
        </div>
    )
}