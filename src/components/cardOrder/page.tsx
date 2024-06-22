'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import OrderDetail from "../orderDetail/page";
import { allBookingPaginationData } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllBookingPagination } from "@/lib/redux/slice/userSlice";


export default function CardOrder() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<allBookingPaginationData[]>([]);
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchAllBookingPagination());
            setItems(response.payload);

        }
        allService();
    }, [dispatch]);
    // console.log(items)
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
        <>
            {items.length === 0 ? (
                <div>Không có lịch đặt hàng nào</div>

            ) : (
                <Table aria-label="Example static collection table ">
                    <TableHeader>
                        <TableColumn>Tên dịch vụ</TableColumn>
                        <TableColumn>Ngày đặt</TableColumn>
                        <TableColumn>Khung giờ</TableColumn>
                        <TableColumn>Tên thú cưng</TableColumn>
                        <TableColumn>Spa</TableColumn>
                        <TableColumn>Tình trạng</TableColumn>
                        <TableColumn > <span className="sr-only">Action</span></TableColumn>
                    </TableHeader>
                    <TableBody>

                        <div>
                            {items.map((service) => (
                                <TableRow key={service.id}>
                                    <TableCell>{service.serviceName}</TableCell>
                                    <TableCell>{service.localDate}</TableCell>
                                    <TableCell>{service.timeSlotDto.startLocalDateTime} - {service.timeSlotDto.endLocalDateTime}</TableCell>
                                    <TableCell>{service.petName}</TableCell>
                                    <TableCell>{service.shopName}</TableCell>
                                    <TableCell>
                                        <Chip color={getColor(service.status)}>{service.status}</Chip>
                                    </TableCell>
                                    <TableCell>
                                        <OrderDetail params={service.id} />
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </div>


                    </TableBody>
                </Table>
            )}
        </>
    )
}
