import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ModalCreateServiceProps {
    isOpen: boolean;
    onClose: () => void;
}

const validationSchema = Yup.object().shape({
    serviceName: Yup.string()
        .required('Tên dịch vụ là bắt buộc')
        .min(3, 'Tên dịch vụ phải có ít nhất 3 ký tự')
        .max(50, 'Tên dịch vụ không được vượt quá 50 ký tự'),
    servicePrice: Yup.number()
        .required('Giá dịch vụ là bắt buộc')
        .min(1, 'Giá dịch vụ phải lớn hơn 0'),
    petType: Yup.string()
        .required('Loại thú cưng là bắt buộc'),
    serviceDescription: Yup.string()
        .required('Mô tả dịch vụ là bắt buộc')
        .min(10, 'Mô tả dịch vụ phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả dịch vụ không được vượt quá 500 ký tự')
});

export default function ModalCreateService({ isOpen, onClose }: ModalCreateServiceProps) {
    const formik = useFormik({
        initialValues: {
            serviceName: '',
            servicePrice: '',
            petType: '',
            serviceDescription: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission
            console.log(values);
            onClose();
        },
    });

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                            Thêm mới dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="form-label text-lg font-semibold">Tên dịch vụ</label>
                                    <input
                                        type="text"
                                        name="serviceName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.serviceName}
                                        className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {formik.touched.serviceName && formik.errors.serviceName ? (
                                        <div className="text-red-500">{formik.errors.serviceName}</div>
                                    ) : null}
                                </div>
                                <div className="col-span-1">
                                    <label className="form-label text-lg font-semibold">Giá dịch vụ</label>
                                    <input
                                        type="number"
                                        name="servicePrice"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.servicePrice}
                                        className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {formik.touched.servicePrice && formik.errors.servicePrice ? (
                                        <div className="text-red-500">{formik.errors.servicePrice}</div>
                                    ) : null}
                                </div>
                                <div className="col-span-1">
                                    <label className="form-label text-lg font-semibold">Loại thú cưng</label>
                                    <select
                                        name="petType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.petType}
                                        className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Chọn loại thú cưng</option>
                                        <option value="dog">Chó</option>
                                        <option value="cat">Mèo</option>
                                    </select>
                                    {formik.touched.petType && formik.errors.petType ? (
                                        <div className="text-red-500">{formik.errors.petType}</div>
                                    ) : null}
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label className="form-label text-lg font-semibold">Mô tả dịch vụ</label>
                                    <textarea
                                        name="serviceDescription"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.serviceDescription}
                                        className="form-control border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
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
                                onClick={onClose}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                            >
                                Lưu
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}
