import { FC, ChangeEventHandler, memo } from "react";
interface IInput {
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
}

const Input: FC<IInput> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="block rounded px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=""
        value={value}
        type={type}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="
        absolute 
        text-zinc-400 
        z-10
        top-3.5 
        left-6 
        duration-150 
        origin-[0]
        -translate-y-2
        scale-75 
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        peer-focus:scale-75
        peer-focus:-translate-y-2
        "
      >
        {label}
      </label>
    </div>
  );
};

export default memo(Input);
