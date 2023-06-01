import "./App.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { classNames } from "./utils/helpers";
import Charts from "./Pages/Charts";
import { navigationMenu } from "./utils/mocks";

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-7xl ">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3">
            <div className="p-2 bg-white border rounded-md shadow min-h-[calc(100vh-185px)]">
              {navigationMenu.map((menuItem) => (
                <Link
                  to={menuItem.path}
                  key={menuItem.label}
                  className={classNames(
                    "p-3 group cursor-pointer transition-200 rounded-md hover:pl-6 flex items-center space-x-2",
                    location.pathname === menuItem.path
                      ? "pl-6 font-bold bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  )}
                >
                  {menuItem.icon} <span>{menuItem.label}</span>
                </Link>
              ))}
            </div>
          </aside>
          <section className="col-span-9">
            <div className="p-4 bg-white border rounded-md shadow min-h-[calc(100vh-185px)]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/covid-center" element={<Charts />} />
              </Routes>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
