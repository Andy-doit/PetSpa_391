
import MenuGuest from "@/components/menuGuest/page";
import CarouselService from "@/components/carouselService/page";
import BlogPage from "@/app/(public)/blog/page"
export default function Home() {
    return (
        <div>
            <div className="flex justify-center" style={{
                backgroundColor: "#fbfafa"
            }}>
                <div>
                    <MenuGuest />
                </div>
            </div>

            <div className="text-center py-3">
                <p className="text-5xl font-medium">Dịch vụ nổi bật</p>
            </div>
            <div className="container" >
                <CarouselService />
            </div>
            <div className="text-center py-3">
                <p className="text-5xl font-medium">Blog</p>
            </div>
            <div className="container" >
                <BlogPage />
            </div>

        </div>
    );
}
