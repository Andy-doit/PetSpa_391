'use client'
import { Button, TimeInput } from "@nextui-org/react";
import { FaClock } from "react-icons/fa";
import { Time } from "@internationalized/date";
import { BiEdit } from "react-icons/bi";
export default function TimeSlotChange() {
    return (
        <div className="relative">
            <p className="text-black text-3xl font-semibold">
                Thời gian hoạt động
            </p>
            <div className='flex justify-end '>
                <div className=' absolute' >

                    <Button radius="sm" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" startContent={<BiEdit className=" h-4 w-4" />}>
                        Chỉnh sửa
                    </Button>

                </div>
            </div>
            <div className="flex mb-5 mt-10 justify-around">
                <div className="w-1/2">
                    <p className="text-black text-xl  font-medium">
                        Slot 1
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
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
                    <p className="text-black text-xl  font-medium">
                        Slot 2
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
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
                    <p className="text-black text-xl  font-medium">
                        Slot 3
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
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
                    <p className="text-black text-xl  font-medium">
                        Slot 4
                    </p>
                    <div className="flex justify-around">
                        <TimeInput
                            className="w-[300px]"
                            isRequired
                            defaultValue={new Time(11, 45)}
                            label="Bắt đầu"
                            endContent={(
                                <FaClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            )}
                        />
                        <TimeInput
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
        </div>
    )
}