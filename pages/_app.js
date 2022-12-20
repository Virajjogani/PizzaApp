import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../redux/store";
import "../styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />

      <Layout>
        <Component {...pageProps} />
      </Layout >
    </Provider>
  );
}

export default MyApp;
