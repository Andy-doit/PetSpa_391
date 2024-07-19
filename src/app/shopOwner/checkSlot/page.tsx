'use client'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Spinner, CalendarDate, DatePicker } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchTimeSlotDetail } from "@/lib/redux/slice/shopSlice";
import { detailTimeSlot } from "@/models/bookingModels";
import { getLocalTimeZone, today } from "@internationalized/date";

export default function TimeSlot() {
    const [timeSlot, setTimeSlot] = useState<detailTimeSlot[] | any>([]);
    const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()));
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();

    const handleDateChange = async (newDate: CalendarDate) => {
        setSelectedDate(newDate);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const dateOnly = `${selectedDate.year}-${("0" + selectedDate.month).slice(-2)}-${("0" + selectedDate.day).slice(-2)}`;
            const response = await dispatch(fetchTimeSlotDetail({ date: dateOnly }));
            if (response.payload) {
                setTimeSlot(response.payload);
            }
            setLoading(false);
        };
        fetchData();
    }, [selectedDate, dispatch]);

    return (
        <div className="relative">
            <p className="text-black text-3xl font-semibold mb-2">
                Kiểm tra số lượng slot
            </p>
            <div className="w-1/4">
                <DatePicker
                    label="Chọn ngày"
                    className="w-full"
                    onChange={handleDateChange}
                    minValue={today(getLocalTimeZone())}
                    defaultValue={today(getLocalTimeZone())}
                />
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center mt-10">
                        <Spinner size="lg" />
                    </div>
                ) : timeSlot.length === 0 ? (
                    <div className="flex justify-center mt-10">
                        <p className="text-2xl font-bold">Vui lòng hãy chọn ngày để kiểm tra</p>
                    </div>
                ) : (
                    <div>
                        <Table className="mt-6" aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>Tổng số slot</TableColumn>
                                <TableColumn>Thời gian</TableColumn>
                                <TableColumn>Số slot đã sử dụng</TableColumn>
                                <TableColumn>Số slot hiện tại</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {timeSlot.map((slot: detailTimeSlot) => (
                                    <TableRow key={slot.id}>
                                        <TableCell>{slot.totalSlots}</TableCell>
                                        <TableCell>{slot.startTime} - {slot.endTime}</TableCell>
                                        <TableCell>{slot.usedSlots}</TableCell>
                                        <TableCell>{slot.availableSlots}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
        </div>
    );
}
