import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { Button, Icon, Image, Modal, Table } from "semantic-ui-react";

function tableReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

export default function TaskList({ tasklist }) {
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(false);
  const [state, dispatch] = useReducer(tableReducer, {
    column: null,
    data: tasklist,
    direction: null,
  });
  const { column, data, direction } = state;
  useEffect(() => {}, [currentTask]);
  return (
    <>
      <Table sortable celled fixed color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "Task" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "Task" })}
            >
              Task Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "Priority" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "Priority" })
              }
            >
              Priority
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "Size" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "Size" })}
            >
              Size
            </Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ _id, task, priority, size, status }, index) => (
            <Table.Row key={index}>
              <Table.Cell>{task}</Table.Cell>
              <Table.Cell>{priority}</Table.Cell>
              <Table.Cell>{size}</Table.Cell>
              <Table.Cell>
                {status}
                {status === "Done" ? (
                  <i
                    class="fa-regular fa-circle-check"
                    style={{ color: "#64BC44", marginLeft: "10px" }}
                  ></i>
                ) : status === "On-Going" ? (
                  <i
                    class="fa-regular fa-hourglass-half"
                    style={{ color: "#FFB717", marginLeft: "10px" }}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-ban"
                    style={{ color: "#DB0000", marginLeft: "10px" }}
                  ></i>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button
                  icon={"eye"}
                  content="View"
                  color="blue"
                  basic
                  size="mini"
                  onClick={() => {
                    setCurrentTask(data[index]);
                    setOpen(true);
                  }}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {currentTask ? (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header>{currentTask.task}</Modal.Header>
          <Modal.Content image scrolling>
            <Image
              size="medium"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              wrapped
            />

            <Modal.Description>
              <p>
                This is an example of expanded content that will cause the
                modal's dimmer to scroll.
              </p>

              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ marginBottom: 10 }}
              />
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)} primary>
              Okay <Icon name="chevron right" />
            </Button>
          </Modal.Actions>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
