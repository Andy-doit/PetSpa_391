'use client'
import { Button, Card, Checkbox, Image, Input } from "@nextui-org/react";
import { useState } from "react";

export default function CreatePet() {
    const [selectedGender, setSelectedGender] = useState<string>('');
    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);

    };
    return (
        <div className="container text-center">
            <p className="text-4xl font-medium"> Tạo thú cưng</p>
            <div className="mt-2 flex justify-center">
                <div className="w-1/2 px-4" data-title="Chào mừng bạn" >
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
                    <div className='mb-2'>
                        <div className=" flex  justify-between">
                            <div>
                                <p className="text-1xl font-medium mb-2">Tên thú cưng</p>
                                <div className="w-full">
                                    <Input
                                        className="w-[300px]"
                                        type="Petname"
                                        label="Tên thú cưng"
                                    />


                                </div>
                            </div>
                            <div>
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
                            <div>
                                <p className="text-1xl font-medium mb-2">Tuổi thú cưng</p>
                                <div className="w-full">
                                    <Input
                                        className="w-[300px]"
                                        type="Petage"
                                        label="Tuổi"
                                    />


                                </div>
                            </div>
                            <div className="flex  justify-center">
                                <p className="text-1xl font-medium mb-2">Giới tính</p>
                                <div className="flex justify-center  ">
                                    <Checkbox
                                        checked={selectedGender === "Male"}

                                        disabled={selectedGender === "Female"}
                                    >
                                        Đực
                                    </Checkbox>
                                    <Checkbox
                                        checked={selectedGender === "Female"}
                                        disabled={selectedGender === "Male"}
                                    >
                                        Cái
                                    </Checkbox>

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
        </div>
    )
}