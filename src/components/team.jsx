import React from "react";
import { Header, Icon, Segment, Button, Image, List } from "semantic-ui-react";

export default function Assign() {
  const users = [
    { id: "1", name: "Bhanu Prasad" },
    { id: "2", name: "Sridevi" },
    { id: "3", name: "Krishna" },
  ];
  return (
    <Segment basic>
      <Header as="h1" icon textAlign="center" color="blue">
        <Icon name="users" circular />
        <Header.Content>Your Team</Header.Content>
      </Header>
      <Header as="h2" color="blue">
        <Header.Content>Members</Header.Content>
      </Header>
      <List divided verticalAlign="middle">
        {users.map((ele) => (
          <List.Item key={ele.id}>
            <List.Content floated="right">
              <Button icon="plus" basic color="green" content="Add" />
            </List.Content>
            <List.Content floated="right">
              <Button icon="eye" basic color="blue" content="View" />
            </List.Content>

            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lena.png"
            />
            <List.Content>{ele.name}</List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
}
