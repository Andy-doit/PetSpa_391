'use client';
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { LoginInput } from '@/models/authentication';
import { useAuth } from '@/hooks/useAuth';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners'; // Import the spinner
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyInput, MyInputPassword } from '@/components/ui/loginInput';

export default function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const initialValues = {
        username: '',
        password: '',
    };
    const [userData, setUserData] = useState<LoginInput>({
        username: '',
        password: '',
    });
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Tên người dùng là bắt buộc')
            .min(3, 'Tên người dùng phải có ít nhất 3 ký tự')
            .max(20, 'Tên người dùng không được vượt quá 20 ký tự'),
        password: Yup.string()
            .required('Mật khẩu là bắt buộc')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
            .max(50, 'Mật khẩu không được vượt quá 50 ký tự'),
    });

    const { state, handleLogin } = useAuth();
    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };
    const handleSubmit = async (values: LoginInput) => {
        setLoading(true);

        try {
            await handleLogin(values);
            toast.success("Đăng nhập Thành Công! Bạn sẽ chuyển đến trang chủ trong giây lát...", {
                onClose: () => {

                    setTimeout(() => {
                        router.replace('/');
                    }, 3000);
                },
                autoClose: 3000,
            });


        } catch (error) {

            toast.error('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
            setLoading(false);
        }
    };


    return (
        <section className='h-screen relative'>
            <Button

                onClick={() => router.push('/')}
                className='absolute top-4 left-4 z-10'
            >
                Trở về trang chính
            </Button>
            <div className='flex h-full flex-wrap items-center justify-between lg:justify-between'>
                <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-6/12'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Form>
                            <Card className='mx-auto w-3/5'>
                                <CardHeader className='space-y-1'>
                                    <p className='text-4xl font-bold'>Đăng nhập</p>
                                </CardHeader>
                                <CardBody>
                                    <div className='space-y-4'>
                                        <div className='space-y-2'>
                                            <Field
                                                name='username'
                                                component={MyInput}
                                                type={isShowPassword ? 'text' : 'password'}
                                            />
                                        </div>
                                        <div className='space-y-4'>
                                            <div className='relative flex flex-col space-y-2'>
                                                <Field
                                                    name='password'
                                                    fullWidth
                                                    component={MyInputPassword}
                                                    placeholder='Password'
                                                />
                                            </div>
                                        </div>

                                        <div className='forgot-password text-right'>
                                            <Link href='/' className='text-blue-500 hover:text-orange-600'>Quên Mật Khẩu? </Link>
                                        </div>
                                        <Button disabled={isLoading} type='submit' radius='full' className='bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg'>
                                            Đăng nhập
                                            {isLoading && <ClipLoader size={20} color="#ffffff" />}
                                        </Button>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    Bạn chưa có tài khoản phải không?
                                    <Link href='/signUp'>
                                        <span className='text-blue-500 hover:text-orange-600'> Đăng ký ở đây </span>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </Form>
                    </Formik>


                </div>
                <div className='grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
                    <img
                        src='https://i.pinimg.com/564x/54/71/6a/54716a3848c6fbfb5770d4831803532b.jpg'
                        className='w-full h-screen'
                        alt='Sample image'
                    />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
