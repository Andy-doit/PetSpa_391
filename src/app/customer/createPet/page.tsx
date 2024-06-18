'use client'
import { Button, Card, Checkbox, Image, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const gender = [

]
export default function CreatePet() {
    const [selectedGender, setSelectedGender] = useState<string>('');
    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);

    };
    const initialValues = {
        petType: '',
        petName: '',
        petWeight: '',
        petAge: '',
        petGender: '',
    };
    const validationSchema = Yup.object().shape({
        petType: Yup.string().required('Loại thú cưng là bắt buộc'),
        petName: Yup.string()
            .required('Tên thú cưng là bắt buộc')
            .min(2, 'Tên thú cưng phải có ít nhất 2 ký tự')
            .max(50, 'Tên thú cưng không được vượt quá 50 ký tự'),
        petWeight: Yup.number()
            .required('Cân nặng là bắt buộc')
            .min(0.1, 'Cân nặng phải lớn hơn 0.1')
            .max(100, 'Cân nặng không được vượt quá 100'),
        petAge: Yup.number()
            .required('Tuổi thú cưng là bắt buộc')
            .min(0.1, 'Tuổi thú cưng phải lớn hơn 0.1')
            .max(30, 'Tuổi thú cưng không được vượt quá 30'),
        petGender: Yup.string().required('Giới tính là bắt buộc'),
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            // Gửi dữ liệu lên server để tạo thú cưng mới
            // Nếu thành công, hiển thị thông báo và reset form
            toast.success("Tạo thú cưng thành công!");
            // resetForm();
            setIsLoading(false);
        } catch (error) {
            toast.error('Tạo thú cưng không thành công. Vui lòng thử lại.');
            setIsLoading(false);
        }
    };
    return (
        <div className="container text-center flex justify-center">
            <Card className="w-[1000px] px-10 pb-10 mb-5 mt-5">
                <p className="text-4xl text-orange-600 uppercase  mt-5 font-medium"> Tạo thú cưng</p>
                <div className="mt-2 flex justify-center">
                    <div className="px-4" data-title="Chào mừng bạn" >
                        {/* <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        > */}

                        <div className='mb-2'>
                            <p className="text-1xl font-medium">Loại thú cưng</p>
                        </div>
                        <div className="flex mb-2 justify-center" >

                            <div className="mr-2">
                                <Card
                                    radius="lg"
                                    className="border-none"

                                >
                                    <Image
                                        className="object-cover"
                                        height={100}
                                        src="https://i.pinimg.com/564x/a1/5d/f9/a15df9417030a5dd3c9806e2371123b0.jpg"
                                        width={100}
                                    />
                                    <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                        <Checkbox

                                            color="danger"
                                            radius="full"
                                            size="lg"
                                        >
                                            Chó
                                        </Checkbox>
                                    </div>
                                </Card>
                            </div>
                            <div className="ml-2">
                                <Card
                                    radius="lg"
                                    className="border-none"
                                >
                                    <Image

                                        className="object-cover"
                                        height={100}
                                        src="https://i.pinimg.com/564x/65/e3/bf/65e3bff241ef51e93cf4ddb514723101.jpg"
                                        width={100}
                                    />
                                    <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                        <Checkbox

                                            color="danger"
                                            radius="full"
                                            size="lg"
                                        > Mèo
                                        </Checkbox>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className='mb-2 '>
                            <div className=" flex  justify-between">
                                <div className="mr-2">
                                    <p className="text-1xl font-medium mb-2">Tên thú cưng</p>
                                    <div className="w-full">
                                        <Input
                                            className="w-[300px]"
                                            type="Petname"
                                            label="Tên thú cưng"
                                        />


                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-1xl font-medium mb-2">Cân nặng</p>
                                    <div className="w-full">
                                        <Input
                                            className="w-[300px]"
                                            type="Petweight"
                                            label="Cân nặng"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='mb-2'>
                            <div className=" flex  justify-between">
                                <div className="mr-2">
                                    <p className="text-1xl font-medium mb-2">Tuổi thú cưng</p>
                                    <div className="w-full">
                                        <Input
                                            className="w-[300px]"
                                            type="Petage"
                                            label="Tuổi"
                                        />


                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-1xl font-medium mb-2">Giới tính</p>
                                    <div className="w-full">
                                        <Select
                                            label="Giới tính"
                                            className="w-[300px]"
                                        >
                                            <SelectItem key="male">
                                                Đực
                                            </SelectItem>
                                            <SelectItem key="female">
                                                Cái
                                            </SelectItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-11'>
                            <Button
                                type="submit"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <ClipLoader size={20} color="#ffffff" />
                                ) : (
                                    'Tạo mới'
                                )}
                            </Button>
                        </div>
                        {/* </Formik> */}
                    </div>

                </div>
            </Card>
            <ToastContainer />
        </div>
    )
}