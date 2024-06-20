'use client'
import { Avatar, Link } from "@nextui-org/react";
import { BiHome, BiUser } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut, IoToday } from "react-icons/io5";
import { MdRoomService, MdWorkHistory } from "react-icons/md";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function SiderbarAdmin() {
    const router = useRouter();
    const handleLogout = async () => {
        await localStorage.clear();
        Cookies.remove('token');
        router.replace('/logIn');
    };
    return (
        <div className="h-screen z-[20] sticky top-0 border">
            <div className="flex flex-col items-center justify-between h-full ">
                <div className='flex flex-col gap-6 mt-10 px-2  '>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <BiHome className="w-6 h-6" />
                        <Link href="/admin" className="text-default-900 text-xl font-medium">Trang chủ</Link>
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <MdWorkHistory className="w-6 h-6" />
                        <Link href="/admin/manageAccount" className="text-default-900 text-xl font-medium">Tài khoản </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
