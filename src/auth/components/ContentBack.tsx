interface Props {
  handleSection: (section: number) => void;
  section: number;
}
export const ContentBack = ({ handleSection,section }: Props) => {
  return (
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
    </div>
  );
};
