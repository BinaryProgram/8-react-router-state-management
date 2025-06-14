import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const ReChart = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  const data = [
    { name: "iPhone 14", brand: "Apple", price: 999 },
    { name: "Galaxy S23", brand: "Samsung", price: 899 },
    { name: "Pixel 8", brand: "Google", price: 799 },
    { name: "OnePlus 11", brand: "OnePlus", price: 749 },
    { name: "Xperia 5 V", brand: "Sony", price: 949 },
    { name: "Moto Edge+", brand: "Motorola", price: 699 },
    { name: "Redmi Note 13 Pro", brand: "Xiaomi", price: 399 },
    { name: "Galaxy A54", brand: "Samsung", price: 449 },
    { name: "iPhone SE (2022)", brand: "Apple", price: 429 },
    { name: "Nothing Phone (2)", brand: "Nothing", price: 599 },
  ];
  const customToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div
          style={{
            background: "#000",
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 5,
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <p>
            <strong>{item.name}</strong>
          </p>
          <p>Brand: {item.brand}</p>
          <p>Price: ${item.price}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <BarChart width={1000} height={300} data={data}>
        <CartesianGrid />
        <XAxis dataKey="brand" />
        <YAxis />
        <Tooltip content={customToolTip}></Tooltip>
        <Legend />
        <Bar
          dataKey="price"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </div>
  );
};

export default ReChart;
