import Footer from "@/components/footer/page";
import GuestHeader from "@/components/guestHeader/page";
import NavbarShop from "@/components/navbarShop/page";
import SiderbarHost from "@/components/siderbarHost/page";



import type { Metadata } from "next";
import { Children } from "react";

export const metadata: Metadata = {
    title: "Shop Owner",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex">
                <SiderbarHost />
                <NavbarShop>   {children}</NavbarShop>
            </div>

            <Footer />

        </>

    );
}