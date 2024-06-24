'use client'
import { useState } from "react";
import { Avatar, Link, Button } from "@nextui-org/react";
import { BiHome, BiUser } from "react-icons/bi";
import { FaUserCircle, FaBars, FaShopify } from "react-icons/fa";
import { IoLogOut, IoToday } from "react-icons/io5";
import { MdRoomService, MdWorkHistory } from "react-icons/md";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function SiderbarHost() {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar visibility

    const handleLogout = async () => {
        await localStorage.clear();
        Cookies.remove('token');
        router.replace('/logIn');
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed); // Toggle sidebar visibility
    };

    return (
        <div className="flex h-screen">
            <div className={`flex flex-col items-center justify-between h-full bg-gray-100 transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-84'} relative z-20`}>
                <Button onClick={toggleSidebar} className="absolute mx--2 right-2 z-30 bg-gray-200 my-2 mb-5 rounded-full p-2">
                    <FaBars />
                </Button>
                <div className='flex flex-col gap-6 mt-10 px-2'>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <BiHome className="w-6 h-6" />
                        {!isCollapsed && <Link href="/shopOwner" className="text-default-900 text-xl font-medium">Trang chủ</Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <MdRoomService className="w-6 h-6" />
                        {!isCollapsed && <Link href="/shopOwner/manageService" className="text-default-900 text-xl font-medium">Dịch vụ</Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <IoToday className="w-6 h-6" />
                        {!isCollapsed && <Link href="/shopOwner/bookingOrder" className="text-default-900 text-xl font-medium">Lịch đặt chăm sóc thú cưng </Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <MdWorkHistory className="w-6 h-6" />
                        {!isCollapsed && <Link href="/shopOwner/timeSlot" className="text-default-900 text-xl font-medium">Thời gian hoạt động</Link>}
                    </div>

                </div>
            </div>
            <div className={`flex-grow transition-all duration-300 ${isCollapsed ? 'ml-5' : 'ml-10'}`}>

                <div className="p-4">

                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}
