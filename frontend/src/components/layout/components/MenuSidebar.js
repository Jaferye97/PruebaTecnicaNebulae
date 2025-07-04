import { Drawer, List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';

const MenuSidebar = ({ children }) => {
  const [openUser, setOpenUser] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="flex min-h-screen">
      <IconButton
        className="absolute top-4 left-4 z-50"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: 'w-[70vw] md:w-[18vw] p-4 bg-white shadow-sm' }}
      >
        <List subheader={<span className="font-bold text-blue-800 px-2">Nebulae</span>}>
          <ListItem
            button
            onClick={() => setOpenUser(!openUser)}
          >
            <ListItemText primary="Producto" />
            {openUser ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse
            in={openUser}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              disablePadding
            >
              <ListItem
                button
                component={NavLink}
                to="/Producto"
                onClick={closeDrawer}
                className="pl-6"
              >
                <ListItemText primary="Lista de productos" />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/Producto/Crear"
                onClick={closeDrawer}
                className="pl-6"
              >
                <ListItemText primary="Crear Producto" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 bg-gray-50 overflow-auto">{children}</main>
    </div>
  );
};

export default MenuSidebar;
