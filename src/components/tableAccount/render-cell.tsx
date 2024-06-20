import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";

import { users } from "./data";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Props {
    user: (typeof users)[number];
    columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
    // @ts-ignore
    const cellValue = user[columnKey];
    switch (columnKey) {
        case "name":
            return (
                <User
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    name={cellValue}
                >
                    {user.email}
                </User>
            );
        case "role":
            return (
                <div>
                    <div>
                        <span>{cellValue}</span>
                    </div>
                    <div>
                        <span>{user.team}</span>
                    </div>
                </div>
            );
        case "status":
            return (
                <Chip
                    size="sm"
                    variant="flat"
                    color={
                        cellValue === "active"
                            ? "success"
                            : cellValue === "paused"
                                ? "danger"
                                : "warning"
                    }
                >
                    <span className="capitalize text-xs">{cellValue}</span>
                </Chip>
            );

        case "actions":
            return (
                <div className="flex items-center gap-4 ">
                    <div>
                        <Tooltip content="Xem chi tiết">
                            <button onClick={() => console.log("Xem chi tiết", user.id)}>
                                <FaEye size={20} fill="#979797" />
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            content="Xoá tài khoạn"
                            color="danger"
                            onClick={() => console.log("Xoá tài khoản", user.id)}
                        >
                            <button>
                                <MdDelete size={20} fill="#FF0080" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            );
        default:
            return cellValue;
    }
};