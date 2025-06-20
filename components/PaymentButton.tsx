"use client";

import { useTransition } from "react";
import { reservationProps } from "@/types/reservation";

declare global {
    interface Window {
        snap: {
            pay: (token: string) => void;
        };
    }
}

const PaymentButton = ({
    reservation,
} : {
    reservation: reservationProps;
}) => {
    const [isPending, startTransition] = useTransition();
    const handlePayment = async () => {
        startTransition(async () => {
            try {
                const response = await fetch("/api/payment", {
                    method: "POST",
                    body: JSON.stringify(reservation),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const {token, error } = await response.json();

                 if (error) {
                    console.error(error);
                    return;
                }
                if (token) {
                    window.snap.pay(token);
                } else {
                    console.error("Token not found in response");
                }

            } catch (error) {
                console.error("Error making payment:", error);
            }
        });
    };

  return (
    <>
        <button onClick={handlePayment} className="px-10 py-4 mt-2 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer">{isPending ? "Processing..." : "Process Payment"}</button>
    </>
  );
};

export default PaymentButton;