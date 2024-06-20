import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { petColumns, pets } from "./data";
import { RenderCell } from "./render-cell";

export const TablePet = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={petColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={pets}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {petColumns.map((column) => (
                                <TableCell key={column.uid}>
                                    <RenderCell user={item} columnKey={column.uid} />
                                </TableCell>
                            ))}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
