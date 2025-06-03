import { IoTrashOutline, IoPencil } from "react-icons/io5";
import { deleteRoom } from "@/lib/actions";
import Link from "next/link";

export const EditButton = ({id}: {id: string;}) => {
    return (
       <Link href={`/admin/room/edit/${id}`} className="rounded-sm p-1 hover:bg-orange-300 cursor-pointer">
        <IoPencil className="size-5" />
       </Link>
    );
};

export const DeleteButton = ({id, image}: {id: string; image: string}) => {
    const DeleteRoomWithId = deleteRoom.bind(null, id, image);
    return (
        <form action={DeleteRoomWithId}>
            <button type="submit" className="rounded-sm p-1 hover:bg-red-500 hover:text-white cursor-pointer">
                <IoTrashOutline className="size-5" />
            </button>
        </form>
    );
};