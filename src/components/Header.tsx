import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white">
      <div className="container px-4 mx-auto shadow max-w-7">
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-center space-x-2">
            <img
              className="App-logo"
              src={"/logo512.png"}
              alt="React Logo"
              width={45}
              height={45}
            />
            <h3 className="text-lg font-semibold">Contact Management App</h3>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
