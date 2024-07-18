import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchAllNotificationPagination, fetchUpdateNoti, fetchUnreadNoti } from "@/lib/redux/slice/userSlice";
import { AllNotification, TotalUnread } from "@/models/userModels";
import {
    Badge,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    NavbarItem,
} from "@nextui-org/react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const NotificationsDropdown = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();
    const [notificationData, setNotificationData] = useState<AllNotification[]>([]);
    const [unreadCount, setUnreadCount] = useState<number>(0);
    const router = useRouter();
    useEffect(() => {
        const fetchUnreadNotifications = async () => {
            try {
                const response = await dispatch(fetchUnreadNoti()).unwrap();
                setUnreadCount(response.totalUnreadNotification);
            } catch (error) {
                console.error('Error fetching unread notifications:', error);
            }
        };

        fetchUnreadNotifications();
    }, [dispatch]);

    const fetchNotifications = async () => {
        setLoading(true);
        try {
            const response = await dispatch(fetchAllNotificationPagination()).unwrap();
            setNotificationData(response || []);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            setLoading(false);
        }
    };
    const handleNotificationClick = async (id: string) => {
        try {
            const response = await dispatch(fetchUpdateNoti({ id })).unwrap();
            console.log('Notification update response:', response);
            router.push(`/customer/orderHistory`); // Navigate to orderDetails page with the notification id
        } catch (error) {
            console.error('Error updating notification:', error);
        }
    };

    console.log(notificationData);

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <NavbarItem onClick={fetchNotifications}>
                    <div className="flex gap-4 items-center">
                        {unreadCount > 0 && (
                            <Badge content={unreadCount.toString()} color="danger">
                                <IoNotificationsCircleOutline className="w-8 h-8" />
                            </Badge>
                        )}
                        {unreadCount === 0 && (
                            <IoNotificationsCircleOutline className="w-8 h-8" />
                        )}
                    </div>
                </NavbarItem>
            </DropdownTrigger>
            <DropdownMenu className="w-auto" aria-label="Avatar Actions">
                <DropdownSection title="Thông báo">
                    {loading ? (
                        <DropdownItem classNames={{ base: "py-2", title: "text-base font-semibold" }} key="loading">
                            Đang tải...
                        </DropdownItem>
                    ) : (
                        notificationData.length > 0 ? (
                            notificationData.map((notification) => (
                                <DropdownItem
                                    key={notification.id}
                                    classNames={{ base: "py-2", title: "text-base font-semibold" }}
                                    description={notification.content}
                                    onClick={() => handleNotificationClick(notification.id.toString())}
                                >
                                    {notification.content}
                                </DropdownItem>
                            ))
                        ) : (
                            <DropdownItem classNames={{ base: "py-2", title: "text-base font-semibold" }} key="no-data">
                                Không có thông báo nào
                            </DropdownItem>
                        )
                    )}
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};
