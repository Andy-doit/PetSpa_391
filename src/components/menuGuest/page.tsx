import { Button, Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import bannerImg from "../../../public/assets/img/banner.svg";
import Image from 'next/image'

export default function MenuGuest() {
    return (
        <>
            <div className="flex container py-10">
                <div className="flex-1 flex  items-center">
                    <div>
                        <p className="font-mono font-bold text-6xl">Pet Care</p>
                        <p className="font-mono font-bold text-6xl">For Today</p>
                        <p className="font-mono font-bold text-6xl text-orange-600">Pet Parents</p>
                        <div className="w-3/4 py-3">
                            <p className="font-mono  text-xl">Cuộc sống quá khó khăn ư. Hãy để chúng tôi khiến nó trở nên dễ hơn</p>
                        </div>
                        <div>
                            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                <Link color="foreground" href="listService"> Khám phá </Link>
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

        </>
    )
}