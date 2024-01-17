import { FC, memo } from "react";
interface IButton {
  title: string;
}
const Button: FC<IButton> = ({ title }) => {
  console.log("button");
  return (
    <button className="bg-red-600 w-full text-white rounded-md py-3 mt-12 hover:bg-red-700">
      {title}
    </button>
  );
};
export default memo(Button);
