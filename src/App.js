import "./App.css";
import { data } from "./data.js";
import { User } from "./componets/index.jsx";
import { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const renderCount = () => {
    switch (country) {
      case 1:
        let arr7 = data.filter((el) => {
          return el.age < 18 && el.country == "Kyrgyz";
        });

        return arr7.map((el, id) => {
          return <User data={el} key={id} />;
        });

      case 2:
        let arr8 = data.filter((el) => {
          return el.age < 18 && el.country == "Keniya";
        });

        return arr8.map((el, id) => {
          return <User data={el} key={id} />;
        });
      default:
        return "";
    }
  };

  const renserUsers = () => {
    switch (age) {
      case 1:
        let arr = data.filter((el) => {
          return el.age < 18;
        });
        return (
          <>
            <div>
              <button className="btn1" onClick={() => setCountry(1)}>
                Kyrgyz
              </button>
              <button className="btn1" onClick={() => setCountry(2)}>
                Abroad
              </button>
              <div>{renderCount()}</div>
            </div>
            {arr.map((el, id) => {
              return <User data={el} key={id} />;
            })}
          </>
        );

      case 2:
        let arr1 = data.filter((el) => {
          return el.age > 18 && el.age < 25;
        });
        return arr1.map((el, id) => {
          return <User data={el} key={id} />;
        });

      case 3:
        let arr2 = data.filter((el) => {
          return el.age > 24;
        });
        return arr2.map((el, id) => {
          return <User data={el} key={id} />;
        });

      case 4:
        return data.map((el, id) => {
          return <User data={el} key={id} />;
        });

      default:
        return "";
    }
  };

  // const onClick = () => {
  //   return  <div>
  //       <button onClick={() => setCountry("KYRGYZ")}> Kyrgyz</button>
  //       <button  onClick={() => setCountry("KENIYA")}>Keniya</button>
  //       <div>{renderCount()}</div>
  //     </div>

  // }

  return (
    <div className="App">
      <div className="btn-group">
        <button className="btn" onClick={() => setAge(1)}>
          меньше 18
        </button>
        <button className="btn" onClick={() => setAge(2)}>
          от 18 до 24
        </button>
        <button className="btn" onClick={() => setAge(3)}>
          от 24 до 50
        </button>
        <button className="btn" onClick={() => setAge(4)}>
          Все участники
        </button>
      </div>

      <div className="container">{renserUsers()}</div>
    </div>
  );
}

export default App;
