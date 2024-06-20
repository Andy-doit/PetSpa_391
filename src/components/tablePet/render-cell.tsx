'use client'
import { User, Tooltip, Chip } from "@nextui-org/react";
import React, { use, useState } from "react";

import { pets } from "./data";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Props {
    user: (typeof pets)[number];
    columnKey: string | React.Key;
    onDelete: (user: any) => void;
}

export const RenderCell = ({ user, columnKey, onDelete }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        onDelete(user);
        setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleViewClick = () => {
        setShowViewModal(true);
    };

    const closeViewModal = () => {
        setShowViewModal(false);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    // @ts-ignore
    const cellValue = user[columnKey];
    switch (columnKey) {
        case "petName":
            return (
                <User
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    name={cellValue}
                >

                </User>
            );
        case "petWeight":
            return (
                <div>

                    <div>
                        <span>{user.petWeight}</span>
                    </div>
                </div>
            );
        case "petAge":
            return (
                <div>

                    <div>
                        <span>{user.petAge}</span>
                    </div>
                </div>
            );
        case "petType":
            return (
                <div>

                    <div>
                        <span>{user.petType}</span>
                    </div>
                </div>
            );
        case "gender":
            return (
                <div>

                    <div>
                        <span>{user.petGender}</span>
                    </div>
                </div>
            );
        case "actions":
            return (
                <div className="flex items-center gap-4">
                    <Tooltip content="Xem chi tiết">
                        <button onClick={handleViewClick}>
                            <FaEye size={20} fill="#979797" />
                        </button>
                    </Tooltip>
                    <Tooltip content="Sửa thông tin">
                        <button onClick={handleEditClick}>
                            <FaEdit size={20} fill="#007BFF" />
                        </button>
                    </Tooltip>
                    <Tooltip content="Xoá tài khoản" color="danger">
                        <button onClick={handleDeleteClick}>
                            <MdDelete size={20} fill="#FF0080" />
                        </button>
                    </Tooltip>

                    {showModal && (
                        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                            <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm">
                                <p className="text-lg font-semibold mb-3">Xác nhận xoá tài khoản?</p>
                                <div className="flex justify-end gap-4">
                                    <button
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                        onClick={closeModal}
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        onClick={confirmDelete}
                                    >
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {showViewModal && (
                        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 md:mx-auto">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">Chi tiết thú cưng</h2>
                                    <div className="mb-4">
                                        <p className="mb-2"><strong>Loại thú cưng:</strong> {user.petType}</p>
                                        <p className="mb-2"><strong>Tên thú cưng:</strong> {user.petName}</p>
                                        <p className="mb-2"><strong>Cân nặng:</strong> {user.petWeight}</p>
                                        <p className="mb-2"><strong>Tuổi:</strong> {user.petAge}</p>
                                        <p className="mb-2"><strong>Giới tính:</strong> {user.petGender}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                            onClick={closeViewModal}
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {showEditModal && (
                        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 md:mx-auto">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">Sửa thông tin thú cưng</h2>
                                    <div className="mb-4">

                                        <p><strong>Loại thú cưng:</strong> {user.petType}</p>
                                        <p><strong>Tên thú cưng:</strong> {user.petName}</p>
                                        <p><strong>Cân nặng:</strong> {user.petWeight}</p>
                                        <p><strong>Tuổi:</strong> {user.petAge}</p>
                                        <p><strong>Giới tính:</strong> {user.petGender}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                            onClick={closeEditModal}
                                        >
                                            Đóng
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            );
        default:
            return cellValue;
    }
};
