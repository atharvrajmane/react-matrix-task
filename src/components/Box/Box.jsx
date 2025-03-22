import "./Box.css";
export default function Box({ color, onClick }) {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}
