import Header from "./Header";
import Foot from "./Foot";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Foot />
    </div>
  );
}

export default Layout;
