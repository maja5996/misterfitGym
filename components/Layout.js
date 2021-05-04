import Header from "./Header";
import Styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={Styles.content}>
        <Header />

        {children}
      </div>
    </>
  );
};

export default Layout;
