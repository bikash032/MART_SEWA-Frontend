"use client"

import { List } from "lucide-react"
import { CarouselDemo } from "./Sliding.crausal"



const Body1 = () => {
    return <>
         
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-cyan-700 to-cyan-100 p-4 sm:p-6 text-white min-h-screen">
      {/* Banner Image */}
      <div className="w-full">
        <img
          src="https://image.made-in-china.com/280f0j00vYGRzfTgWEVB/bkgPic.webp"
          alt="Banner"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="bg-white mt-4 p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-6 w-full">

          {/* Categories */}
          <div className="w-full lg:w-1/4">
            <div className="flex items-center gap-2 text-black mb-4">
              <List />
              <div className="font-bold text-black text-lg">Categories</div>
            </div>
            <ul className="text-black text-sm space-y-2">
              {[
                "Manufacturing & Processing Machinery",
                "Consumer Electronics",
                "Industrial Equipment & Components",
                "Electrical & Electronics",
                "Construction & Decoration",
                "Light Industry & Daily Use",
                "Auto, Motorcycle Parts & Accessories",
                "Apparel & Accessories",
                "Lights & Lighting",
                "Sporting Goods & Recreation",
                "Transportation",
                "Health & Medicine",
                "Packaging & Printing",
                "Computer Products",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:underline hover:text-cyan-800 hover:cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel and Flash Sale */}
          <div className="w-full lg:w-2/4">
            <CarouselDemo />
            <div className="mt-6">
              <div className="text-black text-xl font-semibold mb-2">Flash Sale</div>
              <div className="w-24 h-24 hover:shadow-md hover:cursor-pointer">
                <img
                  src="https://img.drz.lazcdn.com/static/np/p/9aa012720024aef1d31d0960eecf6fd5.jpg_400x400q80.jpg_.webp"
                  alt="Flash Sale Item"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* You May Like */}
          <div className="w-full lg:w-1/4">
            <h1 className="font-bold text-black mb-3">You may like</h1>
            {[
              {
                title: "Shopping Bag",
                subtitle: "62,000+ Products",
                img: "https://image.made-in-china.com/3f2j00QGaoZNRyCSrK/Food-Snack-Plastic-Poly-Package-Stand-up-Shopping-Mylar-Zip-Lock-Ziplock-Zipper-Gift-Candy-Packing-Vacuum-Coffee-Tea-Cookie-Bread-Spout-Liquid-Retort-Pouch-Bag.webp",
              },
              {
                title: "Backpack",
                subtitle: "73,000+ Products",
                img: "https://image.made-in-china.com/3f2j00JdNqoBQGATkY/Large-Capacity-USB-Port-Fashion-Computer-Daypack-Laptop-Business-Backpack-for-Travelling-College.webp",
              },
              {
                title: "Lady Handbag",
                subtitle: "22,000+ Products",
                img: "https://image.made-in-china.com/3f2j00DRhcFCsGbIuk/Guangzhou-Factory-Designer-PU-Leather-Replica-Handbag-Set-Women-Fashion-Purse-Luxury-Lady-Bag-Handbag.webp",
              },
              {
                title: "Gift Bag",
                subtitle: "10,000+ Products",
                img: "https://image.made-in-china.com/3f2j00TDkcPOZgatpo/Manufacturer-s-Candy-Apple-Flannel-Cloth-Best-Selling-Christmas-Velvet-Storage-Drawstring-Bag-for-Holiday-Gift-Wrapping-New-Design.webp",
              },
              {
                title: "Grinding Machine",
                subtitle: "10,000+ Products",
                img: "https://image.made-in-china.com/3f2j00aKphJLQZOtzi/Weihai-Huadong-Machine-Tools-Saddle-Moving-Type-Surface-Grinding-Polishing-Machine-for-Metal.webp",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 mb-4 hover:text-cyan-950 hover:cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="text-black">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm opacity-60">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Body1