'use client'
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import ServiceManagement from "@/components/tableServiceofShop/page";
import ModalCreateService from "@/components/modalCreateService/page";
import ModalViewServiceProps from "@/components/modalViewDetailService/page";
import ModalUpdateServiceProps from "@/components/modalUpdateSerivce/page";
import ModalDeleteServiceProps from "@/components/modalDeleteService/page"
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";

const ManageService = () => {
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [userId]);


    const [showModalCreateService, setShowModalCreateService] = useState(false);
    const [showModalViewService, setShowModalViewService] = useState(false);
    const [showModalUpdateService, setShowModalUpdateService] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showModalDeleteService, setShowModalDeleteService] = useState(false);

    const handleCloseModal = () => {
        setShowModalCreateService(false);
    };

    const handleViewService = (service: any) => {
        setSelectedService(service);
        setShowModalViewService(true);
    };

    const handleCloseViewModal = () => {
        setShowModalViewService(false);
        setSelectedService(null);
    };

    const handleUpdateService = (service: any) => {
        setSelectedService(service);
        setShowModalUpdateService(true);
    };

    const handleCloseUpdateModal = () => {
        setShowModalUpdateService(false);
        setSelectedService(null);
    };
    const handleDeleteService = (service: any) => {
        setSelectedService(service);
        setShowModalDeleteService(true);
    };
    const handleCloseDeleteModal = () => {
        setShowModalDeleteService(false);
        setSelectedService(null);
    };

    return (
        <div className="mx-auto px-4">
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
                <ServiceManagement onViewService={handleViewService} onUpdateService={handleUpdateService} onDeleteService={handleDeleteService} />
                <ModalCreateService
                    userId={userId}
                    isOpen={showModalCreateService}
                    onClose={handleCloseModal}
                />
                <ModalViewServiceProps
                    isOpen={showModalViewService}
                    onClose={handleCloseViewModal}
                    service={selectedService}
                />
                <ModalUpdateServiceProps
                    isOpen={showModalUpdateService}
                    onClose={handleCloseUpdateModal}
                    service={selectedService}
                />
                <ModalDeleteServiceProps
                    isOpen={showModalDeleteService}
                    onClose={handleCloseDeleteModal}
                    serviceToDelete={selectedService}
                />
            </div>

        </div>
    );
};

export default ManageService;