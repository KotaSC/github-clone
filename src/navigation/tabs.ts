import { Discover } from "../screens/Discover";
import { Home } from "../screens/Home";
import { Notification } from "../screens/Notification";
import { Profile } from "../screens/Profile";

export const tabs = [
  {
    name: "Home",
    component: Home,
    label: "Home",
    icon: "home",
  },
  {
    name: "Notification",
    component: Notification,
    label: "Notification",
    icon: "bell",
  },
  {
    name: "Discover",
    component: Discover,
    label: "Discover",
    icon: "compass",
  },
  {
    name: "Profile",
    component: Profile,
    label: "Profile",
    icon: "account",
  },
];
