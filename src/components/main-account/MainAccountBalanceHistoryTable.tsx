import { useState } from "react";
import { useGetMainAccountTransectionQuery } from "../../feature/admin-transection/adminTransectionApi";
import PaginationController from "../util/PaginationController";
const PER_PAGE = 5;
const MainAccountBalanceHistoryTable = () => {
  const { data, isLoading } = useGetMainAccountTransectionQuery(null);
  const [currentPage, setCurrentPage] = useState(1);
  const handleNext = () => {
    const totalRow = data ? data?.transections?.length : 0;
    if (currentPage < Math.ceil(totalRow / PER_PAGE)) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full relative">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Sender Info</th>
            <th> Receiver Info</th>
            <th>Amount</th>
            <th>Transection Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.transections
            ?.slice(
              (currentPage - 1) * PER_PAGE,
              (currentPage - 1) * PER_PAGE + PER_PAGE
            )
            ?.map((item) => {
              const senderUser = item.transection.senderUser;
              const receiverUser = item.transection.receiverUser;
              return (
                <tr key={item.transection._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    {senderUser.firstName} {senderUser.lastName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {senderUser.email}
                    </span>{" "}
                    <span className="badge badge-ghost badge-sm">
                      ({item.transection.senderUserType})
                    </span>
                  </td>
                  <td>
                    {receiverUser.firstName} {receiverUser.lastName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {receiverUser.email}
                    </span>{" "}
                    <span className="badge badge-ghost badge-sm">
                      ({item.transection.receiverUserType})
                    </span>
                  </td>
                  <td>{item.transection.amount}</td>
                  <td>{item.transection.transectionType}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Action</button>
                  </th>
                </tr>
              );
            })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Info</th>
            <th>Amount</th>
            <th>Transection type</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <div className="flex justify-end w-full ">
        <PaginationController
          currentPage={currentPage}
          next={handleNext}
          prev={handlePrev}
          totalPage={
            data ? Math.ceil(data?.transections?.length / PER_PAGE) : 0
          }
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default MainAccountBalanceHistoryTable;
