import "./styles/style.css";

const HoverLinks = ({ text, disableCursor = true }: { text: string; disableCursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={disableCursor ? "disable" : undefined}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
