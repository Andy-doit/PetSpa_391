import React from "react";
import { Card, CardHeader, Divider, CardBody, Button, Link } from "@nextui-org/react";
import Head from 'next/head';
import { Image } from "@nextui-org/react";

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Về Chúng Tôi - Dịch Vụ Spa Thú Cưng</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Về Chúng Tôi
                </h1>
                <h1 className="text-2xl font-bold mb-8 text-center">
                    Dịch Vụ Chăm Sóc Thú Cưng
                </h1>
                <p className="text-xl text-center mb-12">
                    Điểm đến hàng đầu để đặt dịch vụ spa cho thú cưng yêu quý của bạn.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Image
                            isZoomed

                            alt="NextUI Fruit Image with Zoom"
                            src="https://cdn.dribbble.com/userupload/10217473/file/original-8a82d0536ca4890ead44ce637d29f1a3.png?resize=1200x871"
                        />
                        <h2 className="text-xl font-bold mb-2">Nhiệm Vụ Của Chúng Tôi</h2>
                        <p className="mt-4">
                            Chúng tôi cam kết cung cấp dịch vụ spa và chăm sóc thú cưng chất lượng cao,
                            đảm bảo sức khỏe và hạnh phúc của thú cưng là ưu tiên hàng đầu của chúng tôi.
                            Với các dịch vụ đa dạng như tắm rửa, cắt tỉa lông, massage thư giãn, và chăm sóc móng,
                            chúng tôi mang đến cho thú cưng của bạn những trải nghiệm tuyệt vời nhất.


                        </p>
                    </div>

                    <div style={{ marginTop: "50px" }} className="bg-white p-6 rounded-lg shadow-md">
                        <Image
                            isZoomed

                            alt="NextUI Fruit Image with Zoom"
                            src="https://cdn.dribbble.com/users/8413880/screenshots/16500216/media/6a4c2f18aa816c59b18183bcb4baa975.jpg?resize=840x630&vertical=center"
                        />
                        <h2 className="text-xl font-bold mb-2">Đội Ngũ Của Chúng Tôi</h2>
                        <p className="mt-4">
                            Đội ngũ của chúng tôi bao gồm các chuyên gia về thú cưng được đào tạo chuyên nghiệp,
                            có kinh nghiệm và tận tâm trong việc chăm sóc thú cưng. Chúng tôi tự hào về sự am hiểu sâu rộng về các giống loài,
                            đặc điểm sinh học, cũng như nhu cầu cụ thể của từng loại thú cưng.



                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Image
                            isZoomed

                            alt="NextUI Fruit Image with Zoom"
                            src="https://cdn.dribbble.com/users/195330/screenshots/11226373/media/8ee6da89220000c441ea36ad5f5755e1.png?resize=840x630&vertical=center"
                        />
                        <h2 className="text-xl font-bold mb-2">Dịch Vụ Của Chúng Tôi</h2>
                        <p className="mt-4">
                            Chúng tôi cung cấp đa dạng các dịch vụ spa và chăm sóc thú cưng,
                            bao gồm tắm rửa, cắt tỉa lông, chăm sóc móng, và nhiều dịch vụ khác.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
                    <p className="mb-4">
                        Nếu bạn có bất kỳ câu hỏi hoặc muốn đặt lịch hẹn, vui lòng liên hệ với chúng tôi:
                    </p>
                    <ul className="mb-4">
                        <li>Điện thoại: 123-456-7890</li>
                        <li>Email: info@petspa.com</li>
                        <li>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố PQR</li>
                    </ul>
                    <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        <Link color="foreground" href="contact"> Liên hệ ngay  </Link>
                    </Button>

                </div>
            </main>
        </div>
    );
};

export default AboutPage;