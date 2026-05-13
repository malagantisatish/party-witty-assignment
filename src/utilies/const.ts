import bell from "../assets/bell.svg";
import chat from "../assets/chat.svg";
import myBids from "../assets/myBids.svg";
import myPlan from "../assets/myPlan.svg";
import rewards from "../assets/rewards.svg";
import save from "../assets/save.svg";
import search from "../assets/Search Icon.svg";
import myBooking from "../assets/myBooks.svg";


export interface SidebarItem {
    key: string;
    title: string;
    icon: string;
}

export const sidebarList: SidebarItem[] = [
    { key: "search", title: "Search", icon: search },
    { key: "notifications", title: "Notifications", icon: bell },
    { key: "chat", title: "Chat", icon: chat },
    { key: "myBookings", title: "My Bookings", icon: myBooking },
    { key: "myBids", title: "My Bids", icon: myBids },
    { key: "myPlans", title: "My Plans", icon: myPlan },
    { key: "saved", title: "Saved", icon: save },
    { key: "rewards", title: "Rewards", icon: rewards },
];