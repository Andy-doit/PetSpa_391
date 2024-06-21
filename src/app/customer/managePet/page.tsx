"use client";
import { Button, Input, Tooltip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import CreatePet from "@/components/createPet/page";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { FaEye } from "react-icons/fa";
import { MdChangeCircle, MdDelete } from "react-icons/md";
import { useAppDispatch } from "@/lib/redux/store";
import { allPetPaginationData } from "@/models/userModels";
import { fetchAllPetPagination } from "@/lib/redux/slice/userSlice";
import PetDetail from "@/components/petDetails/page";

export default function ManageAccount() {
    const dispatch = useAppDispatch();
    const [pets, setPets] = useState<allPetPaginationData[]>([]);
    useEffect(() => {
        const allPet = async () => {
            const response = await dispatch(fetchAllPetPagination());
            setPets(response.payload);
        }
        allPet();
    }, [dispatch]);
    console.log(pets)
    const [userId, setUserId] = useState<string>('');
    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [userId]);

    return (
        <div className=" lg:px-6 py-5 max-w-[95rem] mx-auto w-full flex flex-col gap-4">

            <div className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    <Input
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Tìm kiếm thú cưng"
                    />

                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <CreatePet userId={userId} />
                </div>
            </div>
            <div className="max-w-[95rem] mx-auto w-full">
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Tên thú cưng</TableColumn>
                        <TableColumn>Loại thú cưng</TableColumn>
                        <TableColumn>Giới tính</TableColumn>
                        <TableColumn>Hành động</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {pets.map((pet) => (
                            <TableRow key={pet.id}>
                                <TableCell>{pet.petName}</TableCell>
                                <TableCell>{pet.petType}</TableCell>
                                <TableCell>{pet.petGender}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-4 ">
                                        <div>
                                            <PetDetail params={pet.id} />
                                        </div>
                                        <div>
                                            <Tooltip content="Chỉnh sửa thú cưng">
                                                <button onClick={() => console.log("Chỉnh sửa thú cưng")}>
                                                    <MdChangeCircle size={20} fill="#979797" />
                                                </button>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <Tooltip
                                                content="Xoá thú cưng"
                                                color="danger"
                                                onClick={() => console.log("Xoá thú cưng")}
                                            >
                                                <button>
                                                    <MdDelete size={20} fill="#FF0080" />
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

