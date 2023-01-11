import { Typography } from "antd";
import { useState } from "react";
import Bottles from "./components/Bottles";
import Progress from "./components/Progress";

const { Title, Text } = Typography;

const App = () => {
  const GOAL = 2;
  const UNIT = 0.25;
  const COUNTS_TOTAL = GOAL / UNIT;

  const [count, setCount] = useState(0);

  const scale = count / COUNTS_TOTAL;

  const onDrinkClick = (_count) => {
    if (_count === count) {
      _count = _count - 1;
    }
    setCount(_count);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        padding: "18px",
        backgroundColor: "#3f94e4",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Title
          style={{
            color: "rgb(250, 250, 250)",
            fontSize: "1.8rem",
            marginBottom: "4px",
          }}
        >
          Drink Water
        </Title>
        <Text strong style={{ color: "rgb(250, 250, 250)" }}>
          Goal: {GOAL} liters
        </Text>
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <Progress scale={scale} goal={GOAL} />
      </div>
      <Bottles count={count} onDrinkClick={onDrinkClick} />
    </div>
  );
};

export default App;
