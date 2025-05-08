"use server";

export const editUser = async (body: FormData) => {
    console.log(FormData);
    
  const { image }: any = Object.fromEntries(body);

  console.log(image?.[0]);
};
