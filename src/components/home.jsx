import { useEffect, useState } from "react";
import { Header, Segment, Tab } from "semantic-ui-react";
import TaskList from "./tasklist";
import PersonalTasks from "./personal-list";

export default function Home() {
  const todayTasks = [
    {
      _id: 1,
      task: "Create Layout",
      size: "Small",
      priority: "Medium",
      status: "Done",
    },
    {
      _id: 2,
      task: "Create Layout",
      size: "Small",
      priority: "Medium",
      status: "On-Going",
    },
    {
      _id: 3,
      task: "Create Layout",
      size: "Small",
      priority: "Medium",
      status: "Blocked",
    },
  ];
  const personalTasks = [
    { task: "Task-1", description: "Test task 1" },
    { task: "Task-1", description: "Test task 1" },
    { task: "Task-1", description: "Test task 1" },
  ];
  const panes = [
    {
      menuItem: "Today's Tasks",
      render: () => (
        <Tab.Pane attached={false}>
          <TaskList tasklist={todayTasks} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Personal Tasks",
      render: () => (
        <Tab.Pane attached={false}>
          <PersonalTasks personalList={personalTasks} />
        </Tab.Pane>
      ),
    },
  ];

  const [greeting, setGreeting] = useState("Good");
  useEffect(() => {
    const myDate = new Date();
    let hrs = myDate.getHours();
    if (hrs < 12) setGreeting("Good Morning");
    else if (hrs >= 12 && hrs <= 17) setGreeting("Good Afternoon");
    else if (hrs >= 17 && hrs <= 24) setGreeting("Good Evening");
  }, []);
  return (
    <Segment basic>
      <Header as="h1" textAlign="center" color="blue">
        <Header.Content>Dashboard</Header.Content>
      </Header>
      <Header as="h2" color="blue">
        {greeting},<br />
        Bhanu K
      </Header>
      <Tab menu={{ secondary: true }} panes={panes} />
    </Segment>
  );
}
