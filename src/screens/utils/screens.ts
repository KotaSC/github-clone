import { Discover } from "../Discover";
import { Home } from "../Home";
import { Notification } from "../Notification";
import { Profile } from "../Profile";

export const screens = [
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
