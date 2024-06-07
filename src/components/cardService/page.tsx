'use client'
import { fetchAllServicesPagination } from "@/lib/redux/slice/listAllServiceSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { allServicesPaginationData } from "@/models/bookingModels";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CardService() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<allServicesPaginationData[]>([]);

    const router = useRouter()
    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchAllServicesPagination());
            setItems(response.payload);
            console.log(response.payload)
        }
        allService();
    }, [dispatch]);
    console.log(items);
    const bookingBtn = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            router.replace('/customer/bookingPage')
        } else {
            router.replace('/logIn');
        }
    };
    return (
        <div className="mb-5">
            <div className="grid grid-cols-4 gap-4 container">
                {items.map((items, index) => (
                    <Card className="max-w-[400px]" key={index}>
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-lg">{items.serviceName}</p>
                                <p className="text-md text-orange-600 ">Khoi Spa</p>
                                <p className="text-md text-default-500">{items.address}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Đánh giá: {items.nomination}</p>
                        </CardBody>
                        <CardBody>
                            <p>Giá: {items.price}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button onClick={bookingBtn} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                Đặt lịch
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>

        </div>
    )
}