import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full w-5 h-5 border-t-2 border-b-2 border-white" />
    </div>
  );
};

export default Spinner;
