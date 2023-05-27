import { useState } from "react";
import AgentListTable from "../../components/agents/AgentListTable";
import CreateAgentModal from "../../components/agents/CreateAgentModal";
import CustomBarChart from "../../components/chart/CustomBarChart";
import AppHeader from "../../components/layout/AppHeader";
import { useGetAllAgentsQuery } from "../../feature/agents/agentsApi";
import { chartData } from "../main/data";

const AgentList = () => {
  const { isLoading, data } = useGetAllAgentsQuery(null);
  const [isTableView, setIsTableView] = useState(true);
  const [createAgentModal, setCreateAgentModal] = useState(false);
  const handleSetIsTableView = () => {
    setIsTableView((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="Agents" />
      <div className="px-4">
        <div className="inline-flex items-center justify-center w-full mt-4">
          <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex items-center justify-center flex-col">
            <h3 className="text-primary font-bold font-mono text-3xl">
              {data?.agents?.length}
            </h3>
            <p>Total Agents</p>
            <button
              onClick={() => setCreateAgentModal(true)}
              className="btn btn-primary mt-4"
            >
              Create New
            </button>
          </div>
        </div>
        <div className="btn-group mt-4">
          <button
            onClick={handleSetIsTableView}
            className={`btn ${isTableView ? "btn-active" : ""}`}
          >
            Table
          </button>
          <button
            onClick={handleSetIsTableView}
            className={`btn ${!isTableView ? "btn-active" : ""}`}
          >
            Graph
          </button>
        </div>
        <br />
        <br />
        <br />
        {isTableView ? (
          <AgentListTable />
        ) : (
          <CustomBarChart
            title="Agent Create History"
            value={chartData}
            height={400}
          />
        )}
      </div>
      <CreateAgentModal open={createAgentModal} setOpen={setCreateAgentModal} />
    </div>
  );
};

export default AgentList;
