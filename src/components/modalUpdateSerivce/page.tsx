
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Input, Textarea, Tooltip } from "@nextui-org/react";
import { allServicePaginationData, createServiceInput } from "@/models/shopModel";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { MdChangeCircle } from "react-icons/md";
import { fetchAllServicePagination, updateService } from "@/lib/redux/slice/shopSlice";
import { useAppDispatch } from '@/lib/redux/store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";


export default function ModalUpdateServiceProps({ params, refetchPets }: { params: allServicePaginationData, refetchPets: () => void }) {
    const [userId, setUserId] = useState<string>('');

    const dispatch = useAppDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
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
    const [service, setService] = useState<allServicePaginationData[]>([]);
    useEffect(() => {
        fetchPets();
    }, [dispatch]);
    const fetchPets = async () => {
        const response = await dispatch(fetchAllServicePagination());
        setService(response.payload || []);
    };

    useEffect(() => {
        if (userId) {
            setServiceData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    console.log(userId);
    const [serviceData, setServiceData] = useState<createServiceInput>({
        id: params.id,
        userId: userId,
        serviceName: params.serviceName,
        serviceCategoryId: params.serviceCategoryId,
        price: params.price,
        minWeight: params.minWeight,
        maxWeight: params.maxWeight,
        serviceDescription: '',
        tags: params.tags,

    });
    // console.log(serviceData);
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
                    onClose: () => {
                        onClose();
                        refetchPets();
                    },
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
            <Tooltip content="Chỉnh sửa dịch vụ">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={onOpen}>
                    <MdChangeCircle size={20} color="green" />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className='text-3xl flex justify-center font-bold bg-gray-300 text-orange-600'>
                            Xem chi tiết dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    <Input

                                        label="Giá dịch vụ"
                                        value={serviceData.price.toString()}
                                        onChange={(e) => handleInputChange('price', e.target.value)}
                                        type="price"
                                        className="w-full"
                                    />

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
                                            value={serviceData.serviceDescription}
                                            onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                                            className="w-full"

                                        />
                                    </div>

                                </div>
                            </div>

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
                <ToastContainer />
            </Modal>
        </>
    );
}
