import React, { useState } from "react";
import { Dropdown, Icon, Image, Input, Menu, Radio } from "semantic-ui-react";

export default function MainMenu() {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu
      vertical
      color={"blue"}
      size="large"
      inverted
      style={{ height: "100vh", borderRadius: "0px", width: "100%" }}
    >
      <Menu.Item>
        <Image
          src={"https://www.backflipt.com/new/assets/img/backflipt-logo-all.svg"}
          size="small"
        />
      </Menu.Item>
      <Menu.Item>
        Home
        <Menu.Menu>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          >
            Your Tasks
          </Menu.Item>
          <Menu.Item
            name="assign"
            active={activeItem === "assign"}
            onClick={handleItemClick}
          >
            Assign Task
          </Menu.Item>
        </Menu.Menu>
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
    </Menu>
  );
}
