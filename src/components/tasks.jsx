import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const SidebarExampleSidebar = () => {
  return (
    <Grid stackable>
      <Grid.Column computer={3} tablet={3} mobile={16}>
        <Sidebar as={Menu} vertical visible>
          <Menu.Item as="a">Home</Menu.Item>
          <Menu.Item as="a">Tasks</Menu.Item>
          <Menu.Item as="a">Tasks</Menu.Item>
        </Sidebar>
      </Grid.Column>

      <Grid.Column computer={13} tablet={13} mobile={16}>
        <Header as="h3">Application Content</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Grid.Column>
    </Grid>
  );
};

export default SidebarExampleSidebar;
