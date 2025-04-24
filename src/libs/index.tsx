import { toast } from "react-toastify";

export const sendEmail = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/system/newsletter`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};
