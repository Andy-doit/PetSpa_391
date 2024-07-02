'use client'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, TimeInput } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CreateShopTimeSlot from "@/components/createShopTimeSlot/page";
import { AllShopTimeSlotIn4 } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllShopTimeSlotPagination } from "@/lib/redux/slice/shopSlice";
export default function TimeSlot() {
    const [timeSlot, setTimeSlot] = useState<AllShopTimeSlotIn4[]>([]);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchServices();
    }, [dispatch]);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const response = await dispatch(fetchAllShopTimeSlotPagination());
            setTimeSlot(response.payload || []);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };
    console.log(timeSlot);
    return (
        <div className="relative">
            <p className="text-black text-3xl font-semibold mb-2">
                Thời gian hoạt động
            </p>
            <div className='flex justify-end my-2' >
                <CreateShopTimeSlot />
            </div>
            <div>
                <Table aria-label="Example static collection table ">
                    <TableHeader>
                        <TableColumn>Khung giờ</TableColumn>
                        <TableColumn>Thời gian bắt đầu</TableColumn>
                        <TableColumn>Thời gian kết thúc</TableColumn>
                        <TableColumn>Tổng số Slot</TableColumn>
                        <TableColumn>Slot đã sử dụng</TableColumn>
                        <TableColumn>Slot còn lại</TableColumn>
                        <TableColumn>Trạng thái</TableColumn>
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
                            <TableCell>
                                aa
                            </TableCell>
                            <TableCell>
                                aa
                            </TableCell>
                            <TableCell>
                                aa
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}