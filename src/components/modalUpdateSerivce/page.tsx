import { useEffect, useState, useCallback } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Input, Textarea, Tooltip } from "@nextui-org/react";
import { allServicePaginationData, createServiceInput } from "@/models/shopModel";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { MdChangeCircle } from "react-icons/md";
import { fetchAllServicePagination, updateService } from "@/lib/redux/slice/shopSlice";
import { useAppDispatch } from '@/lib/redux/store';
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";

export default function ModalUpdateServiceProps({ params, refetchPets }: { params: allServicePaginationData, refetchPets: () => void }) {
    const [userId, setUserId] = useState<string>('');
    const [service, setService] = useState<allServicePaginationData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useAppDispatch();

    const fetchUidAndServiceData = useCallback(async () => {
        try {
            const { uid } = await getAccessAndRefreshCookie();
            if (uid) {
                setUserId(uid);
                const response = await dispatch(fetchAllServicePagination());
                setService(response.payload || []);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchUidAndServiceData();
    }, [fetchUidAndServiceData]);

    const [serviceData, setServiceData] = useState<createServiceInput>({
        id: params.id,
        userId: userId,
        serviceName: params.serviceName,
        serviceCategoryId: params.categoryId,
        price: params.price,
        minWeight: params.minWeight,
        maxWeight: params.maxWeight,
        serviceDescription: params.serviceDescription,
        tags: params.tags,
    });
    // console.log(serviceData)
    useEffect(() => {
        if (userId) {
            setServiceData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setServiceData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    const handleCreate = async () => {
        try {
            setIsLoading(true);
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
            console.error('Lỗi cập nhật:', error);
            toast.error("Đã xảy ra lỗi khi cập nhật dịch vụ. Vui lòng thử lại sau!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Tooltip content="Chỉnh sửa dịch vụ">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={onOpen}>
                    <MdChangeCircle size={20} color="green" />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl" backdrop="blur">
                <ModalContent>
                    <>
                        <ModalHeader
                            className='text-3xl flex justify-center font-bold uppercase text-white'
                            style={{
                                backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",
                            }}
                        >Chỉnh sửa dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            <div className="mt-2 flex">
                                <div >
                                    <div className="flex w-full mb-4">
                                        <div className="mr-4">
                                            <Input
                                                className="w-[300px]"
                                                label="Tên dịch vụ"
                                                type="text"
                                                value={serviceData.serviceName}
                                                onChange={(e) => handleInputChange('serviceName', e.target.value)}
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <Select
                                                label="Category"
                                                className="w-[300px]"
                                                defaultSelectedKeys={[serviceData.serviceCategoryId]}
                                                onChange={(e) => handleInputChange('serviceCategoryId', e.target.value)}
                                            >
                                                <SelectItem key="1" value="1">Dịch vụ tắm rửa</SelectItem>
                                                <SelectItem key="2" value="2">Dịch vụ làm đẹp</SelectItem>
                                                <SelectItem key="3" value="3">Dịch vụ mát xa</SelectItem>
                                                <SelectItem key="4" value="4">Dịch vụ mát xa đặc biệt</SelectItem>
                                                <SelectItem key="5" value="5">Khách sạn thú cưng</SelectItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="flex w-full mb-4">
                                        <div className="mr-4">
                                            <Input
                                                value={serviceData.maxWeight.toString()}
                                                onChange={(e) => handleInputChange('maxWeight', e.target.value)}
                                                className="w-[300px]"
                                                label="Cân nặng lớn nhất"
                                                type="number"
                                            />

                                        </div>
                                        <div className="ml-4">
                                            <Input
                                                value={serviceData.minWeight.toString()}
                                                onChange={(e) => handleInputChange('minWeight', e.target.value)}
                                                className="w-[300px]"
                                                label="Cân nặng nhỏ nhất"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Input
                                            label="Giá dịch vụ"
                                            value={serviceData.price.toString()}
                                            onChange={(e) => handleInputChange('price', e.target.value)}
                                            type="number"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Textarea
                                            placeholder="Mô tả dịch vụ"
                                            value={serviceData.serviceDescription}
                                            onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="flex w-full justify-around">
                                        <Button className="mr-3 w-full" onPress={onClose}>Huỷ</Button>
                                        <Button
                                            type="submit"
                                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                            disabled={isLoading}
                                            onPress={handleCreate}
                                        >
                                            {isLoading ? <ClipLoader size={20} color="#ffffff" /> : 'Cập nhật'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>

                    </>
                </ModalContent>
            </Modal>
        </>
    );
}
