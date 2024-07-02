'use client'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CreateShopTimeSlot from "@/components/createShopTimeSlot/page";
import { AllShopTimeSlotIn4 } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllShopTimeSlotPagination } from "@/lib/redux/slice/shopSlice";

export default function TimeSlot() {
    const [shopIds, setShopId] = useState<string>('');
    const [timeSlot, setTimeSlot] = useState<AllShopTimeSlotIn4[]>([]);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTimeSlots();
    }, [dispatch]);

    const fetchTimeSlots = async () => {
        setLoading(true);
        try {
            const response = await dispatch(fetchAllShopTimeSlotPagination());
            const timeSlots = response.payload || [];
            setTimeSlot(timeSlots);
            if (timeSlots.length > 0) {
                setShopId(timeSlots[0].shopId);
            }
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative">
            <p className="text-black text-3xl font-semibold mb-2">
                Thời gian hoạt động
            </p>
            <div className='flex justify-end my-2'>
                <CreateShopTimeSlot shopIds={shopIds} refetchTimes={fetchTimeSlots} />
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                ) : timeSlot.length === 0 ? (
                    <p>Shop chưa tạo khung giờ</p>
                ) : (
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>Khung giờ</TableColumn>
                            <TableColumn>Thời gian</TableColumn>
                            <TableColumn>Tổng số Slot</TableColumn>
                            <TableColumn>Slot đã sử dụng</TableColumn>
                            <TableColumn>Slot còn lại</TableColumn>
                            <TableColumn>Trạng thái</TableColumn>
                            <TableColumn>Hành động</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {timeSlot.map((slot) => (
                                <TableRow key={slot.id}>
                                    <TableCell>{slot.description}</TableCell>
                                    <TableCell>{slot.startLocalTime} - {slot.endLocalTime}</TableCell>
                                    <TableCell>{slot.totalSlot}</TableCell>
                                    <TableCell>{slot.usedSlot}</TableCell>
                                    <TableCell>{slot.availableSlot}</TableCell>
                                    <TableCell>{slot.status ? 'Hoạt động' : 'Không hoạt động'}</TableCell>
                                    <TableCell>
                                        Test
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>
        </div>
    );
}
