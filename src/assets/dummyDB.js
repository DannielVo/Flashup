import { assets } from "./assets";

export const CURRENT_USER_ID = "me";

export const LIST_CHATS = [
  {
    id: 1,
    name: "Alex Rivera",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnXhNAqASZSRl4KMa_GQ9_7qjyNf0CtVpomVkO1mulKN7KeuZ9a4lUdaqxeEnDNJGmOIT-d9corB8xIBE6kGN4ayBydkO5siB_JwwY6UPicZUAJc8Y_LWovUisRF25iqoekyOLcepSITFvY98Dp2hrGCcBMx47lNrjy2jmhYs14kPWB1wKennc9wNzpz3oYJyo4Bcz9vNOGwTE2OoiTDmlvhfCP1Djgj9C4Lf6iBGTtPM4DGJ6bBmETskAwIMHj34NamGyrEpkDim2",
    initials: assets.default_avatar,
    message: "The files are ready for review...",
    time: "10:24 AM",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 2,
    name: "Design Team",
    avatar: null,
    initials: assets.default_avatar,
    message: "New updates on the UI kit",
    time: "09:15 AM",
    online: false,
    unread: 2,
    isGroup: true,
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAv92mOTg4uqLOaBJyZvqzIWBTRts6i72t_mf_TB4apXqwoxlMK1zOh0GEwroP1FwTNZt9SYKSlJrGEsSpbesWDIZ8ZiDBNHjWMdHhfkygvqDenJAu_usq2Wc-ZWijzymYPHVIwRPsH_SOcBm11xT5kxD3ZnT5uWeV2c0-XbJSueeBSpi5eLQiYpEdje81XvajoTyG51Q2P5cSgazxd9EmRk_MhyltqLBgU673d0juOIXaqj22XVytH91nxoMPSupvTwoMowz5YJSDQ",
    initials: assets.default_avatar,
    message: "Meeting moved to Friday at 2PM.",
    time: "Yesterday",
    online: false,
    unread: 0,
    isGroup: false,
  },
  {
    id: 4,
    name: "Marcus Chen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByaAUl9VaP98wZMS4x6rIDPTNssV0tWvCa36a_sg9HP-6zXVu4lkKky0DP47BLLHK--A1EQY2B4aGrYx-1Qrua2HJG4JaOrtYw10jLGt6ZnT_3__fnRpuQ_fAhzpWMx9zgFhmUQ6xeFmIBbWULCH23WeeI9blsBR4fkGHe7MaP4cr0kSOia-KrC_eXVB5CqhegPE4Ip7McQmyATpniHZyflIhDpKcdLTEFfCIceHgIy6Ly30q90DpiZKeQnY-_700OGpyoJuI4NRBj",
    initials: assets.default_avatar,
    message: "I've pushed the latest fixes to main branch.",
    time: "Yesterday",
    online: false,
    unread: 0,
    isGroup: false,
  },
  {
    id: 5,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 6,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 7,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 8,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 9,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
  {
    id: 10,
    name: "Ryan Alan Smith",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsqQE4E3jtLjZYrtcL4xvFW0TOaFfe-9hvleXnx6PnyTbNDVjqQaxtdtPYTvc7DAjO-wNgDzIlX4eaUQJdqwJNzbSADbq7pXCjCcAaG4cw4q5Z-yKeXC9FzctlHtkoJMAqqd1hs7PuztjJKFIKJAU01EJhV-kE9fkGvzeLlBFuJGyjwmdThKj6FHyDFzKLgjD58j4sWbEm48TW01vNk_LuNqLVqGPGul-sO6KBOhYMaNZSgPSLwM9tHoS0rbjs6-FabPNFMJX0fzd",
    initials: assets.default_avatar,
    message: "Let's connect next week.",
    time: "Oct 24",
    online: true,
    unread: 0,
    isGroup: false,
  },
];

export const MESSAGES = {
  1: [
    {
      id: 1,
      senderId: "alex",
      type: "text",
      content:
        "Hey there! I've finished the initial draft for the new dashboard components.",
      time: "10:20 AM",
      date: "14-03-2026",
      status: "seen",
    },
    {
      id: 2,
      senderId: "me",
      type: "text",
      content: "That's great news Alex!",
      time: "10:22 AM",
      date: "14-03-2026",
      status: "seen",
    },
    {
      id: 3,
      senderId: "alex",
      type: "image",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDokTwioAivHEry63gpACIoIvXlsE_MxZdm2sPPvxAMppqJx8Kk7IPPOkx4F-9GyZvuXn-nxo-qq8ZuY7PK5zf_XjDx3pYedJU8lA4sISc3bbf0aQrXUE52dg66uR6Ctb2MrxzTklL8Qgv2hNtfExvzhFvWQ1M8xhOGuS4_lVTVgUf23ZgtKQg0JFlM5pnRmm011GTaogR73XjycIL7Gomu8tdcx0K6W29zX5J5ec8sdr8-YwSKSmodIqzZv1tnzDe5g6QOdACSt72U",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCA4N7GNxUgz-VzmYMZljs3hHlvrA8Xr7t3Cv2lYvO8HDpE44BQVDXJFj6nwWP2cVITKTOJX3wBEMq1gl4nO9u6GFTj4Cog8O65CAImTiI4GWANjLT-7N_gda9qisWhX1nndiCLKOY_2dfxEuqbhd2e0Wn5JKQmw2Rpp2IuGYqtJDXx_Zo0IMGE53SgVUoVA6mFkm7lSjrang71agQU5ij4NfzSogRLCOdcsmOxTx-iDUhu8CtnKb8rzIq81TCmp86yFtbIOpcdlCtY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA38851VPu5mznH1urnHG0WWrB2yMUurXeY3yp4N_3-zN_oP00XiNOBsduQCEkOnyNi6SPkcr6yrs0afZB7XQlqFuUBA7MRxSq5qY9h0oCF0ED31dAmrqOkmHROzbF1D51Yj8n3_drPEfshU7AMpyuVjIENfXh78Drw6wP-QSj-zuzLCGqmr5dxvgTVNW5vNkK-UUtgyRYtjrjm3QLKBkglC5wWsGDuszZhgHq0REPdrqsUpFplf5tyDKy3499CJw2epfwJSln-eHki",
      ],
      time: "10:24 AM",
      date: "15-03-2026",
      status: "sent",
    },
    {
      id: 4,
      senderId: "me",
      type: "file",
      fileName: "Project_Specs.pdf",
      fileSize: "2.4 MB",
      time: "10:26 AM",
      date: "15-03-2026",
      status: "sent",
    },
    {
      id: 5,
      senderId: "me",
      type: "text",
      content: "Hahaha",
      time: "10:22 AM",
      date: "15-03-2026",
      status: "sending",
    },
  ],
};
