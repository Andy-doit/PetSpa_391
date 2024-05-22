"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Navigate } from "react-router-dom";

export default function Login() {
    const router = useRouter()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false);
    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLocaleLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // }
    const handleLogin = async () => {
        //validate
        // const isvalidateEmail = validateEmail(email)
        // if (!isvalidateEmail) {
        //     toast.error("Invalid email")
        //     return
        // }
        // if (!password) {
        //     toast.error('Invalid email')
        //     return
        // }
        // //submit aPis
        // setIsloading(true);
        // let data = await postLogin(email, password)

        // if (data && data.EC === 0) {
        //     dispatch(doLogin(data))
        //     toast.success(data.EM)
        //     setIsloading(false)
        //     navigate('/')

        // }
        // if (data && data.EC !== 0) {
        //     toast.error(data.EM)
        //     setIsloading(false)
        // }
        router.push('/')
    }
    return (
        <section className="h-screen">
            <div className="flex h-full flex-wrap items-center justify-between lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-6/12">
                    <form>

                        <Card className="mx-auto w-3/5">

                            <CardHeader className="space-y-1">
                                <p className="text-4xl font-bold">Đăng nhập</p>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Input value={email} onChange={(event) => setemail(event.target.value)} type={"email"} label="Email" />
                                    </div>
                                    <div style={{ ["display" as any]: "flex" }} className="space-y-2">
                                        <Input type={isShowPassword ? "text" : "password"} value={password} label="Mật khẩu" onChange={(event) => setpassword(event.target.value)} />
                                        {isShowPassword ?
                                            <span className="icons-eye"
                                                onClick={() => setIsShowPassword(false)}>
                                                <VscEye />
                                            </span>
                                            :
                                            <span className="icons-eye"
                                                onClick={() => setIsShowPassword(true)}>
                                                <VscEyeClosed />
                                            </span>
                                        }
                                    </div>
                                    <div className="forgot-password text-right">
                                        <Link href="/" className="hover:text-orange-600">Quên Mật Khẩu </Link>

                                    </div>
                                    <Button onClick={() => handleLogin()} radius="full" className="bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg" type="submit">
                                        Đăng nhập
                                    </Button>
                                </div>
                            </CardBody>
                            <Button className="mt-4" onClick={() => router.push('/')}>
                                Trở về trang chính
                            </Button>

                            <CardFooter>
                                Bạn chưa có tài khoản phải không?{' '}
                                <Link href="/signUp" className="hover:text-orange-600" >Đăng ký ở đây</Link>
                            </CardFooter>

                        </Card>
                    </form>

                </div>
                <div className="grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                        src="https://i.pinimg.com/564x/54/71/6a/54716a3848c6fbfb5770d4831803532b.jpg"
                        className="w-full h-screen"
                        alt="Sample image"
                    />
                </div>
            </div>
        </section>
    );
}
