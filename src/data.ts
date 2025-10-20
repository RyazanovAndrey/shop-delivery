import { StaticImageData } from "next/image";
import promotionBanner1 from '../public/promotional-banner-img1.png'
import promotionBanner2 from '../public/promotional-banner-img2.png'
import promotionBanner3 from '../public/promotional-banner-img3.png'
import promotionBanner4 from '../public/promotional-banner-img4.png'

import Deal1 from '../public/Deals-img1.png'
import Deal2 from '../public/Deals-img2.png'

export const categoryList: { image: string, title: string, products: string }[] = [
  { image: '/Category1.png', title: "Vegetables", products: "125+ Products" },
  { image: '/Category2.png', title: "Fish & Meats", products: "90+ Products" },
  { image: '/Category3.png', title: "Desserts", products: "80+ Products" },
  { image: '/Category4.png', title: "Drinks & Juice", products: "60+ Products" },
  { image: '/Category5.png', title: "Animals Food", products: "100+ Products" },
  { image: '/Category6.png', title: "Fresh Fruits", products: "70+ Products" },
  { image: '/Category7.png', title: "Yummy Candy", products: "50+ Products" },
  { image: '/Category8.png', title: "Dairy & Eggs", products: "45+ Products" },
  { image: '/Category9.png', title: "Snacks", products: "110+ Products" },
  { image: '/Category10.png', title: "Frozen Foods", products: "40+ Products" },
]

export const bannerList: { image: StaticImageData, heading: string }[] = [
  { image: promotionBanner1, heading: "Everyday\nFresh Meat" },
  { image: promotionBanner2, heading: "Daily Fresh\nVegetables" },
  { image: promotionBanner3, heading: "Everyday\nfresh Milk" },
  { image: promotionBanner4, heading: "Everyday\nFresh Fruits" },
];


export const dealsList: { image: StaticImageData, title: string, description: string, bg: string }[] = [
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description: "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
    bg: '/Deals-bg1.png'
  },
  {
    image: Deal2,
    title: "Daily Snacks",
    description: "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    bg: '/Deals-bg2.png'
  },
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description: "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
    bg: '/Deals-bg1.png'
  }
]

export const footerLinks = {
  'Information': ['Become a Vendor', 'Affiliate Program', 'Privacy Policy', 'Our Suppliers', 'Extended Plan', 'Community'],
  'Support': ['Help Center', 'Contact Us', 'Report Abuse', 'Submit and Dispute', 'Policies & Rules', 'Online Shopping'
  ],
  'Account': ['My Account', 'Order History', 'Shoping Cart', 'Compare', 'Help Ticket', 'Wishlist'],
  'Groceries': ['Dairy & Eggs', 'Meat & Seafood', 'Breakfast Food', 'Household Supplies', 'Bread & Bakery', 'Pantry Staples'],
}