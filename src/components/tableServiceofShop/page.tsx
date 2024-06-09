'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
export default function ServiceManagement({
    onViewService,
    onUpdateService,
    onDeleteService, // Thêm prop onDeleteService
}: {
    onViewService: (service: any) => void;
    onUpdateService: (service: any) => void;
    onDeleteService: (service: any) => void; // Thêm kiểu cho prop onDeleteService
}) {
    const [services, setServices] = useState([
        { id: 1, name: "Dịch vụ tắm rửa", price: 100000, type: "dog", description: "Dịch vụ tắm rửa cho thú cưng" },
        { id: 2, name: "Dịch vụ cắt tỉa lông", price: 200000, type: "cat", description: "Dịch vụ cắt tỉa lông cho thú cưng" },
        { id: 3, name: "Dịch vụ khách sạn thú cưng", price: 500000, type: "dog", description: "Dịch vụ lưu trú cho thú cưng" },
        { id: 4, name: "Dịch vụ mát xa", price: 150000, type: "dog", description: "Dịch vụ mát xa cho thú cưng" },
        { id: 5, name: "Dịch vụ xoa bóp ", price: 221000, type: "cat", description: "Dịch vụ xoa bóp cực pheee cho thú cưng" },
        { id: 6, name: "Dịch vụ đấm bóp ", price: 421000, type: "dog", description: "Dịch vụ đấm bóp cực chill cho thú cưng" },
        { id: 7, name: "Dịch vụ vệ sinh răng miệng", price: 281999, type: "cat", description: "Dịch vụ vệ sinh  răng miệng cho thú cưng" },
    ]);

    return (
        <div>
            <Table aria-label="Service Management">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Tên dịch vụ</TableColumn>
                    <TableColumn>Giá</TableColumn>
                    <TableColumn>Loại thú cưng</TableColumn>
                    <TableColumn>Mô tả</TableColumn>
                    <TableColumn>Hành động</TableColumn>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell>{service.id}</TableCell>
                            <TableCell>{service.name}</TableCell>
                            <TableCell>{service.price}</TableCell>
                            <TableCell>{service.type}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>
                                <div className="flex justify-around w-[100px]">
                                    <div className="flex justify-between">
                                        <Button
                                            className="mx-1 rounded-full p-2 hover:bg-yellow-200 transition-colors duration-300"

                                            size="sm"
                                            onClick={() => onViewService(service)}
                                            isIconOnly color="danger" aria-label="Like"
                                        >
                                            <FaEye />
                                        </Button>
                                        <Button
                                            className="mx-1 rounded-full p-2 hover:bg-blue-200 transition-colors duration-300"

                                            size="sm"
                                            onClick={() => onUpdateService(service)}
                                            isIconOnly color="success" aria-label="Like"

                                        >
                                            <FaEdit />
                                        </Button>

                                        <Button
                                            className="mx-1 rounded-full p-2 hover:bg-red-200 transition-colors duration-300"
                                            isIconOnly color="default" aria-label="Like"
                                            size="sm"
                                            onClick={() => onDeleteService(service)}


                                        >
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}