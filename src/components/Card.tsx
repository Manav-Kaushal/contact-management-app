import React, { ReactNode } from "react";

type Props = {
  title?: string | ReactNode;
  children: ReactNode;
};

const Card = ({ title = "", children }: Props) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow">
      {title && (
        <div className="px-4 py-4 text-white bg-blue-500 sm:px-6">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}

      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export default Card;
