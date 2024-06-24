import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createServiceInput } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { createService } from "@/lib/redux/slice/shopSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from "react-icons/fa";

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
    petType: Yup.string()
        .required('Loại thú cưng là bắt buộc'),
    serviceDescription: Yup.string()
        .required('Mô tả dịch vụ là bắt buộc')
        .min(10, 'Mô tả dịch vụ phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả dịch vụ không được vượt quá 500 ký tự')
});

export default function ModalCreateService({ userId }: { userId: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formik = useFormik({
        initialValues: {
            serviceName: '',
            servicePrice: '',
            maxWeight: 99,
            minWeight: 0,
            serviceDescription: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            onClose();
        },
    });
    useEffect(() => {
        if (userId) {
            setServiceData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);

    const [serviceData, setServiceData] = useState<createServiceInput>({
        userId: userId,
        serviceCategoryId: 0,
        serviceName: '',
        serviceDescription: '',
        price: 0,
        minWeight: 0,
        maxWeight: 0,
        tags: '',

    });
    const dispatch = useAppDispatch();
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(createService({ serviceData })).unwrap();
                toast.success("Tạo dịch thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo dịch vụ. Vui lòng thử lại sau!");
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
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                            Thêm mới dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1 ">

                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('serviceName', e.target.value)}

                                        label="Tên dịch vụ"
                                    />
                                    {formik.touched.serviceName && formik.errors.serviceName ? (
                                        <div className="text-red-500">{formik.errors.serviceName}</div>
                                    ) : null}
                                </div>
                                <div className="col-span-1">
                                    <Select
                                        label="Category"
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('serviceCategoryId', e.target.value)}
                                    >
                                        <SelectItem key="1" value="1">
                                            Dịch vụ tắm rứa
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
                                <div className="col-span-1">
                                    <Select
                                        label="Category"
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('tags', e.target.value)}
                                    >
                                        <SelectItem key="tag1" value="tags1">
                                            Tag 1
                                        </SelectItem>
                                        <SelectItem key="tag2" value="tags2">
                                            Tag 2
                                        </SelectItem>
                                        <SelectItem key="tag3" value="tags3">
                                            Tag 2
                                        </SelectItem>


                                    </Select>


                                </div>
                                <div className="col-span-1">
                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('price', e.target.value)}
                                        label="Giá dịch vụ"
                                    />
                                    {formik.touched.servicePrice && formik.errors.servicePrice ? (
                                        <div className="text-red-500">{formik.errors.servicePrice}</div>
                                    ) : null}
                                </div>

                                <div className="col-span-1">
                                    <Select
                                        label="Loại thú cưng"
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('typePet', e.target.value)}
                                    >
                                        <SelectItem key="DOG" value="DOG">
                                            Chó
                                        </SelectItem>
                                        <SelectItem key="CAT" value="CAT">
                                            Mèo
                                        </SelectItem>
                                    </Select>


                                </div>
                                <div className="col-span-1">
                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('minWeight', e.target.value)}
                                        label="Cân nặng nhỏ nhất"
                                    />

                                </div>
                                <div className="col-span-1">
                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('maxWeight', e.target.value)}
                                        label="Cân nặng lớn nhất"
                                    />

                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <div className="w-full">
                                        <Textarea
                                            onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                                            placeholder="Mô tả dịch vụ"
                                            className="w-full"
                                        />
                                    </div>
                                    {formik.touched.serviceDescription && formik.errors.serviceDescription ? (
                                        <div className="text-red-500">{formik.errors.serviceDescription}</div>
                                    ) : null}
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter className="flex justify-end space-x-4 mt-8">
                            <Button
                                onClick={onClose}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                            >
                                Đóng
                            </Button>
                            <Button
                                color="primary"
                                onClick={handleCreate}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                            >
                                Tạo
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
                <ToastContainer />
            </Modal>
        </>
    );
}
