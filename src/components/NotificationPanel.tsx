import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";

type Notification = {
  id: number;
  message: string;
};

const notifications: Notification[] = [
  { id: 1, message: "Your product has been shipped" },
  { id: 2, message: "Your refund has been processed" },
];

const NotificationPanel = () => {
  const [isLoggedin, setIsLoggedin] = useState(true); // You can set this based on actual login status
  const [notificationList, setNotificationList] =
    useState(notifications);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative ">
          <Image
            src="/notification.png"
            alt="notification"
            width={22}
            height={22}
            className="cursor-pointer"
          />
          {notificationList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notificationList.length}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72 min-h-72 flex flex-col items-start  bg-white p-4">
        {notificationList.length > 0 ? (
          notificationList.map((notification) => (
            <div
              key={notification.id}
              className="w-full border-gray-100 flex items-center justify-center py-2 border-b-2 "
            >
              <DropdownMenuItem className="outline-none cursor-pointer p-2 gap-4">
                <p className="font-semibold text-sm">
                  {notification.message}
                </p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </div>
          ))
        ) : (
          <p className="text-center font-semibold text-gray-500 text-sm">
            No notifications
          </p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationPanel;
