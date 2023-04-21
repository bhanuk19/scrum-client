import React, { useState } from "react";
import {
  Accordion,
  Button,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import moment from "moment";
import { DateInput } from "semantic-ui-calendar-react";

export default function History() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const currentIndex = activeIndex;
    const newIndex = currentIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const handleTodayClick = () => {
    setStartDate(moment().format("MM/DD/YYYY"));
    setEndDate(moment().format("MM/DD/YYYY"));
  };

  const handleYesterdayClick = () => {
    setStartDate(moment().subtract(1, "days").format("MM/DD/YYYY"));
    setEndDate(moment().subtract(1, "days").format("MM/DD/YYYY"));
  };

  const handleThisWeekClick = () => {
    setStartDate(moment().startOf("week").format("MM/DD/YYYY"));
    setEndDate(moment().format("MM/DD/YYYY"));
  };

  const handleThisMonthClick = () => {
    setStartDate(moment().startOf("month").format("MM/DD/YYYY"));
    setEndDate(moment().format("MM/DD/YYYY"));
  };
  const handleGoClick = () => {
    if (!startDate || !endDate) {
      alert("Please select a start and end date.");
      return;
    }
    console.log("Selected date range:", startDate, "to", endDate);
    handleClick(null, 0);
  };

  return (
    <Segment basic>
      <Header as="h1" icon textAlign="center" color="blue">
        <Icon name="history" circular />
        <Header.Content>Task History</Header.Content>
      </Header>
      <Accordion fluid styled>
        <Accordion.Title icon={"filter"} index={0} onClick={handleClick}>
          <Icon name="filter"></Icon> Pick Date
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div className="date-pick-button">
            <Grid>
              <Grid.Column mobile={8} tablet={4} computer={3}>
                <Button onClick={handleTodayClick} color="blue" basic>
                  Today
                </Button>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={4} computer={3}>
                <Button onClick={handleYesterdayClick} color="blue" basic>
                  Yesterday
                </Button>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={4} computer={3}>
                <Button onClick={handleThisWeekClick} color="blue" basic>
                  This Week
                </Button>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={4} computer={3}>
                <Button onClick={handleThisMonthClick} color="blue" basic>
                  This Month
                </Button>
              </Grid.Column>
            </Grid>
            <Grid className="date-picker">
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <DateInput
                  name="start"
                  placeholder="Start Date"
                  value={startDate}
                  iconPosition="left"
                  onChange={(event, { value }) => setStartDate(value)}
                />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <DateInput
                  name="end"
                  placeholder="End Date"
                  value={endDate}
                  iconPosition="left"
                  onChange={(event, { value }) => setEndDate(value)}
                />
              </Grid.Column>
            </Grid>
            <Button
              onClick={handleGoClick}
              icon="search"
              content="Fetch Tasks"
              color="blue"
              style={{ marginTop: "20px", width: "150px" }}
            />
            <Button
              icon="history"
              content="Reset"
              color="red"
              basic
              onClick={() => {
                setEndDate("");
                setStartDate("");
              }}
              style={{ marginTop: "20px", width: "150px" }}
            />
          </div>
        </Accordion.Content>
      </Accordion>
    </Segment>
  );
}
