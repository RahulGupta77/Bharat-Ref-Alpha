import { Link, Navbar, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import Logo from "../../assets/Logo.png";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
  ];
  return (
    <Navbar
      isBordered
      css={{
        overflow: "hidden",
        "& .nextui-navbar-container": {
          background: "$background",
          borderBottom: "none",
        },
      }}
    >
      <Navbar.Brand>
        <Link style={{ color: "black" }} href="/">
          <Image src={Logo} alt="Logo" width={50} height={35} />

          <Text
            b
            color="inherit"
            hideIn="xs"
            css={{
              pl: "1rem",
              fontSize: "1.3rem",
            }}
          >
            Bharat Refrigeration
          </Text>
        </Link>
      </Navbar.Brand>

      {/* <Navbar.Content>
        <Navbar.Item>
          <Button auto flat href="#">
            Contact Us
          </Button>
        </Navbar.Item>
      </Navbar.Content> */}
    </Navbar>
  );
};
