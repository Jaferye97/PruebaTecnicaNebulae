//External Components
import { Outlet } from 'react-router-dom';

//Internal Components
import SideBar from './components/MenuSidebar';

const Layout = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};

export default Layout;
