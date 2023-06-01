import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { classNames } from "./utils/helpers";
import Charts from "./Pages/Charts";

const navigationMenu = [
  { label: "Contact", path: "/" },
  { label: "Covid Data", path: "/covid-center" },
];

const App = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("");

  const handleNavItemClick = (item: string) => {
    setSelectedNavItem(item);
  };

  return (
    <Router>
      <div className="px-4 py-8 mx-auto max-w-7xl min-h-[calc(100vh-120px)]">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3">
            <div className="p-2 bg-white border rounded-md shadow">
              {navigationMenu.map((menuItem) => (
                <Link
                  to={menuItem.path}
                  key={menuItem.label}
                  className={classNames(
                    "p-2 group cursor-pointer transition-300 block rounded-md",
                    selectedNavItem === menuItem.label
                      ? "bg-blue-500 text-white"
                      : ""
                  )}
                  onClick={() => handleNavItemClick(menuItem.label)}
                >
                  {menuItem.label}
                </Link>
              ))}
            </div>
          </aside>
          <section className="col-span-9">
            <div className="p-4 bg-white border rounded-md shadow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/covid-center" element={<Charts />} />
              </Routes>
            </div>
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
