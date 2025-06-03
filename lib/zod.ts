import { object, string, coerce, array } from "zod";

export const RoomSchema = object({
  name: string().min(1, "Room name have at least 1 character"),
  description: string().min(50, "Room description have at least 50 characters"),
  capacity: coerce.number().gt(0, "Capacity must be greater than 0"),
  price: coerce.number().gt(0, "Price must be greater than 0"),
  amenities: array(string()).nonempty("At least one amenity must be provided"),
});

export const ReserveSchema = object({
  name: string().min(1, "Room name have at least 1 character"),
  phone: string()
    .min(10, "Phone number have at least 10 numbers")
    .regex(/^[0-9]+$/, "Only numbers are allowed"),
});

export const ContactSchema = object({
  name: string().min(6, "Name have at least 6 characters"),
  email: string()
    .min(6, "Email have at least 6 characters")
    .email("Please enter a valid email address"),
  subject: string().min(6, "Subject have at least 6 characters"),
  message: string()
    .min(50, "Message have at least 50 characters")
    .max(200, "Message maximum 200 characters"),
});
