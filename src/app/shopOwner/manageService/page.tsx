'use client'
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import ServiceManagement from "@/components/tableServiceofShop/page";
import ModalCreateService from "@/components/modalCreateService/page";

const ManageService = () => {
    const [showModalCreateService, setShowModalCreateService] = useState(false);

    const handleCloseModal = () => {
        setShowModalCreateService(false);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Quản Lí Dịch Vụ</h2>
                <button
                    onClick={() => setShowModalCreateService(true)}
                    className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <FcPlus className="mr-2" />
                    Thêm dịch vụ mới
                </button>
            </div>
            <div className="table-user-container">
                <ServiceManagement />
                <ModalCreateService
                    isOpen={showModalCreateService}
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    );
};

export default ManageService;