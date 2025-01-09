import { BsBarChartLineFill } from "react-icons/bs";
import { GiBeachBag } from "react-icons/gi";
import { RiLuggageCartLine } from "react-icons/ri";
import { LiaIdCard } from "react-icons/lia";
import { HiUsers } from "react-icons/hi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";




// export const links = [
//     {
//       title: 'Reports',
//       icon: <BsBarChartLineFill />,
//       path: "/reports",
//       links: [
//         {
//            link1: 'Sales summary',
//            link2: 'Sales by item',
//            link3: 'Sales by category',
//            link4: 'Sales by employee',
         
//         },
//       ],
//     },
//     {
//         title: 'Items',
//         icon: <GiBeachBag />,
//         path: "/items",
//         links: [
//               {
//                 name: 'Item list',
//               },
//               {
//                 name: 'Categories',
//               },
//               {
//                 name: 'Modifiers',
//               },
//               {
//                 name: 'Discounts',
//               },
//         ],
//       },
//       {
//         title: 'Inventry management',
//         icon: <RiLuggageCartLine />,
//         path: "/inventrymanagement",
//       },
//       {
//         title: 'Employees',
//         icon: <LiaIdCard />,
//         path: "/employees",
//         links: [
//           {
//             name:'Employee list',
//           },
//           {
//             name: 'Access rights',
//           }
//        ],
//       },
//       {
//         title: 'Customers',
//         icon: <HiUsers />,
//         path: "/customers",
//       },
//       {
//         title: 'Integrations',
//         icon: <IoExtensionPuzzle />,
//         path: "/integrations",
//         links: [
//           {
//             name:'Apps',
//           },
//           {
//             name: 'Access tokens',
//           }
//        ],
//       },
//       {
//         title: 'Settings',
//         icon: <IoMdSettings />,
//         path: "/settings",
//       },
//       {
//         title: 'Help',
//         icon: <AiOutlineQuestionCircle />,
//         path: "/help",
//       },
//   ];

export const links = [
  {
    title: 'Reports',
    icon: <BsBarChartLineFill />,
    path: "/reports",
    links: [
      { name: 'Sales summary' },
      { name: 'Sales by item' },
      { name: 'Sales by category' },
      { name: 'Sales by employee' },
    ],
  },
  {
    title: 'Items',
    icon: <GiBeachBag />,
    path: "/items",
    links: [
      { name: 'Item list' },
      { name: 'Categories' },
      { name: 'Modifiers' },
      { name: 'Discounts' },
    ],
  },
  {
    title: 'Inventry management',
    icon: <RiLuggageCartLine />,
    path: "/inventrymanagement",
  },
  {
    title: 'Employees',
    icon: <LiaIdCard />,
    path: "/employees",
    links: [
      { name: 'Employee list' },
      { name: 'Access rights' },
    ],
  },
  {
    title: 'Customers',
    icon: <HiUsers />,
    path: "/customers",
  },
  {
    title: 'Integrations',
    icon: <IoExtensionPuzzle />,
    path: "/integrations",
    links: [
      { name: 'Apps' },
      { name: 'Access tokens' },
    ],
  },
  {
    title: 'Settings',
    icon: <IoMdSettings />,
    path: "/settings",
  },
  {
    title: 'Help',
    icon: <AiOutlineQuestionCircle />,
    path: "/help",
  },
];