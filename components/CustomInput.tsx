import { Input } from "@/components/ui/input";

type CustomInputProps = {
  label: string;
};

const CustomInput = ({ label }: CustomInputProps) => {
  return (
    <div className="flex items-center my-4">
      <Input className="rounded-tr-none rounded-br-none" />
      <span className="bg-[#743FC7] text-white rounded-r block w-[200px] py-2 px-4 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default CustomInput;
