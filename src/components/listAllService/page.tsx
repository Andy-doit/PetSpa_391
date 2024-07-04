'use client'
import { fetchAllServicesPagination } from "@/lib/redux/slice/listAllServiceSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { allServicesPaginationData } from "@/models/bookingModels";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Spinner } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import DetailService from "../serviceDetail/page";

export default function ListAllService() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const [allService, setAllService] = useState<allServicesPaginationData[]>([]);

    const fetchAllServices = async () => {
        setLoading(true);
        try {
            const response = await dispatch(fetchAllServicesPagination());
            setAllService(response.payload || []);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllServices();
    }, [dispatch]);
    return (
        <div className="mb-5">
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <Spinner />
                </div>
            ) : (
                allService.length === 0 ? (
                    <div>Không có dịch vụ nào</div>
                ) : (
                    <div className="grid grid-cols-4 gap-4 container">
                        {allService.map((items, index) => (
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
                )

            )}
        </div>
    )
}