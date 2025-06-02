"use server";

import { prisma } from "@/lib/prisma";
import { ContactSchema, RoomSchema } from "@/lib/zod";
import { redirect } from "next/navigation";

export const saveRoom = async (
  image: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "Image is required." };

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/admin/room");
};

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return {
      message:
        "Your inquiry was submitted successfully. Our team will be in touch soon.",
    };
  } catch (error) {
    console.log(error);
  }
};
