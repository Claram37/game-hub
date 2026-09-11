import { Dropdown } from "react-bootstrap";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Dropdown>
      <Dropdown.Toggle variant="subtle">
        Order by: {currentSortOrder?.label || "Relevance"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {sortOrders.map((order) => (
          <Dropdown.Item
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortSelector;
