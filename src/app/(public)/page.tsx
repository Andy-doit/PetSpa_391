import CardService from "@/components/cardService/page";
import CustomerFeedback from "@/components/customerFeedback/page";
import Gallery from "@/components/gallery/page";
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
            <div className="text-center mt-2" style={{
                backgroundColor: "#fbfafa"
            }}>
                <p className="text-5xl font-medium ">Về chúng tôi</p>
                <div className="flex justify-center">
                    <p className="text-xl mt-2 w-[700px]">PetSpa là nền tảng trung gian giúp kết nối giữa các chủ nuôi thú cưng với các dịch vụ chăm sóc thú cưng, bao gồm dịch vụ chăm sóc sức khỏe, làm đẹp, tắm rửa, và nhiều dịch vụ khác. Đây là giải pháp tuyệt vời cho những người yêu thú cưng muốn tìm kiếm những trải nghiệm chăm sóc tốt nhất cho những người bạn nhỏ của họ</p>

                </div>
            </div>
        </div>
    );
}
