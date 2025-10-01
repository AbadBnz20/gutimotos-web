import { useAuthStore } from "@/auth/store/auth.store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoExitOutline } from "react-icons/io5";
export const AvatarUser = () => {
  const { user,logout } = useAuthStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserContent />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <div>
            <p className="text-[13px] font-semibold">{user?.fullName}</p>
            <p className="text-[12px]">{user?.email}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={logout}>
          Cerrar Session
          <DropdownMenuShortcut>
            <IoExitOutline />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const UserContent = () => {
  const { user } = useAuthStore();

  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src={user?.photoURL ?? ""} alt={user?.fullName ?? "avatar"} />
      <AvatarFallback className="bg-black text-white">{user?.fullName?.slice(0, 1)}</AvatarFallback>
    </Avatar>
  );
};