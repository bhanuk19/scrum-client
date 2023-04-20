import React from "react";
import {
  Checkbox,
  Grid,
  GridColumn,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import MainMenu from "./Menu";

const SidebarExampleSidebar = () => {
  return (
    <Grid>
      <Grid.Column computer={3} tablet={4} only="computer tablet" style={{height:"100vh"}}>
        <MainMenu />
      </Grid.Column>
      <Grid.Column only="mobile" width={16}>
        <Menu inverted color={"blue"} size="tiny" borderless attached>
          <Menu.Menu position="right">
            <Menu.Item></Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
      <Grid.Column computer={13} tablet={12} mobile={16} style={{overflowY:"auto", height:"100vh"}}>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
        <Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment><Segment basic>
          <Header as="h3">Application Content</Header>
          <Image src="/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SidebarExampleSidebar;
