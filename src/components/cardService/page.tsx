

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import ServiceDetail from "../serviceDetail/page";
const serviceItem = [
    {
        name: "Pet Spa",
        company: "Khoi Spa",
        price: "15",

    },
    {
        name: "Pet Gromming",
        company: "An Spa",
        price: "50",

    },
    {
        name: "Pet Massage",
        company: "Hoang Spa",
        price: "15",

    },
    {
        name: "Pet Nail",
        company: "Minh Spa",
        price: "15",

    },
    {
        name: "Pet Hotel",
        company: "Truc Spa",
        price: "15",

    },
    {
        name: "Pet Hotel",
        company: "Truc Spa",
        price: "15",

    },
    {
        name: "Pet Hotel",
        company: "Truc Spa",
        price: "15",

    },
    {
        name: "Pet Spa",
        company: "Hung Spa",
        price: "15",

    }

]
export default function CardService() {
    return (
        <div className="mt-2 ">
            <div className="grid grid-cols-3 gap-4 container">
                {serviceItem.map((item, index) => (
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={50}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={50}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Dịch vụ tắm rửa</p>
                                <p className="text-small text-orange-600 ">Thien An Spa</p>
                                <p className="text-small text-default-500">Khu 2 Hoàng Cương, Thanh Ba, Phú Thọ</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Giá: 150.000</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                <Link color="foreground" href="listService"> Booking now </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </div>
    )
}