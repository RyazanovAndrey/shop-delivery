import BanerDelivery from "@/components/BanerDelivery";
import Banners from "@/components/Banners";
import Brands from "@/components/Brands";
import Category from "@/components/Category";
import DealsSlider from "@/components/Deals";
import DealsHot from "@/components/DealsHot";
import FreeShipping from "@/components/FreeShipping";
import HomeSlider from "@/components/HomeSlider";
import NewArrivals from "@/components/NewArrivals";
import Offers from "@/components/Offers";
import Recommend from "@/components/Recommend";
import TopVendors from "@/components/TopVendors";

export default function Page() {

  return (
    <div>
      <section className="mt-5">
        <HomeSlider />
        <Category />
        <Banners />
        <DealsSlider />
        <Offers />
        <Recommend />
        <DealsHot />
        <TopVendors />
        <BanerDelivery />
        <Brands />
        <NewArrivals />
        <FreeShipping />
      </section>
    </div>
  );
}