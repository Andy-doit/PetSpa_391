'use client'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, TimeInput } from "@nextui-org/react";
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
            <p className="text-black text-3xl font-semibold mb-2">
                Thời gian hoạt động
            </p>
            <Table aria-label="Example static collection table ">
                <TableHeader>
                    <TableColumn>STT</TableColumn>
                    <TableColumn>Khung giờ</TableColumn>
                    <TableColumn>Thời gian bắt đầu</TableColumn>
                    <TableColumn>Thời gian kết thúc</TableColumn>
                    <TableColumn>Hành động</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key={1}>
                        <TableCell>Buddy</TableCell>
                        <TableCell>Chó</TableCell>
                        <TableCell>Đực</TableCell>
                        <TableCell>
                            Đã có lịch đặt
                        </TableCell>
                        <TableCell>
                            aa
                        </TableCell>
                    </TableRow>
                    <TableRow key={2}>
                        <TableCell>Whiskers</TableCell>
                        <TableCell>Mèo</TableCell>
                        <TableCell>Cái</TableCell>
                        <TableCell>
                            sss
                        </TableCell>
                        <TableCell>
                            xxx
                        </TableCell>
                    </TableRow>
                    {/* Add more static pet rows as needed */}
                </TableBody>
            </Table>
        </div>
    )
}