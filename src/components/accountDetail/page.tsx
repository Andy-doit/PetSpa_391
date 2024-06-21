import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react';

import { columns, users } from "../tableAccount/data";

interface User {
    id: number;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
}
const ViewDetailAccount: React.FC<{ user: User }> = ({ user }) => {
    return (
        <Card className='w-full md:w-[550px] p-4'>
            <CardHeader className='w-full text-center'>
                <div>
                    <p className='text-2xl font-bold'>Thông tin người dùng</p>
                    <p>Xem chi tiết tài khoản của {user.name}</p>
                </div>
            </CardHeader>
            <CardBody className="space-y-2">
                <div>
                    <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mx-auto" />
                </div>
                <Divider />
                <div className="space-y-1">
                    <label htmlFor="name">Họ và tên</label>
                    <p>{user.name}</p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="role">Vai trò</label>
                    <p>{user.role}</p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="team">Nhóm</label>
                    <p>{user.team}</p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="status">Trạng thái</label>
                    <p>{user.status}</p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="age">Tuổi</label>
                    <p>{user.age}</p>
                </div>
                <div className="space-y-1">
                    <label htmlFor="email">Email</label>
                    <p>{user.email}</p>
                </div>
            </CardBody>
        </Card>
    );
};

export default ViewDetailAccount;