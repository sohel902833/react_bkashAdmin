import { useEffect } from "react";
import { useCountUp } from "react-countup";
import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
  itemKey: string;
}
const DashboardItem: React.FC<Props> = ({ item, itemKey }) => {
  const navigate = useNavigate();
  const { start } = useCountUp({
    ref: `counter-${itemKey}`,
    end: item?.value,
    duration: 2,
  });

  useEffect(() => {
    start();
  }, [item, item.value]);

  const handleNavigate = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex items-center justify-center flex-col">
      <h3
        id={`counter-${itemKey}`}
        className="text-primary font-bold font-mono text-3xl"
      >
        {item.value}
      </h3>
      <p>{item.name}</p>
      <div
        className="cursor-pointer text-xs hover:border-b-1 border-b-primary"
        onClick={() => handleNavigate(item?.path)}
      >
        View Details
      </div>
    </div>
  );
};

export default DashboardItem;
