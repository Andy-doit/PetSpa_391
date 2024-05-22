'use client'
import { Tabs, Tab, Card, CardBody, ScrollShadow } from "@nextui-org/react";
import CardService from "../cardService/page";

export default function TableSerivce() {
    return (
        <div className="flex  w-full flex-col mt-3 ">
            <Tabs color="success" aria-label="Options" className="flex justify-center ">
                <Tab key="new" title="Mới nhất">
                    <ScrollShadow size={1} className="w-full flex justify-center h-[500px]">
                        <CardService />
                    </ScrollShadow>
                </Tab>
                <Tab key="common" title="Phổ biến nhất">
                    <ScrollShadow size={1} className="w-full flex justify-center h-[500px]">
                        <CardService />
                    </ScrollShadow>
                </Tab>
                <Tab key="low" title="Giá từ thấp đến cao">
                    <ScrollShadow size={1} className="w-full flex justify-center h-[500px]">
                        <CardService />
                    </ScrollShadow>
                </Tab>
                <Tab key="high" title="Giá từ cao đến thấp">
                    <ScrollShadow size={1} className="w-full flex justify-center h-[500px]">
                        <CardService />
                    </ScrollShadow>
                </Tab>
                <Tab key="old" title="Cũ nhất">
                    <ScrollShadow size={1} className="w-full flex justify-center h-[500px]">
                        <CardService />
                    </ScrollShadow>
                </Tab>
            </Tabs>
        </div >
    )
}