import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (e: any) => {
    setSearchVal(e.target.value);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("test");
    //redirect(`search/${searchVal}`);
    redirect("/details/1");
  };

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light ms-auto">
        <CContainer
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <CNavbarBrand href="/">Rick - API</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse " visible={visible}>
            <CNavbarNav className=" ms-auto">
              <CNavItem>
                <CNavLink href="/" active>
                  Home
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm
              className="d-flex"
              method="get"
              action={`search/${searchVal}`}
            >
              <CFormInput
                type="search"
                className="me-2"
                placeholder="Search"
                onChange={handleChange}
              />
              <CButton type="submit" color="success" onSubmit={handleClick}>
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
export default Navbar;
