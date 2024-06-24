'use client'
import React, { use, useEffect, useState } from 'react';
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
    Textarea,
} from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { createPetInput } from '@/models/userModels';
import { createPet } from '@/lib/redux/slice/userSlice';
import { FaPlus } from 'react-icons/fa';
import { FcPlus } from 'react-icons/fc';

export default function CreatePet({ userId }: { userId: string }) {
    console.log(userId);
    const [image, setImage] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (userId) {
            setPetData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    const [petData, setPetData] = useState<createPetInput>({
        id: '',
        userId: userId,
        petName: '',
        petType: '',
        petAge: 0,
        petGender: '',
        petWeight: 0,
        petDescription: '',
        petPhoto: '',
        petNote: '',

    });
    const dispatch = useAppDispatch();
    // const handleUploadImage = (event) => {

    // }
    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setPetData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(createPet({ petData })).unwrap();
                toast.success("Tạo thú cưng thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo thú cưng. Vui lòng thử lại sau!");
        }
    };

    return (
        <div>
            <Button
                startContent={<FaPlus className='w-5 x' />}
                onPress={onOpen} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg ">
                Tạo mới thú cưng
            </Button>

            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >Tạo mới thú cưng</ModalHeader>
                    <ModalBody
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/32/9e/2f/329e2f6a54fdb1f53f4126991fcc6143.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >
                        <div className="mt-2 flex">
                            <div className="">
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            type="Petname"
                                            onChange={(e) => handleInputChange('petName', e.target.value)}
                                            label="Tên thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Loại thú cưng" className="w-[250px]"
                                            onChange={(e) => handleInputChange('petType', e.target.value)}
                                        >
                                            <SelectItem key="DOG">Chó</SelectItem>
                                            <SelectItem key="CAT">Mèo</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petAge', e.target.value)}
                                            type="Petage"
                                            label="Tuổi thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Giới tính"
                                            onChange={(e) => handleInputChange('petGender', e.target.value)}
                                            className="w-[250px]">
                                            <SelectItem key="Male">Đực</SelectItem>
                                            <SelectItem key="Female">Cái</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-full mr-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petWeight', e.target.value)}
                                            type="Petweight"
                                            label="Cân nặng"
                                            className="w-full"
                                        />

                                    </div>
                                    <div className="w-full ml-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petDescription', e.target.value)}
                                            type="petDescription"
                                            label="Mô tả"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <label htmlFor="upload-file" className="cursor-pointer flex items-center space-x-2">
                                        <FcPlus className="text-xl" />
                                        <span className="text-gray-600">Upload file</span>
                                    </label>
                                    <input
                                        id="upload-file"
                                        type="file"
                                        // onChange={handleUploadImage}
                                        hidden
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex mb-4">
                                    <label className='' htmlFor='Uploadfile' >
                                        Preview image
                                        <Image
                                            width={300}
                                            alt="NextUI hero Image"
                                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                        />
                                    </label>

                                </div>


                                <div className="flex mb-4">
                                    <div className="w-full">
                                        <Textarea
                                            onChange={(e) => handleInputChange('petNote', e.target.value)}
                                            type="petNote"
                                            label="Ghi chú"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full justify-end">
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
                                    'Tạo mới'
                                )}
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};


