interface Props {
  handleSection: (section: number) => void;
  section: number;
}
export const ContentBack = ({ handleSection,section }: Props) => {
  return (
<<<<<<< HEAD
    <div
      className="flex justify-center items-center cursor-pointer"
      
    >
      <span className="ml-2 block text-sm font-medium text-gray-700 mb-2" onClick={() => handleSection(section == 1 ? 1 : section - 1)}>Volver </span>
=======
    <div className="flex justify-center items-center">
      <span
        onClick={() => handleSection(section == 1 ? 1 : section - 1)}
        className="
          border
          border-gray-300
          rounded-xl
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          cursor-pointer
          hover:border-red-500
          hover:text-red-600
          transition-all
          duration-200
        "
      >
        Usar otro método
      </span>
>>>>>>> 16f78cfa1aa503949a8604d532b1d8d54e46d1e6
    </div>
  );
};
