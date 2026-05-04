import { Card, CardContent } from "@/components/ui/card";
import imgLogo from "../../assets/gutimotos.svg";
import { ContentSectionMain } from "../components/ContentSectionMain";

export const LoginPages = () => {
  return (
    <>
      <div className={"flex flex-col gap-6"}>
        <Card className="overflow-hidden p-0  ">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <ContentSectionMain />
            </div>
            <div className="relative hidden bg-muted md:block">
              <img
                src={imgLogo}
                alt="logo Gutimotos"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          Bienvenido a nuestra plataforma
        </div>
      </div>
    </>
  );
};
