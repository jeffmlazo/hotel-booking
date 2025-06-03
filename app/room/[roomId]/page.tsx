import { Suspense } from "react";
import { Metadata } from "next";
import RoomDetail from "@/components/RoomDetail";


export const metadata: Metadata = {
    title: "Room Detail",
};

const RoomDetailPage = async ({
    params
} : {
    params: Promise<{roomId: string}>
}) => {
  const roomId = (await params).roomId;
  return (
    <>
        <div className="mt-16">
            <Suspense fallback={<p>Loading...</p>}>
                <RoomDetail roomId={roomId} />
            </Suspense>
        </div>
    </>
  );
};

export default RoomDetailPage;