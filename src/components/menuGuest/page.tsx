import { Button, Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import bannerImg from "../../../public/assets/img/banner.svg";
import Image from 'next/image'

export default function MenuGuest() {
    return (
        <>
            <div className="flex container pt-5">
                <div className="flex-1 flex  items-center">
                    <div>
                        <p className="font-mono font-bold text-6xl">Pet Care</p>
                        <p className="font-mono font-bold text-6xl">For Today</p>
                        <p className="font-mono font-bold text-6xl text-orange-600">Pet Parents</p>
                        <div className="w-3/4 py-3">
                            <p className="font-mono  text-xl">Life is hard already. Let us make it a little easier</p>
                        </div>
                        <div>
                            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                <Link href="listService"> Explore now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 border-1 rounded-b-full" style={{ backgroundColor: "#f9d783" }}>
                    <div className="flex items-center">
                        <Image
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            src={bannerImg}
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center ">
                    <ul>
                        <li><Link href="#" className="font-mono py-5 text-xl hover:text-orange-600" color="foreground">Grooming</Link></li>
                        <li><Link href="#" className=" font-mono py-5 text-xl hover:text-orange-600" color="foreground">Hair and Nail</Link></li>
                        <li><Link href="#" className="font-mono py-5 text-xl hover:text-orange-600" color="foreground">Massage </Link></li>
                        <li><Link href="#" className="font-mono py-5 text-xl hover:text-orange-600" color="foreground">Special Spa</Link></li>
                        <li><Link href="#" className=" font-mono py-5 text-xl hover:text-orange-600" color="foreground">Hotel Pet</Link></li>
                    </ul>
                </div>
            </div>
            <div className=" container pt-5 pb-10  flex flex-wrap justify-around ">
                <Card className="max-w-[200px] mt-5">
                    <CardHeader className="flex justify-center gap-3">
                        <div className="flex flex-col">
                            <p className="text-3xl font-mono">More 20</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex justify-center  text-center">
                        <p className="font-mono">Services from many different suppliers</p>
                    </CardBody>
                    <Divider />

                </Card>
                <Card className="max-w-[200px] mt-5">
                    <CardHeader className="flex justify-center gap-3">

                        <div className="flex flex-col">
                            <p className="text-3xl font-mono">More 25</p>

                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex justify-center  text-center">
                        <p className="font-mono">Reviewed by many customer</p>
                    </CardBody>
                    <Divider />

                </Card>
                <Card className="max-w-[200px] mt-5">
                    <CardHeader className="flex justify-center gap-3">

                        <div className="flex flex-col">
                            <p className="text-3xl font-mono">More 250</p>

                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex justify-center  text-center">
                        <p className="font-mono">Order by many customer</p>
                    </CardBody>
                    <Divider />

                </Card>
                <Card className="max-w-[200px] mt-5">
                    <CardHeader className="flex justify-center gap-3">

                        <div className="flex flex-col">
                            <p className="text-3xl font-mono">More 20</p>

                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex justify-center  text-center">
                        <p className="font-mono">From many different suppliers</p>
                    </CardBody>
                    <Divider />

                </Card>
            </div>
        </>
    )
}