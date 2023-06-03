import {
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavigationPaths } from "./enums";

export const navigationMenu = [
  {
    label: "Contacts",
    path: NavigationPaths.HOME,
    icon: <UserGroupIcon className="w-5 h-5" />,
  },
  {
    label: "Covid Data",
    path: NavigationPaths.COVIDDATA,
    icon: <PresentationChartLineIcon className="w-5 h-5" />,
  },
];
