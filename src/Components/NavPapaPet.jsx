import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Search from "./Search"; // Import your Search component

const NavPapaPet = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollY = useRef(0);
  const circle = useRef(null);
  const [user, setUser] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const mobileMenuRef = useRef(null);

  const [anchorElUser, setAnchorElUser] = useState(null);

  // State to control search modal
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      name: "Profile",
      link: "/papapet/dashboard",
    },
  ];

  const openMenu = () => {
    setMenuVisible(true);
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMenuVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        gsap.to(circle.current, { top: "-300%", duration: 1 });
      }
      if (currentScrollY > prevScrollY.current && currentScrollY > 20) {
        gsap.to(circle.current, { top: "-400%", duration: 0.5 });
        setShowNavbar(false);
      }
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else if (!mobileMenuOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setMenuVisible(false),
      });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Search Modal */}
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div
        className={`w-full fixed top-0 left-0 z-40 font-semibold text-black flex items-center px-16 justify-between p-5 flex-col
        transition-transform duration-300 max-md:px-5 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between pb-2">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <img className="object-contain h-10" src="/logo.png" alt="logo" />
              <h1 className="text-2xl font-semibold text-[#0D9899]">PaPaPet</h1>
            </div>
          </Link>
          <div className=" text-sm lg:text-lg whitespace-nowrap px-5 flex items-center justify-center gap-7 relative z-20 max-md:hidden">
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">Pet Supplies</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">About Us</Link>
            {/* Desktop Search Icon */}
          </div>

          {user ? (
            <div className="flex items-center justify-center gap-2">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="User Avatar"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link to={setting.link}>
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem key="Logout" onClick={() => setUser(null)}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <h1 className="font-semibold text-black">Hi, {user?.name}</h1>
            </div>
          ) : (
            <div className="flex gap-10">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-[#FFAD22] text-2xl p-2 hover:text-orange-400 rounded-full transition-all duration-300"
                aria-label="Open search"
                style={{ lineHeight: 0 }}
              >
                <i className="ri-search-line"></i>
              </button>
              <Link
                to="/papapet/auth"
                className="max-md:hidden text-sm lg:text-lg flex items-center justify-center gap-2"
              >
                Sign in
                <i className="ri-arrow-right-circle-fill text-lg"></i>
              </Link>
            </div>
          )}
        </div>

        <div
          ref={circle}
          className="w-[20vw] h-[20vw] absolute -top-[210%] left-1/2 -translate-x-1/2 
             bg-[#FFAD22] rounded-full flex items-center justify-center gap-[2vw] "
        ></div>

        <div
          className="mobile absolute -top-[115%] -right-[25%] w-[60vw] h-[60vw] bg-[#FFAD22] rounded-full 
  flex items-center justify-center gap-6 z-10 pr-20 pt-14 md:hidden"
        >
          <div className="flex items-center gap-4 vsmall md:hidden">
            {/* Mobile Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white text-2xl p-2 hover:bg-white hover:text-[#0D9899] rounded-full transition-all duration-300"
              aria-label="Open search"
              style={{ lineHeight: 0 }}
            >
              <i className="ri-search-line"></i>
            </button>
            <button
              onClick={openMenu}
              className="text-white text-2xl p-2 hover:bg-white hover:text-[#0D9899] rounded-full transition-all duration-300"
            >
              <i className="ri-menu-4-fill"></i>
            </button>
          </div>
        </div>
      </div>

      {menuVisible && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 bg-white text-black flex flex-col p-6 gap-6 w-full h-full md:hidden"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#0D9899]">PaPaPet</h2>
            <button onClick={closeMenu}>
              <i className="ri-close-line text-3xl text-gray-600"></i>
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="bg-[#8B5CF6] text-white px-4 py-2 rounded-full">
              Connect Phantom Wallet
            </button>
            <Link
              to="/papapet/auth"
              onClick={closeMenu}
              className="bg-[#FFAD22] text-white px-4 py-2 rounded-full text-center"
            >
              Sign In / Sign Up
            </Link>

            <hr className="border-gray-300" />

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/" onClick={closeMenu}>
              Pet Supplies
            </Link>
            <Link to="/" onClick={closeMenu}>
              Blogs
            </Link>
            <Link to="/" onClick={closeMenu}>
              About Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavPapaPet;
