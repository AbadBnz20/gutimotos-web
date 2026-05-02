import { Button } from "@/components/ui/button";
import { CustomLogo } from "./CustomLogo";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { toast } from "react-toastify";
import { ContentTimer } from "./ContentTimer";

interface Props {
  email: string;
}

export const ContentSectionThird = ({ email }: Props) => {
  const [otp, setOtp] = useState("");
  const [isposting, setIsposting] = useState(false);
  const { loginOtp } = useAuthStore();

  const handleLoginOtp = async () => {
    setIsposting(true);
    const resp = await loginOtp(email, otp);
    if (!resp) {
      setIsposting(false);
      return toast.error("error al iniciar session", {
        position: "top-right",
      });
    }
    setIsposting(false);
  };

  return (
    <div>
      
      <div className="flex flex-col items-center text-center">
        <CustomLogo />
        <h2 className="text-sm text-muted-foreground">
          En Tarija, somos tu concesionaria de confianza con las mejores marcas
          de motocicletas, repuestos, piezas y accesorios. Contamos con soporte
          y servicio técnico especializado para brindarte la mejor experiencia,{" "}
          <span className="text-black">
            nuestra prioridad es tu satisfacción
          </span>
          .
        </h2>
      </div>
      <div className="space-y-4 mb-6 flex flex-col items-center">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Ingresar con codigo de acceso
        </label>
        <ContentTimer/>

        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={4} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="w-full cursor-pointer"
          disabled={isposting || otp.length < 6}
          onClick={handleLoginOtp}
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
};
