'use client'

import { useState } from "react";
import { Link } from "@nextui-org/react";
import { BiHome } from "react-icons/bi";
import { FaBars, FaUserCog, FaUsers } from "react-icons/fa"; // Example icons
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { MdWorkHistory } from "react-icons/md";

export default function SiderbarAdmin() {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleLogout = async () => {
        await localStorage.clear();
        Cookies.remove('token');
        router.replace('/logIn');
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`h-screen z-20 sticky top-0 ${isCollapsed ? 'w-20' : 'w-84'} bg-gray-100 transition-width duration-300`}>
            <div className="flex flex-col items-center justify-between h-full">
                <button onClick={toggleSidebar} className="absolute right-2 top-2 z-30 bg-gray-300 my-2 mb-5 rounded-full p-2">
                    <FaBars />
                </button>
                <div className='flex flex-col gap-6 mt-10 px-2'>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <BiHome className="w-6 h-6" />
                        {!isCollapsed && <Link href="/admin" className="text-default-900 text-xl font-medium">Trang chủ</Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <MdWorkHistory className="w-6 h-6" />
                        {!isCollapsed && <Link href="/admin/manageAccount" className="text-default-900 text-xl font-medium">Tài khoản Shop</Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <FaUsers className="w-6 h-6" />
                        {!isCollapsed && <Link href="/admin/manageAccountCus" className="text-default-900 text-xl font-medium">Tài khoản khách hàng</Link>}
                    </div>
                    <div className="flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]">
                        <FaUserCog className="w-6 h-6" />
                        {!isCollapsed && <Link href="/admin/manageTimeSlotAdmin" className="text-default-900 text-xl font-medium">Tạo khung giờ</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}
