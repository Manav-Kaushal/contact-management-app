type Props = {
  text?: string;
};

const DividerWithText = ({ text }: Props) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 text-base font-semibold leading-6 text-gray-900 bg-white">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DividerWithText;
