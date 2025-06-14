import { FaCheckCircle } from "react-icons/fa";

const PriceOption = (props) => {
  const { gymDetail } = props;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{gymDetail.plan}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{gymDetail.plan}</h2>
          <span className="text-xl">{gymDetail.price.monthly}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-grow">
          {gymDetail.features.map((feature, idx) => (
            <li key={idx} className="text-xl flex items-center gap-2">
              <span>
                <FaCheckCircle className="text-green-500"></FaCheckCircle>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PriceOption;
