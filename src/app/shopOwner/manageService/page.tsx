'use client'
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import ModalCreateService from "@/components/modalCreateService/page";
import ModalViewServiceProps from "@/components/modalViewDetailService/page";
import ModalUpdateServiceProps from "@/components/modalUpdateSerivce/page";
import ModalDeleteServiceProps from "@/components/modalDeleteService/page"
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, Textarea, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { allServicePaginationData } from "@/models/shopModel";
import ModalDeleteService from "@/components/modalDeleteService/page";
const ManageService = () => {
    const [userId, setUserId] = useState<string>('');
    const [service, setService] = useState<allServicePaginationData[]>([]);
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




    return (
        <div className=" lg:px-6 max-w-[95rem]  w-full flex flex-col gap-4">
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
                    <ModalCreateService userId={userId} />
                </div>

            </div>

            <div className="max-w-[95rem] mx-auto w-full">
                {service.length === 0 ? (
                    <div>Không có dịch vụ nào</div>

                ) : (
                    <Table aria-label="Example static collection table">
                        <TableHeader>

                            <TableColumn>Tên dịch vụ</TableColumn>
                            <TableColumn>Giá dịch vụ</TableColumn>
                            <TableColumn>Loại thú cưng</TableColumn>
                            <TableColumn>Mô tả</TableColumn>
                            <TableColumn>Hành động</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {service.map((sp) => (
                                <TableRow key={sp.userId}>
                                    <TableCell>{sp.serviceName}</TableCell>
                                    <TableCell>{sp.price}</TableCell>
                                    <TableCell>{sp.typePet}</TableCell>
                                    <TableCell>{sp.serviceDescription}</TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-4 ">
                                            {/* <div>
                                                <AccountDetail params={sp.id} />
                                            </div>
                                            <div>
                                                <AccountDetail params={sp.id} />
                                            </div>
                                            <div>
                                                <DeleteShop params={sp.id} />
                                            </div> */}
                                            <div>
                                                <ModalViewServiceProps params={sp.userId} />
                                            </div>
                                            <div>
                                                <ModalUpdateServiceProps params={sp} />
                                            </div>

                                            <div>
                                                <ModalDeleteService params={sp.userId} />
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>

                )}

            </div>

        </div>
    );
};

export default ManageService;