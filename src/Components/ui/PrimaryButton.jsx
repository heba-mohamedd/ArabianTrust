import { Button } from "antd";

export default function PrimaryButton({
  text,
  icon,
  onClick,
  className,
  style,
}) {
  return (
    <Button
      type="primary"
      size="large"
      className={`flex items-center gap-2 mx-auto ${className}`}
      style={{
        backgroundColor: "#00963F",
        borderColor: "#00963F",
        ...style,
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </Button>
  );
}
