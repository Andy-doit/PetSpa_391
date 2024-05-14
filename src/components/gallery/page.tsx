import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
export default function Gallery() {
    return (
        <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2  pt-10">
            <Card className="col-span-12 sm:col-span-4 h-[350px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Pet Place</p>
                    <h4 className="text-white font-medium text-large">Gromming</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/44/95/8d/44958db0f1da7230964ab619f06c1115.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[350px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Pet Place</p>
                    <h4 className="text-white font-medium text-large">Nail</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/22/f4/6d/22f46da0fda3a614c24e1181dc27a62b.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[350px]">
                <CardHeader className="absolute  z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Pet Place</p>
                    <h4 className="text-white font-medium text-large">Special Spa</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/2b/a4/2b/2ba42b4c463e38da641fa4559c3ed786.jpg"
                />
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Pet Place</p>
                    <h4 className="text-white font-medium text-2xl">Massage and Relaxation</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://i.pinimg.com/564x/24/c4/0c/24c40c25e8ea7b6b6e05c544122b96c5.jpg"
                />

            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Pet Place</p>
                    <h4 className="text-white/90 font-medium text-xl">Hotel Pet</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.pinimg.com/564x/af/0d/40/af0d4035cf4ca76292e7b9f8eb9a728c.jpg"
                />

            </Card>
        </div>
    )
}