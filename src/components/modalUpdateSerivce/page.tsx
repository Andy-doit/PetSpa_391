
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Input, Textarea, Tooltip } from "@nextui-org/react";
import { allServicePaginationData, createServiceInput } from "@/models/shopModel";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { MdChangeCircle } from "react-icons/md";
import { updateService } from "@/lib/redux/slice/shopSlice";
import { useAppDispatch } from '@/lib/redux/store';
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";


export default function ModalUpdateServiceProps({ params }: { params: allServicePaginationData }) {
    const [service, setService] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (userId) {
            setServiceData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    const [serviceData, setServiceData] = useState<createServiceInput>({
        userId: params.userId,
        serviceName: params.serviceName,
        serviceCategoryId: params.serviceCategoryId,
        price: params.price,
        minWeight: params.minWeight,
        maxWeight: params.maxWeight,
        serviceDescription: '',
        tags: params.tags,

    });
    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setServiceData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(updateService({ serviceData })).unwrap();
                toast.success("Cập nhật dịch vụ thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Lỗi  cập nhật:', error);
            toast.error("Đã xảy ra lỗi khi cập nhật dịch vụ. Vui lòng thử lại sau!");
        }
    };


    return (
        <>
            <Tooltip content="Chỉnh sửa thú cưng">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={onOpen}>
                    <MdChangeCircle size={20} color="green" />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                            Xem chi tiết dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            {service ? (
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 ">

                                        <Input
                                            className="w-full"

                                            label="Tên dịch vụ"
                                            type="serviceName"
                                            value={serviceData.serviceName}
                                            onChange={(e) => handleInputChange('serviceName', e.target.value)}


                                        />

                                    </div>
                                    <div className="col-span-1">
                                        <Select
                                            label="Category"
                                            className="w-full"
                                            defaultSelectedKeys={[serviceData.serviceCategoryId]}
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
                                            className="w-full"
                                            defaultSelectedKeys={[serviceData.serviceCategoryId]}
                                            onChange={(e) => handleInputChange('serviceCategoryId', e.target.value)}

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

                                            label="Giá dịch vụ"
                                            value={serviceData.price.toString()}
                                            onChange={(e) => handleInputChange('price', e.target.value)}
                                            type="price"
                                            className="w-full"
                                        />

                                    </div>

                                    <div className="col-span-1">
                                        <Select
                                            label="Loại thú cưng"

                                            // onChange={(e) => handleInputChange('typePet', e.target.value)}
                                            className="w-full"

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
                                            value={serviceData.minWeight.toString()}
                                            onChange={(e) => handleInputChange('minWeight', e.target.value)}
                                            className="w-full"

                                            label="Cân nặng nhỏ nhất"
                                        />

                                    </div>
                                    <div className="col-span-1">
                                        <Input
                                            value={serviceData.maxWeight.toString()}
                                            onChange={(e) => handleInputChange('maxWeight', e.target.value)}
                                            className="w-full"

                                            label="Cân nặng lớn nhất"
                                        />

                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="w-full">
                                            <Textarea

                                                placeholder="Mô tả dịch vụ"
                                                value={serviceData.serviceDescription.toString()}
                                                onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                                                className="w-full"

                                            />
                                        </div>

                                    </div>
                                </form>
                            ) : (
                                <p>Không có thông tin dịch vụ.</p>
                            )}
                        </ModalBody>
                        <ModalFooter className="flex justify-end space-x-4 mt-8">
                            <div className=" flex w-full justify-end">
                                <Button
                                    className=" mr-3 w-full"
                                    onPress={onClose}
                                >
                                    Huỷ
                                </Button>

                                <Button
                                    type="submit"
                                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                    disabled={isLoading}
                                    onPress={handleCreate}
                                >
                                    {isLoading ? (
                                        <ClipLoader size={20} color="#ffffff" />
                                    ) : (
                                        'Cập nhật'
                                    )}
                                </Button>
                            </div>
                        </ModalFooter>
                    </>
                </ModalContent>

            </Modal>
        </>
    );
}
