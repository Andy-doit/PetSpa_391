'use client'
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, Textarea, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@nextui-org/react";
import { allServicePaginationData } from "@/models/shopModel";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import ModalCreateService from "@/components/modalCreateService/page";
import ModalViewServiceProps from "@/components/modalViewDetailService/page";
import ModalUpdateServiceProps from "@/components/modalUpdateSerivce/page";
import ModalDeleteService from "@/components/modalDeleteService/page";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllServicePagination } from "@/lib/redux/slice/shopSlice";

const ManageService = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string>('');
    const [service, setService] = useState<allServicePaginationData[]>([]);

    const fetchServices = async () => {
        setLoading(true); // Start loading
        try {
            const response = await dispatch(fetchAllServicePagination());
            setService(response.payload || []);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, [dispatch]);

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
    }, []);


    return (
        <div className="lg:px-6 max-w-[95rem] w-full flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Danh sách dịch vụ</h3>
            <div className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    <Input
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Tìm kiếm dịch vụ"
                    />
                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <ModalCreateService userId={userId} refetchPets={fetchServices} />
                </div>
            </div>

            <div className="max-w-[95rem] mx-auto w-full">
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <Spinner />
                    </div>
                ) : (
                    service.length === 0 ? (
                        <div>Không có dịch vụ nào</div>
                    ) : (
                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>Tên dịch vụ</TableColumn>
                                <TableColumn>Giá dịch vụ</TableColumn>
                                <TableColumn>Tags</TableColumn>
                                <TableColumn>Nomination</TableColumn>
                                <TableColumn>Mô tả</TableColumn>
                                <TableColumn>Hành động</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {service.map((sp) => (
                                    <TableRow key={sp.id}>
                                        <TableCell>{sp.serviceName}</TableCell>
                                        <TableCell>{sp.price}</TableCell>
                                        <TableCell>{sp.tags}</TableCell>
                                        <TableCell>{sp.nomination}</TableCell>
                                        <TableCell>{sp.serviceDescription}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <ModalViewServiceProps params={sp.id} />
                                                </div>
                                                <div>
                                                    <ModalUpdateServiceProps params={sp} refetchPets={fetchServices} />
                                                </div>
                                                <div>
                                                    <ModalDeleteService params={sp.id} refetchPets={fetchServices} />
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )
                )}
            </div>
        </div>
    );
};

export default ManageService;
