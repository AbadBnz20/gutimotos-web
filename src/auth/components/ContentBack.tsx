interface Props {
  handleSection: (section: number) => void;
  section: number;
}
export const ContentBack = ({ handleSection,section }: Props) => {
  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      
    >
      <span className="ml-2 block text-sm font-medium text-gray-700 mb-2" onClick={() => handleSection(section == 1 ? 1 : section - 1)}>Volver </span>
    </div>
  );
};
