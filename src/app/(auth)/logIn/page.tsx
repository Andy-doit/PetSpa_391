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
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyInput, MyInputPassword } from '@/components/ui/loginInput';
import { useAppDispatch } from '@/lib/redux/store';
import { loginFailure, loginStart } from '@/lib/redux/slice/authSlice';
import baseApi from '@/utilities/baseApi';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { ROLE } from '@/utilities/roleUtils/role';
import { AxiosError } from 'axios';
import { LoginError } from '@/utilities/authUtils/loginValidation';
interface roleJwt extends JwtPayload {
    role: string;
    userId: string;

}
export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const initialValues = {
        username: '',
        password: '',
    };
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


    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleLogin = async (value: LoginInput) => {
        dispatch(loginStart());
        try {
            const { data } = await baseApi.post(`api/v1/auth/signin`, {
                username: value.username,
                password: value.password,
            });
            const decodeToken = jwtDecode(data.token) as roleJwt;
            console.log(decodeToken)
            const expirationTime = Math.floor(Date.now() / 1000) + (20 * 60);
            localStorage.setItem('exp', expirationTime.toString());
            Cookies.set('token', data.token, { expires: 1 });
            Cookies.set('role', decodeToken?.role, { expires: 1 })
            Cookies.set('userId', decodeToken?.userId, { expires: 1 })
            switch (decodeToken?.role) {
                case ROLE.role1:
                    console.log('role1')
                    router.replace(`/`);
                    break;
                case ROLE.role2:
                    router.replace(`/shopOwner`);
                    break;
                case ROLE.role3:
                    router.replace(`/admin`);
                    break;
                default:
                    break;
            }
            localStorage.setItem("token", data.token);
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorResponse = error?.response?.data?.error?.message;
                if (errorResponse in LoginError) {
                    const translatedError =
                        LoginError[errorResponse as keyof typeof LoginError];
                    dispatch(loginFailure(translatedError));
                } else {
                    dispatch(loginFailure(errorResponse));
                }
            } else {
                dispatch(loginFailure("Đã có lỗi xảy ra"));
            }
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
                        onSubmit={handleLogin}>
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
