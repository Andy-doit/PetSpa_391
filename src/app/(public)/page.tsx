import Gallery from "@/components/gallery/page";
import MenuGuest from "@/components/menuGuest/page";
import { Link, Spacer } from "@nextui-org/react";

export default function Home() {
    return (
        <>
            <MenuGuest />
            <div className="text-center pt-10">
                <p className="text-5xl font-medium">Gallery</p>
            </div>
            <div className="container px-10 flex justify-center">
                <Gallery />
            </div>
            <div className="text-center">
                <p className="text-5xl font-medium">Some Service</p>
            </div>
        </>
    );
}
