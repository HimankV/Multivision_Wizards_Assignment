// import React from "react";
// import { insertStudent } from "./create_user";
import { createStudent } from "./create_user";

function Form() {
  return (
    <div
      style={{
        height: "250px",
        width: "600px",
        // border: "1px solid blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica_Neue",
      }}
    >
      <form action={createStudent}>
        <div
          style={{
            // border: "1px solid deepskyblue",
            width: "500px",
            // backgroundColor: "",
          }}
        >
          <label
            for="Name"
            style={{
              marginRight: "10px",
              //   border: "1px solid black",
              marginLeft: "4px",
            }}
          >
            Enter Your Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Enter your Name"
            style={{
              border: "1px solid black",
              //   height: "20px",
              //   padding: "5px",
              paddingInline: "5px",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            // border: "2px solid pink",
            display: "flex",
            // justifyContent: "flex-start",
          }}
        >
          <label
            for="Class"
            style={{
              //   border: "2px solid red",
              //   margin: "5px",
              marginRight: "10px",
              marginLeft: "34px",
            }}
          >
            Select Class
          </label>
          <select
            name="Class"
            id="Class"
            style={
              {
                //   border: "2px solid cyan",
              }
            }
          >
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div
          style={{
            // border: "2px solid orange",
            display: "flex",
            justifyContent: "",
          }}
        >
          <label
            for="Section"
            style={{
              marginRight: "10px",
              marginLeft: "69px",
              //   border: "1px solid black",
            }}
          >
            Section{" "}
          </label>
          <div
            style={{
              //   border: "1px solid brown",
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "2px",
              width: "125px",
            }}
          >
            <label for="A">A</label>
            <input type="radio" id="A" name="Section" value="A" />

            <label for="B">B</label>
            <input type="radio" id="B" name="Section" value="B" />

            <label for="C">C</label>
            <input type="radio" id="C" name="Section" value="C" />
          </div>
        </div>

        <div
          style={{
            // border: "2px solid pink",
            display: "flex",
            // justifyContent: "flex-start",
          }}
        >
          <label
            for="Month"
            style={{
              //   border: "2px solid red",
              //   margin: "5px",
              marginRight: "10px",
              marginLeft: "28px",
            }}
          >
            Select Month{"    "}
          </label>
          <select
            name="Month"
            id="Month"
            style={
              {
                //   border: "2px solid cyan",
              }
            }
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <input
            type="submit"
            cursor="pointer"
            style={{
              cursor: "pointer",
              width: "25%",
              backgroundColor: "pink",
              borderRadius: "2px",
              marginTop: "10px",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
