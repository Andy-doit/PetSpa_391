import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, Textarea, useDisclosure, Spinner } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { allServicePaginationData, createServiceInput } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { createService, fetchAllServicePagination } from "@/lib/redux/slice/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const validationSchema = Yup.object().shape({
    serviceName: Yup.string()
        .required('Tên dịch vụ là bắt buộc')
        .min(3, 'Tên dịch vụ phải có ít nhất 3 ký tự')
        .max(50, 'Tên dịch vụ không được vượt quá 50 ký tự'),
    servicePrice: Yup.number()
        .required('Giá dịch vụ là bắt buộc')
        .min(1, 'Giá dịch vụ phải lớn hơn 0'),
    minWeight: Yup.number()
        .required('Cân nặng nhỏ nhất là bắt buộc phải là số')
        .min(1, 'Cân nặng vụ phải lớn hơn 0'),
    maxWeight: Yup.number()
        .required('Cân nặng lớn nhất là bắt buộc phải là số')
        .min(1, 'Cân nặng phải lớn hơn 0')
        .max(500, 'Mô tả dịch vụ không được vượt quá 500 ký tự'),
    serviceDescription: Yup.string()
        .required('Mô tả dịch vụ là bắt buộc')
        .min(10, 'Mô tả dịch vụ phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả dịch vụ không được vượt quá 500 ký tự')
});

export default function ModalCreateService({ userId, refetchPets }: { userId: string, refetchPets: () => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [service, setService] = useState<allServicePaginationData[]>([]);
    useEffect(() => {
        if (userId) {
            setServiceData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);

    useEffect(() => {
        fetchPets();
    }, [dispatch]);
    const fetchPets = async () => {
        const response = await dispatch(fetchAllServicePagination());
        setService(response.payload || []);
    };
    const [serviceData, setServiceData] = useState<createServiceInput>({
        userId: userId,
        id: '',
        serviceCategoryId: 0,
        serviceName: '',
        serviceDescription: '',
        price: 0,
        minWeight: 0,
        maxWeight: 0,
        tags: 'tags1',

    });

    const handleCreate = async () => {
        setIsLoading(true);
        try {
            if (userId) {
                await dispatch(createService({ serviceData })).unwrap();
                toast.success("Tạo dịch thành công!", {
                    onClose: () => {
                        onClose();
                        refetchPets();
                    },
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo dịch vụ. Vui lòng thử lại sau!");
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setServiceData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    return (
        <>
            <Button
                startContent={<FaPlus className='w-5 x' />}
                onPress={onOpen}
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
                Tạo mới dịch vụ
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl" backdrop="blur">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                        }}
                    >Tạo mới dịch vụ
                    </ModalHeader>
                    <ModalBody className="space-y-6">
                        <div className="mt-2 flex">
                            <div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4 ">

                                        <Input
                                            className="w-[300px]"
                                            onChange={(e) => handleInputChange('serviceName', e.target.value)}

                                            label="Tên dịch vụ"
                                        />

                                    </div>
                                    <div className="ml-4">
                                        <Select
                                            label="Category"
                                            className="w-[300px]"
                                            onChange={(e) => handleInputChange('serviceCategoryId', e.target.value)}
                                        >
                                            <SelectItem key="1" value="1">
                                                Dịch vụ tắm rửa
                                            </SelectItem>
                                            <SelectItem key="2" value="2">
                                                Dịch vụ làm đẹp
                                            </SelectItem>
                                            <SelectItem key="3" value="3">
                                                Dịch vụ mát xa
                                            </SelectItem>
                                            <SelectItem key="4" value="4">
                                                Dịch vụ mát xa đặc biệt
                                            </SelectItem>
                                            <SelectItem key="5" value="5">
                                                Khách sạn thú cưng
                                            </SelectItem>

                                        </Select>

                                    </div>
                                </div>

                                <div className="flex w-full mb-4">

                                    <div >
                                        <Input
                                            className="w-[300px]"
                                            onChange={(e) => handleInputChange('price', e.target.value)}
                                            label="Giá dịch vụ"
                                        />

                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            className="w-[300px]"
                                            onChange={(e) => handleInputChange('minWeight', e.target.value)}
                                            label="Cân nặng nhỏ nhất"
                                        />

                                    </div>
                                    <div className="ml-4">
                                        <Input
                                            className="w-[300px]"
                                            onChange={(e) => handleInputChange('maxWeight', e.target.value)}
                                            label="Cân nặng lớn nhất"
                                        />

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Textarea
                                        onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                                        placeholder="Mô tả dịch vụ"
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex justify-around">
                                    <Button
                                        onClick={onClose}
                                        className="w-[200px]"
                                    >
                                        Đóng
                                    </Button>
                                    <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-[200px]" onPress={handleCreate} disabled={isLoading}>
                                        {isLoading ? <Spinner color="default" /> : "Tạo mới"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
                <ToastContainer />
            </Modal>
        </>
    );
}
