import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LuTriangleAlert } from "react-icons/lu";
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleaction: () => void
  subtitle?: string;
}
export const DialogConfirm = ({ open, setOpen,handleaction, subtitle='¿Estás seguro de que deseas agregar este artículo a tu cotización?' }: Props) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[400px] max-h-[50vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Confirmar</DialogTitle>
            <DialogDescription>
                <div className="flex flex-col justify-center items-center ">
                    <LuTriangleAlert size={40} />
                    {subtitle}
                </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            <Button variant="outline" className="cursor-pointer" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button className="cursor-pointer" onClick={handleaction}>Confirmar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
