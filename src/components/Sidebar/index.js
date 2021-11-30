import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="design" onClick={toggle}>
            Design
          </SidebarLink>
          <SidebarLink to="schematic" onClick={toggle}>
            Schematic
          </SidebarLink>
          <SidebarLink to="compliment" onClick={toggle}>
            Compliment
          </SidebarLink>
          <SidebarLink to="origins" onClick={toggle}>
            Origins
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
