'use client'
import { Button, Card, Checkbox, Image, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const gender = [

]
export default function CreatePet() {
    const [selectedGender, setSelectedGender] = useState<string>('');
    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);

    };
    return (
        <div className="container text-center flex justify-center">
            <Card className="w-[1000px] px-10 pb-10 mb-5 mt-5">
                <p className="text-4xl text-orange-600 uppercase  mt-5 font-medium"> Tạo thú cưng</p>
                <div className="mt-2 flex justify-center">
                    <div className="px-4" data-title="Chào mừng bạn" >
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
                            >
                                Tạo mới
                            </Button>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}