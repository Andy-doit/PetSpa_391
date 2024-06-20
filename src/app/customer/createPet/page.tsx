import React, { useState } from 'react';
import {
    Button,
    Card,
    Checkbox,
    Image,
    Input,
    Select,
    SelectItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePet = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            // Gửi dữ liệu lên server để tạo thú cưng mới
            // Nếu thành công, hiển thị thông báo và reset form
            toast.success('Tạo thú cưng thành công!');
            setIsLoading(false);
            onClose(); // Đóng modal sau khi hoàn thành
        } catch (error) {
            toast.error('Tạo thú cưng không thành công. Vui lòng thử lại.');
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button onPress={onOpen} color="primary">
                Tạo mới thú cưng
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader>Tạo mới thú cưng</ModalHeader>
                    <ModalBody>
                        <div className="mt-2 flex justify-center">
                            <div className="px-4">
                                <div className="mb-2 flex justify-center">
                                    <p className="text-2xl font-medium">Loại thú cưng</p>
                                </div>

                                <div className="flex mb-4 justify-center">
                                    <div className="mr-4">
                                        <Card radius="lg" className="border-none">
                                            <Image
                                                className="object-cover"
                                                height={120}
                                                src="https://i.pinimg.com/564x/a1/5d/f9/a15df9417030a5dd3c9806e2371123b0.jpg"
                                                width={120}
                                            />
                                            <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                                <Checkbox
                                                    color="danger"
                                                    radius="full"
                                                    size="lg"
                                                    onChange={() => handleGenderChange('Đực')}
                                                    checked={selectedGender === 'Đực'}
                                                >
                                                    Chó
                                                </Checkbox>
                                            </div>
                                        </Card>
                                    </div>
                                    <div className="ml-4">
                                        <Card radius="lg" className="border-none">
                                            <Image
                                                className="object-cover"
                                                height={120}
                                                src="https://i.pinimg.com/564x/65/e3/bf/65e3bff241ef51e93cf4ddb514723101.jpg"
                                                width={120}
                                            />
                                            <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                                <Checkbox
                                                    color="danger"
                                                    radius="full"
                                                    size="lg"
                                                    onChange={() => handleGenderChange('Cái')}
                                                    checked={selectedGender === 'Cái'}
                                                >
                                                    Mèo
                                                </Checkbox>
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    <div className="w-full mr-4">
                                        <Input
                                            type="Petname"
                                            label="Tên thú cưng"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-full ml-4">
                                        <Input
                                            type="Petweight"
                                            label="Cân nặng"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    <div className="w-full mr-4">
                                        <Input
                                            type="Petage"
                                            label="Tuổi thú cưng"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="w-full ml-4">
                                        <Select label="Giới tính" className="w-full">
                                            <SelectItem key="male">Đực</SelectItem>
                                            <SelectItem key="female">Cái</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="mt-4 flex justify-end">
                            <Button
                                type="submit"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                disabled={isLoading}
                                onPress={handleSubmit}
                            >
                                {isLoading ? (
                                    <ClipLoader size={20} color="#ffffff" />
                                ) : (
                                    'Tạo mới'
                                )}
                            </Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default CreatePet;
