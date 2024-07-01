"use client"
import { fetchUserInforPagination, patchUpdateProfile } from '@/lib/redux/slice/userSlice';
import { useAppDispatch } from '@/lib/redux/store';
import { UserInfor, updateProfileInput } from '@/models/userModels';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState<string>('');
    const [items, setItems] = useState<UserInfor | null>(null);
    const [profileData, setProfileData] = useState<updateProfileInput>({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: 0,
    });
    const [isEditing, setIsEditing] = useState(false);

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
    }, []);

    useEffect(() => {
        const fetchUserInformation = async () => {
            const response = await dispatch(fetchUserInforPagination());
            const userInfo = response.payload;
            setItems(userInfo);
            setProfileData({
                id: userId,
                firstName: userInfo.firstName || '',
                lastName: userInfo.lastName || '',
                email: userInfo.email || '',
                phone: userInfo.phone?.toString() || '',
            });
        };

        if (userId) {
            fetchUserInformation();
        }
    }, [dispatch, userId]);

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setProfileData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        if (items) {
            setProfileData({
                id: userId,
                firstName: items.firstName || '',
                lastName: items.lastName || '',
                email: items.email || '',
                phone: items.phone,
            });
        }
    };

    const handleUpdate = async () => {
        try {
            if (userId) {
                await dispatch(patchUpdateProfile({ profileData })).unwrap();
                toast.success("Cập nhật thông tin thành công!", {
                    autoClose: 1500,
                });
                setIsEditing(false);
                if (items) {
                    setItems({
                        ...items,
                        firstName: profileData.firstName || ' ',
                        lastName: profileData.lastName || ' ',
                        email: profileData.email || ' ',
                        phone: profileData.phone || 0,
                    });
                }
            }
        } catch (error) {
            console.error('Lỗi cập nhật:', error);
            toast.error("Đã xảy ra lỗi khi cập nhật thông tin. Vui lòng thử lại sau!");
        }
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
                    <h1 className='text-2xl font-bold uppercase mr-2'>{items?.firstName || ''}</h1>
                    <h1 className='text-2xl font-bold uppercase'>{items?.lastName || ''}</h1>
                </div>
                <div className='flex justify-end'>
                    <div className='absolute mt-2'>
                        {!isEditing && (
                            <Button onClick={handleEditClick} startContent={<BiEdit className="h-4 w-4" />}>
                                Chỉnh sửa
                            </Button>
                        )}
                    </div>
                </div>
                <Divider />
                <div className='container mt-4 flex justify-center'>
                    <Card className='w-[550px] p-4'
                        style={{
                            backgroundImage: 'url(https://i.pinimg.com/564x/a6/b0/89/a6b0891684b7e9d0ddc6262191ff340c.jpg)',
                            backgroundSize: 'top',
                        }}>
                        <CardHeader className='w-full flex justify-center text-center'>
                            <div>
                                <p className='text-3xl text-white uppercase font-bold'>Tài Khoản</p>
                                <p className='text-white'>
                                    Thực hiện thay đổi cho tài khoản của bạn tại đây.
                                </p>
                            </div>
                        </CardHeader>
                        <CardBody className="space-y-2">
                            <div className="space-y-1">
                                <p className='text-white'>Tên</p>
                                <Input
                                    id="firstName"
                                    disabled={!isEditing}
                                    value={profileData.firstName || ''}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <p className='text-white'>Họ</p>
                                <Input
                                    id="lastName"
                                    disabled={!isEditing}
                                    value={profileData.lastName || ''}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <p className='text-white'>Email</p>
                                <Input
                                    id="email"
                                    disabled={!isEditing}
                                    value={profileData.email || ''}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                            </div>
                            <div className="space-y-1">
                                <p className='text-white'>Số điện thoại</p>
                                <Input
                                    id="phone"
                                    disabled={!isEditing}
                                    value={profileData.phone?.toString() || "Chưa cập nhật"}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                />
                            </div>
                        </CardBody>
                        {isEditing && (
                            <CardFooter>
                                <Button color="success" onClick={handleUpdate}>Lưu</Button>
                                <Button className="ml-5" onClick={handleCancelClick}>Huỷ</Button>
                            </CardFooter>
                        )}
                    </Card>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
