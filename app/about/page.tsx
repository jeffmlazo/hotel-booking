import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import HeaderSection from "@/components/HeaderSection";

export const metadata: Metadata = {
    title: "About Us",
    description: "Welcome to Hotel Booking, your trusted partner in finding the perfect stay wherever your travels take you. We’re dedicated to making hotel bookings seamless, affordable, and enjoyable, ensuring every trip is memorable.",
};

const AboutPage = () => {
  return (
    <>
        <HeaderSection title="About Us" subTitle="Discover the Story Behind Your Perfect Stay" />
        <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image src="/images/about-img.jpg" width={650} height={579} alt="About Us Image" />
                <div>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who We Are</h1>
                    <p className="text-gray-700 py-5">
                        Hotel Booking is a leading online platform designed to simplify hotel reservations for travelers worldwide. Founded in 2005, our app connects millions of guests with a vast selection of accommodations—from luxury resorts to budget-friendly stays. With cutting-edge technology and a customer-first approach, we strive to deliver the best booking experience at your fingertips.
                    </p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoEyeOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                               <h4 className="text-lg font-semibold mb-1">Vission: </h4>
                               <p className="text-gray-600">
                                To revolutionize the way people book hotels by providing a fast, reliable, and user-friendly platform that caters to every traveler’s needs. We envision a world where finding the ideal stay is effortless, allowing you to focus on creating unforgettable travel experiences.
                               </p>
                            </div>
                        </li>
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoLocateOutline className="size-7" />
                            </div>
                            <div className="flex-1">
                               <h4 className="text-lg font-semibold mb-1">Mission: </h4>
                               <ul className="list-disc">
                                <li>
                                    <strong>Empower Travelers:</strong> Offer a wide range of accommodations with transparent pricing and real-time availability.
                                </li>
                                <li className="mt-2">
                                    <strong>Enhance Convenience:</strong> Provide an intuitive, mobile-friendly app with instant confirmations and easy modifications.
                                </li>
                                <li className="mt-2">
                                    <strong>Deliver Trust:</strong> Ensure secure transactions, genuine reviews, and 24/7 customer support for a worry-free booking experience.
                                </li>
                                <li className="mt-2">
                                    <strong>Innovate Continuously:</strong> Leverage the latest technology to personalize recommendations and improve user satisfaction.
                                </li>
                               </ul>
                               <p className="text-gray-600">
                                At Hotel Booking, we’re more than just a booking platform—we’re your travel companion. Start exploring with us today!
                               </p>
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