//External Components
import { Outlet } from 'react-router-dom';

//Internal Components
import SideBar from './components/MenuSidebar';
import Navbar from './components/NavBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
};

export default Layout;
