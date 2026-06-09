import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sites from "./header/Sites";

const Layout = ({ children }) => {
  
  return (
    <div className="layout">
      <Header />
      <Sites />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;