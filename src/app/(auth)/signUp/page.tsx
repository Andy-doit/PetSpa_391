"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    // const [isShowPassword, setIsShowPassword] = useState(false);
    const colors = [

        "primary"

    ];

    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };
    const handleRegister = async () => {
        // //validate
        // const isValidEmail = validateEmail(email);
        // if (!isValidEmail) {
        //     toast.error('Invalid email')
        //     return;
        // }

        // if (!password) {
        //     toast.error('Invalid password')
        //     return;
        // }

        // //submit apis
        // let data = await postRegister(email, password, username);
        // if (data && data.EC === 0) {
        //     toast.success(data.EM);
        //     navigate('/login')
        // }

        // if (data && +data.EC !== 0) {
        //     toast.error(data.EM);
        // }
    }

    return (
        <section className="h-screen">
            <div className="flex h-full flex-wrap items-center justify-between lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-6/12">
                    <form>

                        <Card className="mx-auto w-3/5">
                            <div className='header'>
                                <span> Bạn đã có sãn một tài khoản?</span>
                                <Link href="/logIn" className="hover:text-orange-600">Đăng Nhập </Link>
                            </div>
                            <CardHeader className="space-y-1">
                                <div>
                                    <p className="text-4xl font-bold">Đăng kí tài khoản</p>
                                </div>

                            </CardHeader>

                            <CardBody>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Input value={email} onChange={(event) => setEmail(event.target.value)} type={"email"} label="Email" />
                                    </div>

                                    <div style={{ ["display" as any]: "flex" }}>


                                        <Input
                                            label='Mật khẩu'
                                            type={isShowPassword ? "text" : "password"}
                                            className="form-control"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}

                                        />
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

                                    <div className="space-y-2">
                                        <Input type={"username"} value={username} label="Tên người dùng" onChange={(event) => setUsername(event.target.value)} />
                                    </div>

                                </div>

                            </CardBody>
                            <Button className="bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg" onClick={() => router.push('/logIn')}>
                                Tạo tài khoản
                            </Button>


                            <CardFooter>
                                <Button className="mt-4" onClick={() => router.push('/')}>
                                    Trở về trang chính
                                </Button>
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
