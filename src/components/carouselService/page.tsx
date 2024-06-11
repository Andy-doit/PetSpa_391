'use client'
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
import { fetchAllServicesPagination } from "@/lib/redux/slice/listAllServiceSlice"; // Giả sử đường dẫn
import { useAppDispatch } from "@/lib/redux/store";
import CardService from "../cardService/page";

export default function CarouselService() {
    const [services, setServices] = useState([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchServices = async () => {
            const response = await dispatch(fetchAllServicesPagination());
            setServices(response.payload);
        };
        fetchServices();
    }, [dispatch]);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className="my-5">
                {services.map((service, index) => (
                    <div className="my-5" key={index}>
                        <CardService service={service} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
