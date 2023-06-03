import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/api";import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router>
          <App />
        </Router>
      </Layout>
    </QueryClientProvider>
  </Provider>
);
