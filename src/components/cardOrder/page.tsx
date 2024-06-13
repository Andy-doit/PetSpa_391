'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import OrderDetail from "../orderDetail/page";
import { PiDotsSixVerticalDuotone } from "react-icons/pi";
import { allBookingPaginationData } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllBookingPagination } from "@/lib/redux/slice/userSlice";
const orderService = [
    { name: "Dịch vụ tắm rửa", typePet: ' Chó', company: "Khoi Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Đã huỷ" },
    { name: "Dịch vụ tắm rửa", typePet: ' Chó', company: "An Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành Công" },
    { name: "Dịch vụ cắt tỉa lông", typePet: ' Chó', company: "Long Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Đã huỷ" },
    { name: "Dịch vụ khách sạn thú cưng", typePet: ' Chó', company: "Nam Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Đã huỷ" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: "15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
    { name: "Dịch vụ mát xa ", typePet: ' Chó', company: "Justin Spa", date: " 15/05/2024", time: "09:00 - 12:00", process: "Thành công" },
];

export default function CardOrder() {
    const [items, setItems] = useState<allBookingPaginationData[]>([]);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchAllBookingPagination());
            console.log(response)
            if (response) {
                setItems(response.payload);
            }
        }
        allService();
    }, [dispatch]);
    const getColor = (process: any) => {
        switch (process) {

            case "Thành Công":
            case "Thành công":
                return "success";
            case "Đã huỷ":
                return "warning";
            default:
                return "default";
        }
    }

    return (
        <Table aria-label="Example static collection table ">
            <TableHeader>
                <TableColumn>Tên dịch vụ</TableColumn>
                <TableColumn>Ngày đặt</TableColumn>
                <TableColumn>Khung giờ</TableColumn>
                <TableColumn>Loại thú cưng</TableColumn>
                <TableColumn>Spa</TableColumn>
                <TableColumn>Tình trạng</TableColumn>
                <TableColumn > <span className="sr-only">Action</span></TableColumn>
            </TableHeader>
            <TableBody>
                {orderService.map((service, index) => (
                    <TableRow key={index}>
                        <TableCell>{service.name}</TableCell>
                        <TableCell>{service.date}</TableCell>
                        <TableCell>{service.time}</TableCell>
                        <TableCell>{service.typePet}</TableCell>
                        <TableCell>{service.company}</TableCell>
                        <TableCell>
                            <Chip color={getColor(service.process)}>{service.process}</Chip>
                        </TableCell>
                        <TableCell>
                            <OrderDetail />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
