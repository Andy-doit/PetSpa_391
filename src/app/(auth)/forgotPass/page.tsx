'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../../../../public/assets/img/login.svg';
import Image from 'next/image';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Link from 'next/link';
import { forrgotPasswordPagination } from '@/lib/redux/slice/userSlice'; // Adjust import path as per your setup
import { ForgotPasswordInput } from '@/models/userModels'; // Adjust import path as per your setup
import { useAppDispatch } from '@/lib/redux/store';

export default function Forgot() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<ForgotPasswordInput>({
        email: '',

    });

    const handleInputChange = (fieldName: keyof ForgotPasswordInput, newValue: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: newValue,
        }));
    };

    const handleCancelClick = () => {
        router.replace('/logIn');
    };

    const handleUpdate = async () => {
        try {
            setIsLoading(true);
            await dispatch(forrgotPasswordPagination({ formData })).unwrap();
            toast.success('Gửi thành công, hãy xác nhận Email');
            setTimeout(() => {
                router.replace('/password');
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            toast.error('Gửi không thành công. Vui lòng thử lại.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="h-screen">
            <Button
                startContent={<FaArrowAltCircleLeft />}
                onClick={() => router.push('/')}
                className="bg-gradient-to-tr absolute m-5 from-pink-500 to-yellow-500 text-white shadow-lg"
            >
                Trở về trang chủ
            </Button>
            <div className="flex h-full flex-wrap items-center justify-between lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-6/12">
                    <Card className="mx-auto w-3/5">
                        <CardHeader className="space-y-1">
                            <div className="flex justify-center text-center">
                                <p className="text-4xl font-bold uppercase">Quên mật khẩu</p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <Button className="ml-1 mr-5" onClick={handleCancelClick}>
                                    <Link href="/logIn">Huỷ</Link>
                                </Button>
                                <Button color="success" onClick={handleUpdate}>
                                    Gửi {isLoading && <ClipLoader size={20} color="#ffffff" />}
                                </Button>
                            </div>
                        </CardBody>
                        <CardFooter>
                            Bạn đã có tài khoản?{' \t'}
                            <Link href="/logIn">
                                <span className="text-blue-500 hover:text-orange-600">Đăng nhập ở đây</span>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <Image src={loginImg} alt="login" className="w-full h-screen object-cover" />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
