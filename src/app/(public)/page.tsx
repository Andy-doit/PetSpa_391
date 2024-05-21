import CardService from "@/components/cardService/page";
import CustomerFeedback from "@/components/customerFeedback/page";
import ListService from "@/components/listService/page";
import MenuGuest from "@/components/menuGuest/page";
import TableSerivce from "@/components/tableService/page";
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
            <div className="text-center mt-2">
                <p className="text-5xl font-medium">Dịch vụ</p>
            </div>
            <div className="">
                <TableSerivce />
            </div>

        </div>
    );
}
