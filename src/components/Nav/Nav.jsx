import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    { text: "HOME", path: "/" },
    { text: "PORTFOLIO", path: "/portfolio" },
    { text: "SERVICES", path: "/services" },
    { text: "ABOUT", path: "/about" },
    { text: "CONTACT ME", path: "/contact" },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#55574d" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="drawer"
    >
      <List className="list">
        {navLinks.map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemIcon></ListItemIcon>
              <ListItemText
                primary={link.text}
                primaryTypographyProps={{
                  style: { fontFamily: "Merriweather", fontSize: "16px" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="nav">
      {isMobile ? (
        <div className="nav-wrapper">
          <Link to={"/"}>
            <p className="logo">
              Taylor'd <br />
              Beauty
            </p>
          </Link>
          <MenuIcon className="hamburger-menu" onClick={toggleDrawer(true)} />
          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
            <p className="logo drawer-logo">
              Taylor'd <br />
              Beauty
            </p>
            {DrawerList}
          </Drawer>
        </div>
      ) : (
        <div className="nav-wrapper">
          <Link to={"/"}>
            <p className="logo">
              Taylor'd <br />
              Beauty
            </p>
          </Link>
          <ul className="nav-links">
            <Link to={"/"}>
              <li className="lists-nav">HOME</li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="lists-nav">PORTFOLIO</li>
            </Link>
            <Link to={"/services"}>
              <li className="lists-nav">SERVICES</li>
            </Link>
            <Link to={"/about"}>
              <li className="lists-nav">ABOUT</li>
            </Link>
            <Link to={"/contact"}>
              <li className="lists-nav">CONTACT ME</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
