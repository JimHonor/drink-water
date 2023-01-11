import { Typography } from "antd";

const { Text } = Typography;

export default function Progress({ scale, goal }) {
  const waterRemained = `${goal * (1 - scale)}L`;

  const getPercentage = (number) => `${number * 100}%`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "128px",
        height: "280px",
        margin: "0 auto",
        backgroundColor: "#6ab3f8",
        border: "4px solid #144fc6",
        borderRadius: "0 0 36px 36px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: `${scale < 1 ? "flex" : "none"}`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: `${getPercentage(1 - scale)}`,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Text strong style={{ color: "#144fc6", fontSize: "1.2rem" }}>
          {waterRemained}
        </Text>
        <Text style={{ color: "#144fc6", fontSize: "12px" }}>Remained</Text>
      </div>
      <div
        style={{
          display: `${scale > 0 ? "flex" : "none"}`,
          justifyContent: "center",
          alignItems: "center",
          height: `${getPercentage(scale)}`,
          width: "100%",
        }}
      >
        <Text strong style={{ color: "#144fc6", fontSize: "1.5rem" }}>
          {getPercentage(scale)}
        </Text>
      </div>
    </div>
  );
}
