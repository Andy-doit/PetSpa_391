'use client'
import PriceTable from "@/components/priceTable/page";
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import { Card, Image, Button, Checkbox, DatePicker, Input, Textarea, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/store";
import { ServiceDetail, createBooking } from "@/models/bookingModels";
import { fetchServiceDetail } from "@/lib/redux/slice/listAllServiceSlice";
const Slot = [
    { label: "Slot 1", value: "Slot 1", description: "08: 00 - 09: 30", process: 'blank' },
    { label: "Slot 2", value: "Slot 2", description: "09: 30 - 11: 00", process: 'booked' },
    { label: "Slot 3", value: "Slot 3", description: "11: 00 - 12: 30", process: 'blank' },
    { label: "Slot 4", value: "Slot 4", description: "13: 30 - 15: 00", process: 'booked' },
    { label: "Slot 4", value: "Slot 4", description: "15: 00 - 16: 30", process: 'blank' },

];

export default function BookingPage(
    { params }: { params: { slug: string } }
) {

    const [bookingData, setBookingData] = useState<createBooking>({
        customer_Id: '',
        serviceName: '',
        addressShop: '',
        nameShop: '',
        shopId: 0,
        petType: '',
        appointmentDate: '',
        appointmentSlot: '',
        petName: '',
        petWeight: 0,
        notes: '',
    });
    const [service, setService] = useState<ServiceDetail | any>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const serviceDetail = async () => {
            const response = await dispatch(fetchServiceDetail(params));
            if (response) {
                setService(response.payload);
            }
            console.log(response.payload)
        }
        serviceDetail();
    }, [dispatch]);
    console.log(service);
    console.log(bookingData);
    const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setBookingData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handlePetTypeChange = (newType: string) => {
        setBookingData(prevData => ({
            ...prevData,
            petType: newType
        }));
    };
    const handleDateChange = (newDate: CalendarDate) => {
        const formattedDate = `${newDate.day}/${newDate.month}/${newDate.year}`;
        setBookingData(prevData => ({
            ...prevData,
            appointmentDate: formattedDate
        }));
    };
    const handleSlotClick = (index: any) => {
        setSelectedSlotIndex(index);
        const selectedSlot = Slot[index].description;
        setBookingData(prevData => ({
            ...prevData,
            appointmentSlot: selectedSlot
        }));
    };

    useEffect(() => {
        introJs().start();
    }, []);


    return (

        <div className="container w-full mb-4 mt-3">
            {service && (
                <div>
                    <div className="py-2">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Trang chủ
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-black">Dịch vụ</a>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="ms-1 text-sm font-medium text-black md:ms-2 dark:text-black">{service.serviceName}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className='flex text-center items-center justify-center border-imgcus rounded-md '>
                        <div>
                            <div>
                                <h1 className='text-4xl font-semibold'>{service.serviceName}</h1>
                            </div>
                            <div className='my-2 mx-5'>
                                <h1 className='text-1xl font-normal'>{service.serviceDescription}</h1>
                            </div>
                            <Link href='/profileShopOwner' className="text-2xl font-medium hover:text-orange-600" color="foreground" data-title="Chào mừng bạn" data-intro="Bấm vào đây nếu bạn muốn xem chi tiết Shop">{service.shopName}</Link>
                            <h2 className="text-1xl font-light ">Khu 2 hoang duong, thanh ba, phu tho</h2>
                        </div>
                    </div>
                </div>

            )}

            <div className="flex mt-2 justify-around">
                <div className="w-1/2 gap-2 grid grid-cols-12 grid-rows-2 ">
                    <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-5">

                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://i.pinimg.com/564x/4a/67/a2/4a67a27669112468d6cceefc5b8b824a.jpg"
                        />

                    </Card>
                    <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-7">

                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-cover"
                            src="https://i.pinimg.com/736x/69/75/82/69758271818635c7ff76b4a850795186.jpg"
                        />
                    </Card>
                    <div className="w-full col-span-12 sm:col-span-12">
                        <PriceTable />
                    </div>
                </div>

                <div className="w-1/2 px-4" data-title="Chào mừng bạn" data-intro="Mỗi lượt đặt lịch bạn chỉ có thể đặt cho một thú cưng">
                    <div className='mb-2'>
                        <p className="text-1xl font-medium">Loại thú cưng</p>
                    </div>
                    <div className="flex mb-2 justify-around w-1/3" >

                        <div onClick={() => handlePetTypeChange('Chó')}>
                            <Card
                                radius="lg"
                                className="border-none"

                            >
                                <Image
                                    className="object-cover"
                                    height={100}
                                    src="https://i.pinimg.com/564x/a1/5d/f9/a15df9417030a5dd3c9806e2371123b0.jpg"
                                    width={100}
                                />
                                <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                    <Checkbox
                                        isSelected={bookingData.petType === 'Chó'}
                                        color="danger"
                                        radius="full"
                                        size="lg"
                                    >
                                        Chó
                                    </Checkbox>
                                </div>
                            </Card>
                        </div>
                        <div onClick={() => handlePetTypeChange('mèo')}>
                            <Card
                                radius="lg"
                                className="border-none"
                            >
                                <Image

                                    className="object-cover"
                                    height={100}
                                    src="https://i.pinimg.com/564x/65/e3/bf/65e3bff241ef51e93cf4ddb514723101.jpg"
                                    width={100}
                                />
                                <div className="absolute z-10 right-3 bottom-0 items-center flex">
                                    <Checkbox
                                        isSelected={bookingData.petType === 'cat'}
                                        color="danger"
                                        radius="full"
                                        size="lg"
                                    > Mèo
                                    </Checkbox>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className="   ">
                            <p className="text-1xl font-medium mb-2">Chọn ngày</p>
                            <div className="w-full">
                                <DatePicker
                                    label="Chọn ngày"
                                    className="w-full"
                                    onChange={handleDateChange}
                                    minValue={today(getLocalTimeZone())}
                                    defaultValue={today(getLocalTimeZone())}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className="   ">
                            <p className="text-1xl font-medium mb-2">Khung giờ</p>
                            <div className="w-full flex justify-around" data-title="Chào mừng bạn" data-intro="Ở đây, ô màu vàng có nghĩa là khung giờ đó đã hết chỗ trống, còn ô màu xám có nghĩa là khung giờ vẫn trống, khi bạn chọn một khung giờ thì nó sẽ hiện màu xanh">
                                {Slot.map((slot, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handleSlotClick(index)}
                                        color={slot.process === 'booked' ? 'warning' : (selectedSlotIndex === index ? 'success' : 'default')}
                                        disabled={slot.process === 'booked'}
                                    >
                                        {slot.description}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <div className=" flex  justify-between">
                            <div>
                                <p className="text-1xl font-medium mb-2">Tên thú cưng</p>
                                <div className="w-full">
                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('petName', e.target.value)}
                                        type="Petname"
                                        label="Tên thú cưng"
                                    />


                                </div>
                            </div>
                            <div>
                                <p className="text-1xl font-medium mb-2">Cân nặng</p>
                                <div className="w-full">
                                    <Input
                                        className="w-[300px]"
                                        onChange={(e) => handleInputChange('petWeight', parseFloat(e.target.value))}
                                        type="Petweight"
                                        label="Cân nặng"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mb-2'>
                        <div className=" flex  justify-between">
                            <div>
                                <p className="text-1xl font-medium mb-2">Ghi chú</p>
                                <div className="w-full">
                                    <Textarea
                                        onChange={(e) => handleInputChange('notes', e.target.value)}
                                        label="Ghi chú"
                                        placeholder="Những điều cần lưu ý đối với thú cưng của bạn"
                                        className="w-[500px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-11'>
                        <Button type="submit" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full">Đặt lịch</Button>

                    </div>
                </div>

            </div>
        </div >
    )
}