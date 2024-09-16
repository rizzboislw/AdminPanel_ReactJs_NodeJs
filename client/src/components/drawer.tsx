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

function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

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
          <DrawerHeader>admin username</DrawerHeader>

          <Divider />

          <DrawerBody></DrawerBody>

          <DrawerFooter display="flex" justifyContent="start">
            <img src={logoutIcon} alt="logout-icon" />
            <p>Logout</p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarDrawer;
