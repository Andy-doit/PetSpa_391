'use client'
import { fetchAllServicesPagination } from "@/lib/redux/slice/listAllServiceSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { allServicesPaginationData } from "@/models/bookingModels";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import DetailService from "../serviceDetail/page";

export default function ListAllService() {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState<allServicesPaginationData[]>([]);

    useEffect(() => {
        const allService = async () => {
            const response = await dispatch(fetchAllServicesPagination());
            setItems(response.payload);
        }
        allService();
    }, [dispatch]);
    return (
        <div className="mb-5">
            <div className="grid grid-cols-4 gap-4 container">
                {items.map((items, index) => (
                    <Card className="max-w-[400px]" key={index}>
                        <CardHeader className="flex gap-3">
                            <div className="flex flex-col">
                                <p className="text-2xl font-semibold">{items.serviceName}</p>
                                <p className="text-md text-orange-600 ">{items.shopName}</p>
                                <p className="text-md text-default-500">{items.address}</p>
                            </div>
                        </CardHeader>
                        <Divider />

                        <CardBody>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <FaStar
                                            key={index}
                                            className="star"
                                            color={ratingValue <= items.nomination ? 'gold' : 'gray'}
                                        />
                                    );
                                })}
                            </div>
                            <p className="text-xl font-medium">Giá: {items.price}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="w-full">
                            <DetailService params={items} />
                        </CardFooter>
                    </Card>
                ))}

            </div>

        </div>
    )
}