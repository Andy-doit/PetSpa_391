'use client'
import { Button, TimeInput } from "@nextui-org/react";
import { FaClock } from "react-icons/fa";
import { Time } from "@internationalized/date";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
export default function TimeSlotChange() {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = () => {
        setIsEditing(false);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    };
    return (
        <div className="relative">
            <p className="text-black text-3xl font-semibold">
                Thời gian hoạt động
            </p>
            <div className='flex justify-end '>
                <div className=' absolute' >

                    {!isEditing && (
                        <Button onClick={handleEditClick} startContent={<BiEdit className=" h-4 w-4" />}>
                            Chỉnh sửa
                        </Button>
                    )}

                </div>
            </div>
            <div className="flex mb-5 mt-10 justify-around">
                <div className="w-1/2">
                    <p className="text-orange-500    text-xl  font-medium">
                        Slot 1
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            defaultValue={new Time(12, 45)}
                            isRequired
                            label="Kết thúc"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-orange-500 text-xl  font-medium">
                        Slot 2
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            defaultValue={new Time(12, 45)}
                            isRequired
                            label="Kết thúc"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="w-1/2">
                    <p className="text-orange-500 text-xl  font-medium">
                        Slot 3
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            defaultValue={new Time(11, 45)}
                            isRequired
                            label="Kết thúc"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-orange-500 text-xl  font-medium">
                        Slot 4
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
                            isDisabled={!isEditing}
                            className="w-[300px]"
                            defaultValue={new Time(12, 45)}
                            isRequired
                            label="Kết thúc"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />

                    </div>
                </div>

            </div>
            {isEditing && (
                <div className="flex mt-10">
                    <Button color="success" onClick={handleSaveClick}>Lưu</Button>
                    <Button className="ml-5" onClick={handleCancelClick}>Huỷ</Button>
                </div>
            )}
        </div>
    )
}