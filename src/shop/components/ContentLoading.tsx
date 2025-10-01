interface Props {
  small?: boolean
}
export const ContentLoading = ({ small }:Props) => {
  return (
    <div className={`w-full ${small ? "h-[50px]" : "h-[100px]"} grid justify-center items-center`}>
       <div className="flex flex-col items-center gap-4">
        <div className={`${small ? "w-5 h-5" : "w-10 h-10"} animate-spin rounded-full border-4 border-primary border-t-transparent`} />
        <p className="text-xs font-medium">Cargando...</p>
      </div>
    </div>
  );
};
