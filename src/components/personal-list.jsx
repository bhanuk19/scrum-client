import React from "react";
import { List } from "semantic-ui-react";

export default function PersonalTasks({ personalList }) {
  return (
    <List divided relaxed>
      {personalList.map((ele, index) => (
        <List.Item key={index}>
          <List.Content>
            <List.Header>{ele.task}</List.Header>
            {ele.description}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}
