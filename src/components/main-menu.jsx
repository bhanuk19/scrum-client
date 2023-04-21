import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Icon, Image, Menu } from "semantic-ui-react";

export default function MainMenu() {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  useEffect(() => {
    setActiveItem(false);
  }, [activeItem]);
  return (
    <Menu
      vertical
      color={"blue"}
      size="medium"
      inverted
      style={{ height: "100vh", borderRadius: "0px", width:"100%"}}
    >
      <Menu.Item>
        <Image
          src={
            "https://www.backflipt.com/new/assets/img/backflipt-logo-all.svg"
          }
          size="small"
        />
      </Menu.Item>
      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as={NavLink}
            to="home"
            onClick={handleItemClick}
          >
            Your Tasks
          </Menu.Item>
          <Menu.Item
            name="team"
            as={NavLink}
            to="team"
            active={activeItem === "team"}
            onClick={handleItemClick}
          >
            Your Team
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item
        name="history"
        as={NavLink}
        to="history"
        active={activeItem === "history"}
        onClick={handleItemClick}
      >
        <Icon name="calendar alternate outline icon" />
        History
      </Menu.Item>
      <Menu.Item
        name="teams"
        active={activeItem === "teams"}
        onClick={handleItemClick}
      >
        <Icon name="grid layout" />
        Teams
      </Menu.Item>
      <Menu.Item
        name="notifications"
        active={activeItem === "notifications"}
        onClick={handleItemClick}
      >
        <Icon name="bell" />
        Notifications
      </Menu.Item>
      <Dropdown item icon={"user"} text="bhanuk">
        <Dropdown.Menu>
          <Dropdown.Item icon="settings" text="Account Settings" />
          <Dropdown.Item icon="logout" text="Logout" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
