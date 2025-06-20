import { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import ContactForm from "@/components/ContactForm";
import {
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline,
} from "react-icons/io5";

export const metadata: Metadata = {
    title: "Contact Us"
};

const ContactPage = () => {
  return (
    <>
    <div>
    <HeaderSection title="Contact Us" subTitle="Have a Question? We’d Love to Hear From You!"/>
    <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h1 className="text-5xl font-semibold text-gray-900 mb-4">Send Us a Message</h1>
                <p className="text-gray-700 py-5">
                    We’d love to hear from you! Whether you have a question, feedback, or need assistance with your booking, our team is here to help. Reach out to us via email, phone, or visit our office—we’re always happy to assist.
                </p>
                <ul className="list-item space-y-6 pt-8">
                    <li className="flex gap-5">
                        <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                            <IoMailOutline className="size-7" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">Email: </h4>
                            <p>email-us@example.com</p>
                        </div>
                    </li>
                    <li className="flex gap-5">
                        <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                            <IoCallOutline className="size-7" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">Phone Number: </h4>
                            <p>+99745 4897 4652, +9874 3565 1456</p>
                        </div>
                    </li>
                    <li className="flex gap-5">
                        <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                            <IoLocationOutline className="size-7" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">Address: </h4>
                            <p>Urbiztondo, San Juan, La Union, Philippines 2500</p>
                        </div>
                    </li>
                </ul>
            </div>
            <ContactForm />
        </div>
    </div>
    </div>
    </>
  );
};

export default ContactPage;