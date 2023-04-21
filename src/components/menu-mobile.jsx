import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";

export default function MobileMenu() {
  const handleLogout = () => {};
  function HamIcon() {
    return <i className="big bars icon inverted" />;
  }

  function CloseIcon() {
    return <i className="big close red icon" style={{ zIndex: 2 }} />;
  }
  const [icon, setIcon] = useState(HamIcon);
  const [visible, setVisible] = useState(false);
  const handleItemClick = (e, { name }) => {
    visible ? hideSidebar() : showSidebar();
  };
  const hideSidebar = () => {
    setIcon(HamIcon);
    setVisible(false);
  };
  const showSidebar = () => {
    setIcon(CloseIcon);
    setVisible(true);
  };
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar();
  };
  function Overlay() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.795)",
          position: "fixed",
          height: "100vh",
          width: "100%",
          zIndex: "2",
        }}
        onClick={toggleSidebar}
      />
    );
  }
  return (
    <>
      {visible && <Overlay />}
      <Menu inverted color={"blue"} size="tiny" borderless attached fixed>
        <Menu.Item>
          <Image
            src={
              "https://www.backflipt.com/new/assets/img/backflipt-logo-all.svg"
            }
            size="tiny"
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={toggleSidebar}>{icon}</Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        vertical
        visible={visible}
        color={"blue"}
        width="thin"
        style={{ width: "60%" }}
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
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            avatar
          />
          <span>Bhanu K</span>
        </Menu.Item>
        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name="home"
              as={NavLink}
              to="home"
              onClick={handleItemClick}
            >
              Your Tasks
            </Menu.Item>
            <Menu.Item
              name="team"
              as={NavLink}
              to="assign"
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
          onClick={handleItemClick}
        >
          <Icon name="calendar alternate outline icon" />
          History
        </Menu.Item>
        <Menu.Item name="teams" onClick={handleItemClick}>
          <Icon name="grid layout" />
          Teams
        </Menu.Item>
        <Menu.Item name="notifications" onClick={handleItemClick}>
          <Icon name="bell" />
          Notifications
        </Menu.Item>

        <Menu.Item icon="settings" name="Account Settings" as={"a"} />
        <Menu.Item onClick={handleLogout}>
          <Icon name="logout" style={{ color: "red" }}></Icon>
          <span>Logout</span>
        </Menu.Item>
      </Sidebar>
    </>
  );
}
