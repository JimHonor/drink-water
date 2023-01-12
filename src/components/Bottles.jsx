import { Row, Col, Typography, Space } from "antd";
const { Text } = Typography;

export default function Bottles({ count, onDrinkClick }) {
  const styleBottle = (isDrink) =>
    isDrink
      ? { backgroundColor: "#6ab3f8", color: "white" }
      : { backgroundColor: "#ecf4fc", color: "#787ed9" };

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>
        <Text style={{ color: "rgb(250, 250, 250)" }}>
          Select how many water glasses you had
        </Text>
      </div>
      <Space direction="vertical" size="middle">
        {[null, null].map((_, index) => (
          <Space key={index} size="middle">
            {new Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "80px",
                  margin: "0 auto",
                  border: "2px solid #144fc6",
                  borderRadius: "0 0 12px 12px",
                  ...styleBottle(index < count),
                }}
                onClick={() => onDrinkClick(index + 1)}
              >
                <span>250</span>
                <span>ml</span>
              </div>
            ))}
          </Space>
        ))}
      </Space>
    </>
  );
}
