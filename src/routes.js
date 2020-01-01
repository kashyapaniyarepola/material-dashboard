// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Notifications from "@material-ui/icons/Notifications";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LockIcon from "@material-ui/icons/Lock";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
//import TableList from "views/TableList/TableList.js";
//import Typography from "views/Typography/Typography.js";
//import Icons from "views/Icons/Icons.js";
//import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Login from "views/Login/Login.jsx";
import Register from "views/UserRegister/Register.jsx";
import SeletItems from "views/SelectItems/SelectItems.jsx";
import AddStaffMembers from "views/AddStaffMembers/AddStaffMembers.jsx";
import AddDrivers from "views/AddDrivers/AddDrivers.jsx";
import DriverAssign from "views/DriverAssign/DriverAssign.jsx";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/user"
  },
  {
    path: "/register",
    name: "Register",
    rtlName: "ملف تعريفي للمستخدم",
    icon: VpnKeyIcon,
    component: Register,
    layout: "/user"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "ملف تعريفي للمستخدم",
    icon: LockIcon,
    component: Login,
    layout: "/user"
  },

  {
    path: "/items",
    name: "Select Items",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AddShoppingCartIcon,
    component: SeletItems,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/user"
  },

];
const loggedUserRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/loggeduser"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/loggeduser"
  },

  {
    path: "/items",
    name: "Select Items",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AddShoppingCartIcon,
    component: SeletItems,
    layout: "/loggeduser"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/loggeduser"
  },

];
const adminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/staffmembers",
    name: "Add Staff Members",
    rtlName: "قائمة الجدول",
    icon: AddCircleOutlineIcon,
    component: AddStaffMembers,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
];

const staffadminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/staffadmin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/staffadmin"
  },
  {
    path: "/driverassign",
    name: "DriverAssign",
    rtlName: "لوحة القيادة",
    icon: AddCircleOutlineIcon,
    component: DriverAssign,
    layout: "/staffadmin"
  },
  {
    path: "/drivers",
    name: "Add Drivers",
    rtlName: "قائمة الجدول",
    icon: AddCircleIcon,
    component: AddDrivers,
    layout: "/staffadmin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/staffadmin"
  },

];
export default dashboardRoutes;
export { staffadminRoutes, adminRoutes,loggedUserRoutes };
