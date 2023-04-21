import { Grid } from "semantic-ui-react";
import MainMenu from "./main-menu";
import MobileMenu from "./menu-mobile";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Grid>
      <Grid.Column
        computer={3}
        tablet={4}
        only="computer tablet"
        style={{ height: "100vh" }}
      >
        <MainMenu />
      </Grid.Column>
      <Grid.Column only="mobile" width={16}>
        <MobileMenu />
      </Grid.Column>
      <Grid.Column
        computer={13}
        tablet={12}
        mobile={16}
        style={{ overflowY: "auto", height: "fit-content"}}
      >
        <Outlet />
      </Grid.Column>
    </Grid>
  );
}
