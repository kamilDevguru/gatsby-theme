import Image1 from '../../assets/image/ride/feature-2.svg';
import Image2 from '../../assets/image/ride/feature-1.svg';
import Image3 from '../../assets/image/ride/feature-3.svg';
import Latest1 from '../../assets/image/ride/blog-1.svg';
import Latest2 from '../../assets/image/ride/blog-2.svg';
import Client1 from '../../assets/image/saas/testimonial/client-1.jpg';
import Client2 from '../../assets/image/agency/client/denny.png';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'Ride',
    path: '#ride_section',
    offset: '70',
  },
  {
    label: 'Fare Estimate',
    path: '#fare_section',
    offset: '70',
  },
  {
    label: 'Features',
    path: '#feature_section',
    offset: '70',
  },
  {
    label: 'News',
    path: '#news_section',
    offset: '70',
  },
];
export const MENU_LEFT_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'Ride',
    path: '#ride_section',
    offset: '70',
  },
  {
    label: 'Fare Estimate',
    path: '#fare_section',
    offset: '70',
  },
  {
    label: 'Features',
    path: '#feature_section',
    offset: '70',
  },
  {
    label: 'News',
    path: '#news_section',
    offset: '70',
  },
];
export const MENU_RIGHT_ITEMS = [
  {
    label: 'Login',
    path: '#',
    offset: '70',
  },
  {
    label: 'Sign Up',
    path: '#',
    offset: '70',
  },
];

export const Features = [
  {
    id: 1,
    img: `${Image1}`,
    title: 'Delivery',
    description:
      'Documents, accessories, packages and even gifts! Deliver them all within your city, in a jiffy!',
  },
  {
    id: 2,
    img: `${Image2}`,
    title: 'Bike Share',
    description:
      'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
  },
  {
    id: 3,
    img: `${Image3}`,
    title: 'Food',
    description:
      'Order food from your favorite Place near you with the convenience of Godrive.',
  },
];
export const LatestNews = [
  {
    id: 1,
    img: `${Latest1}`,
    title: 'Built for drivers, with drivers',
    description:
      'The new Driver app helps you earn smarter and supports you–like a partner–at every turn.',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    img: `${Latest2}`,
    title: 'Bike Share',
    description:
      'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
    buttonText: 'Learn More',
  },
];
export const Testimonial = [
  {
    id: 1,
    name: 'Michal Corleone Jr.',
    designation: 'CEO of Invission Co.',
    comment:
      'Love to work with this designer in every our future project to ensure we are going to build best prototyping features. Impressed with master class support of the team and really look forward for the future. A true passionate team.',
    avatar_url: Client1,
    social_icon: 'flaticon-instagram',
  },
  {
    id: 2,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment:
      'Impressed with master class support of the team and really look forward for the future. A true passionate team. Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
    avatar_url: Client2,
    social_icon: 'flaticon-twitter',
  },
];
export const menuWidget = [
  {
    id: 1,
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
      {
        id: 3,
        url: '#',
        text: 'About Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
      },
      {
        id: 5,
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    id: 2,
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '#',
        text: 'Site Map',
      },
      {
        id: 5,
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    id: 3,
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media directories',
      },
      {
        id: 3,
        url: '#',
        text: 'Images & B-roll',
      },
      {
        id: 4,
        url: '#',
        text: 'Permissions',
      },
      {
        id: 5,
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
];
export const Language_NAMES = [
  {
    label: 'English',
    value: 'eng',
  },
  {
    label: 'Chinese',
    value: 'chinese',
  },
  {
    label: 'Indian',
    value: 'indian',
  },
];
