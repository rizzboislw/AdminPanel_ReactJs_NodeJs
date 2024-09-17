import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { default as logoutIcon } from "../assets/svg/logout.svg";
import { default as menuIcon } from "../assets/svg/menu.svg";
import { useAuth } from "../contexts/authentication";
import { useDashboardInfo } from "../hooks/useDashboardInfo";

function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { logout } = useAuth();
  const { username } = useDashboardInfo();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
        border="1px"
        borderColor="#E7E7E7"
      >
        <img src={menuIcon} alt="menu-icon" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{username}</DrawerHeader>

          <Divider />

          <DrawerBody></DrawerBody>

          <DrawerFooter justifyContent="start">
            <div
              onClick={logout}
              className="hover:cursor-pointer flex gap-1 hover:scale-105 duration-200"
            >
              <img src={logoutIcon} alt="logout-icon" onClick={logout} />
              <p className="text-[#055894] font-semibold">Logout</p>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarDrawer;
