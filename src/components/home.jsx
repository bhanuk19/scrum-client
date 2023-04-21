import { useEffect, useState } from "react";
import { Header, Segment, Tab } from "semantic-ui-react";

export default function Home() {
  const panes = [
    {
      menuItem: "Today's Tasks",
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: "Personal",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
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
      <Header as="h1">Dashboard</Header>
      <Header as="h2">
        {greeting}, <br />
        Bhanu K
      </Header>
      <Tab menu={{ secondary: true }} panes={panes} />
    </Segment>
  );
}
