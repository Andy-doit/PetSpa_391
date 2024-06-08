'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

export default function ServiceManagement() {
    const [services, setServices] = useState([
        { id: 1, name: "Dịch vụ tắm rửa", price: 100000, description: "Dịch vụ tắm rửa cho thú cưng" },
        { id: 2, name: "Dịch vụ cắt tỉa lông", price: 200000, description: "Dịch vụ cắt tỉa lông cho thú cưng" },
        { id: 3, name: "Dịch vụ khách sạn thú cưng", price: 500000, description: "Dịch vụ lưu trú cho thú cưng" },
        { id: 4, name: "Dịch vụ mát xa", price: 150000, description: "Dịch vụ mát xa cho thú cưng" },
    ]);

    const [newService, setNewService] = useState({ id: 0, name: "", price: 0, description: "" });





    return (
        <div>

            <Table aria-label="Service Management">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Tên dịch vụ</TableColumn>
                    <TableColumn>Giá</TableColumn>
                    <TableColumn>Mô tả</TableColumn>
                    <TableColumn>Hành động</TableColumn>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell>{service.id}</TableCell>
                            <TableCell>{service.name}</TableCell>
                            <TableCell>{service.price}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>
                                <Button color="warning" size="sm" >
                                    Xem chi tiết
                                </Button>
                                <Button color="warning" size="sm" >
                                    Sửa
                                </Button>
                                <Button color="warning" size="sm" >
                                    Xoá
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    );
}