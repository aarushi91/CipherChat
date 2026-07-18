const chatData = [
  {
    id: 1,
    name: "Rohit",
    username: "@rohit",
    online: true,
    unread: 2,
    avatar: "RO",

    profile: {
        email: "rohit@gmail.com",
        phone: "+91 9876543210",
        bio: "Frontend Developer 🚀",
    },

    messages: [
      {
        id: 1,
        sender: "Rohit",
        own: false,
        text: "Hello 👋",
        time: "2:10 PM",
      },
      {
        id: 2,
        sender: "Me",
        own: true,
        text: "Hi 😊",
        time: "2:11 PM",
      },
      {
        id: 3,
        sender: "Rohit",
        own: false,
        text: "How's CipherChat going?",
        time: "2:12 PM",
      },
      {
        id: 4,
        sender: "Me",
        own: true,
        text: "Almost finished 🚀",
        time: "2:13 PM",
      },
    ],
  },

  {
    id: 2,
    name: "Rahul",
    username: "@rahul",
    online: false,
    unread: 0,

    avatar: "RA",

    profile: {
      email: "rahul@gmail.com",
      phone: "+91 9988776655",
      bio: "Backend Engineer",
    },

    messages: [
      {
        id: 1,
        sender: "Rahul",
        own: false,
        text: "Meeting today?",
        time: "9:30 AM",
      },
    ],
  },

  {
    id: 3,
    name: "Priya",
    username: "@priya",
    online: true,
    unread: 5,

    avatar: "PR",

    profile: {
      email: "priya@gmail.com",
      phone: "+91 9999999999",
      bio: "UI/UX Designer",
    },

    messages: [
      {
        id: 1,
        sender: "Priya",
        own: false,
        text: "Finished the design 🎨",
        time: "11:45 AM",
      },
    ],
  },
];

export default chatData;