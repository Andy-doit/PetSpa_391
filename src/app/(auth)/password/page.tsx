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
import { forrgotPasswordPagination, updatePasswordHomePage } from '@/lib/redux/slice/userSlice'; // Adjust import path as per your setup
import { ForgotPasswordInput, updatePasswordInputHomePage } from '@/models/userModels'; // Adjust import path as per your setup
import { useAppDispatch } from '@/lib/redux/store';

export default function ChangePassword({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [passWordData, setPassWordData] = useState<updatePasswordInputHomePage>({
        newPassword: '',
        confirmPassword: '',
        token: ''
    });
    const resetForm = () => {
        setPassWordData({
            newPassword: '',
            confirmPassword: '',
            token: ''
        });

    };
    const validateInput = () => {
        const errors = [];

        if (!passWordData.token) {
            errors.push('Mã OTP không được để trống');
        }
        if (!passWordData.newPassword || passWordData.newPassword.length < 6 || passWordData.newPassword.length > 20) {
            errors.push('Mật khẩu mới phải có ít nhất 6 ký tự và phải có ít hơn 20 kí tự');
        }
        if (!passWordData.newPassword || passWordData.confirmPassword !== passWordData.confirmPassword) {
            errors.push('Xác nhận mật khẩu phải giống mật khẩu mới ');
        }

        return errors;
    };
    const handleInputChange = (fieldName: string, newValue: string) => {
        setPassWordData(prevData => ({
            ...prevData,
            [fieldName]: newValue,
        }));
    };

    const handleCancelClick = () => {
        router.replace('/logIn');
        resetForm()
    };

    const handleUpdate = async () => {
        const errors = validateInput();
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        try {
            setIsLoading(true);
            await dispatch(updatePasswordHomePage({ passWordData })).unwrap();
            toast.success('Đổi mật khẩu thành công');
            setTimeout(() => {
                router.replace('/logIn');
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            toast.error('Đôi không thành công. Vui lòng thử lại.');
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
                                <p className="text-4xl font-bold uppercase">Đổi mật khẩu</p>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        value={passWordData.token}
                                        onChange={(e) => handleInputChange('token', e.target.value)}
                                        placeholder="Nhập mã xác nhận"
                                        isInvalid={!!validationErrors.find(err => err.includes('Mã'))}
                                        color={validationErrors.find(err => err.includes('Mã')) ? "danger" : "default"}
                                        errorMessage={validationErrors.find(err => err.includes('Mã'))}

                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        name="password"
                                        type='password'
                                        value={passWordData.newPassword}
                                        onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                        placeholder="Mật khẩu mới"
                                        isInvalid={!!validationErrors.find(err => err.includes('Mật khẩu mới'))}
                                        color={validationErrors.find(err => err.includes('Mật khẩu mới')) ? "danger" : "default"}
                                        errorMessage={validationErrors.find(err => err.includes('Mật khẩu mới'))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        name="password"
                                        type='password'
                                        value={passWordData.confirmPassword}
                                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                        placeholder="Xác nhận mật khẩu"
                                        isInvalid={!!validationErrors.find(err => err.includes('Xác nhận'))}
                                        color={validationErrors.find(err => err.includes('Xác nhận')) ? "danger" : "default"}
                                        errorMessage={validationErrors.find(err => err.includes('Xác nhận'))}
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
