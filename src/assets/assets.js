import mainLogo from "./main_logo.png";
import subLogo from "./sub_logo.png";
import default_avatar from "./default_avt.jpg";
import avatar_user from "./avatar_user.png";
import default_file_img from "./default_file.jpg";
import pdf_img from "./pdf_img.jpg";
import word_img from "./word_img.png";
import excel_img from "./excel_img.png";
import ppt_img from "./ppt_img.png";

export const assets = {
  mainLogo,
  default_avatar,
  avatar_user,
  subLogo,
  default_file_img,
  pdf_img,
  word_img,
  excel_img,
  ppt_img,
};

export const sidebarItems = [
  {
    id: 1,
    icon: "chat_bubble",
    path: "chats",
    title: "Chats",
  },
  {
    id: 2,
    icon: "group",
    path: "groups",
    title: "Groups",
  },
  {
    id: 3,
    icon: "contact_page",
    path: "contacts",
    title: "Contacts",
  },
  {
    id: 4,
    icon: "notifications",
    path: "notifications",
    title: "Notifications",
  },
  {
    id: 5,
    icon: "settings",
    path: "settings",
    title: "Settings",
  },
];
