import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
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
        name: "Pet Spa",
        company: "Hung Spa",
        price: "15",

    }
]
export default function ListService() {
    return (
        <div className="py-10">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                {serviceItem.map((item, index) => (
                    <Card key={index} className="max-w-[350px] mx-4 mb-4">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{item.name}</p>
                                <p className="text-small text-default-500">by : {item.company}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p> Voluptatem, quis distinctio iure beatae praesentium dignissimos doloribus, quibusdam aliquam ab, voluptate illum!</p>
                        </CardBody>
                        <CardBody>
                            <p> From {item.price}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button
                                color="danger" variant="bordered"
                            >
                                Book now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </div>
    )
}