import CustomerFeedback from "@/components/customerFeedback/page";
import Gallery from "@/components/gallery/page";
import ListService from "@/components/listService/page";
import MenuGuest from "@/components/menuGuest/page";
import { Link, Spacer } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="" >
            <div className="flex justify-center" style={{
                backgroundColor: "#fbfafa"
            }}>
                <div>
                    <MenuGuest />
                </div>
            </div>
            <div className="text-center pt-10">
                <div>
                    <p className="text-5xl font-medium">Gallery</p>
                </div>
            </div>
            <div className=" flex justify-center">
                <div>
                    <Gallery />
                </div>
            </div>
            <div className="text-center">
                <p className="text-5xl font-medium">Some Service</p>
            </div>
            <div className=" flex justify-center">
                <ListService />
            </div>
            <div className="text-center">
                <p className="text-5xl font-medium">Customer Review</p>
            </div>
            <div className="flex justify-center">
                <CustomerFeedback />
            </div>
        </div>
    );
}
