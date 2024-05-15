


import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import ServiceDetail from "../serviceDetail/page";
import {Button} from "@nextui-org/react";
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
                   <Card className="max-w-[400px]">
                   <CardHeader className="flex gap-3">
                     <Image
                       alt="nextui logo"
                       height={40}
                       radius="sm"
                       src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                       width={40}
                     />
                     <div className="flex flex-col">
                       <p className="text-md">Pet Gromming</p>
                       <p className="text-small text-default-500">By: Hoang Spa</p>
                     </div>
                   </CardHeader>
                   <Divider/>
                   <CardBody>
                     <p>Dịch vụ chăm sóc tắm rửa cho thú cưng.</p>
                     <p>150.000/giờ</p>
                   </CardBody>
                 
               
                   <Divider/>
                   <CardFooter>
                      <Button  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-md">
     Booking Now
    </Button>
                   </CardFooter>
                 </Card>
                ))}
            </div>

        </div>
    )
}