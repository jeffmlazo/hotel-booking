import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/HeaderSection";

export const metadata: Metadata = {
    title: "About Us",
    description: "Who we are",
};

const AboutPage = () => {
  return (
    <>
        <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet." />
        <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image src="/images/about-img.jpg" width={650} height={579} alt="About Us Image" />
                <div>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who We Are</h1>
                    <p className="text-gray-700 py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio nihil magnam obcaecati. Saepe neque veniam earum voluptas quo ullam.
                    </p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoEyeOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                               <h4 className="text-lg font-semibold mb-1">Vission: </h4>
                               <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptates eligendi laudantium nihil aspernatur ex.</p>
                            </div>
                        </li>
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoLocateOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                               <h4 className="text-lg font-semibold mb-1">Mission: </h4>
                               <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem corrupti magnam hic odit corporis? Libero veniam ad soluta nulla blanditiis.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default AboutPage;