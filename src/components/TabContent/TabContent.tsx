import { useTabs } from "../../contexts/TabsContext";

interface PlaceholderProps {
  rows?: number;
  cols?: number;
}

type TabContentProps = {
  value?: string | number;
} & PlaceholderProps;

function Placeholder({ rows = 1, cols = 1 }: PlaceholderProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "8px",
        maxWidth: "600px",
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#e0e0e0",
            height: "100px",
            borderRadius: "4px",
          }}
        ></div>
      ))}
    </div>
  );
}

const TabContent = ({ value, rows, cols }: TabContentProps) => {
  const { selectedTab } = useTabs();

  if (selectedTab !== value) {
    return null;
  }

  return (
    <div role="tabpanel">
      <Placeholder rows={rows} cols={cols} />
    </div>
  );
};

export default TabContent;
