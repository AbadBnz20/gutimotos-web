import { Input } from "@/components/ui/input";
import { CustomLogo } from "./CustomLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { OtpRequest } from "../actions/OtpRequest";
import { toast } from "react-toastify";

interface Props {
  handleSection: (section: number) => void;
  email: string;
  handleEmail: (email: string) => void;
}
export const ContentSectionSecond = ({
  handleSection,
  email,
  handleEmail,
}: Props) => {
  const [isposting, setIsposting] = useState(false);
  const handleOtpRequest = async () => {
    setIsposting(true);
    const resp = await OtpRequest(email);
    if (!resp.success) {
      setIsposting(false);
      return toast.error("Error al enviar el codigo", {
        position: "top-right",
      });
    }
    toast.success("Codigo OTP enviado al correo", {
      position: "top-right",
    });
    handleSection(3);
    setIsposting(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <CustomLogo />
      </div>
      <div className="space-y-4 mt-5">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Correo electrónico
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <Button
          className="w-full cursor-pointer"
          disabled={isposting || email.trim() === ""}
          onClick={() => handleOtpRequest()}
        >
          Solicitar código de acceso
        </Button>
      </div>
    </div>
  );
};
