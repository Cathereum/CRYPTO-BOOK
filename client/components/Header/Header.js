import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
  return (
    <Menu style={{ marginTop: "20px" }}>
      <Link href="/">
        <Menu.Item>Main Page</Menu.Item>
      </Link>
      <Link href="/add">
        <Menu.Item>Add Contact</Menu.Item>
      </Link>
      <Link href="/show">
        <Menu.Item>Show Contact</Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;
