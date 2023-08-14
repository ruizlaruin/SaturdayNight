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

const Navbar = () => {
  const [visible, setVisible] = useState(false);
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
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
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
