

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
    // {
    //     name: "Pet Nail",
    //     company: "Minh Spa",
    //     price: "15",

    // },
    // {
    //     name: "Pet Hotel",
    //     company: "Truc Spa",
    //     price: "15",

    // },
    // {
    //     name: "Pet Spa",
    //     company: "Hung Spa",
    //     price: "15",

    // }
]
export default function CardService() {
    return (
        <div className="py-10">
            <div className="grid  grid-flow-col gap-4">
                {serviceItem.map((item, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            className="object-cover"
                            style={{
                                width: '400px',
                                height: '200px'
                            }}
                            src="https://i.pinimg.com/736x/f6/52/b4/f652b4aa020ed9565dda599b98932271.jpg"

                        />
                        <CardFooter className="justify-around items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <div >
                                <p className="text-xl font-mono font-bold text-white/80">{item.name}</p>
                                <p className=" font-mono font-bold text-white/80">by :{item.company}</p>
                            </div>
                            <div>
                                <ServiceDetail />
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </div>
    )
}