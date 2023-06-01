import {
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const navigationMenu = [
  { label: "Contacts", path: "/", icon: <UserGroupIcon className="w-5 h-5" /> },
  {
    label: "Covid Data",
    path: "/covid-center",
    icon: <PresentationChartLineIcon className="w-5 h-5" />,
  },
];
