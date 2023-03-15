import React from "react";

function List(props) {
  return (
    <>
      <table border={2} style={{ margin: "20px auto 0", width: "22rem" }}>
        <thead>
          <tr>
            <th colSpan={4}>TO DO LIST</th>
          </tr>
        </thead>
        <tbody>
          {props.task ? (
            props.task.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td colSpan={2}>{item}</td>
                  {/* <td>true</td>
                  <td
                    onClick={() => {
                      props.complete(i, item);
                    }}
                  >
                    Complete
                  </td> */}
                  <td
                    onClick={() => {
                      props.delete(i);
                    }}
                    style={{ width: "4rem" }}
                  >
                    Delete
                  </td>
                </tr>
              );
            })
          ) : (
            <th colSpan={4}>No Tasks</th>
          )}
        </tbody>
      </table>
    </>
  );
}

export default List;
