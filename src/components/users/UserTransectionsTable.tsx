import { Link } from "react-router-dom";
import { ITransection } from "../../feature/user/user.types";
import usePaginationInfo from "../../hooks/usePaginationInfo";
import PaginationController from "../util/PaginationController";
const PER_PAGE = 5;
const UserTransectionsTable = ({
  transections,
}: {
  transections: ITransection[];
}) => {
  const { handleNext, handlePrev, currentPage } = usePaginationInfo(
    transections ? transections?.length : 0,
    PER_PAGE
  );

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
          {transections
            ?.slice(
              (currentPage - 1) * PER_PAGE,
              (currentPage - 1) * PER_PAGE + PER_PAGE
            )
            ?.map((item) => {
              const senderUser = item.senderUser;
              const receiverUser = item.receiverUser;
              return (
                <tr key={item._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <Link to={`/user/${senderUser?._id}`}>
                      {senderUser.firstName} {senderUser.lastName}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {senderUser.email}
                      </span>{" "}
                      <span className="badge badge-ghost badge-sm">
                        ({item.senderUserType})
                      </span>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/user/${receiverUser?._id}`}>
                      {receiverUser.firstName} {receiverUser.lastName}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {receiverUser.email}
                      </span>{" "}
                      <span className="badge badge-ghost badge-sm">
                        ({item.receiverUserType})
                      </span>
                    </Link>
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.transectionType}</td>
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
            transections ? Math.ceil(transections?.length / PER_PAGE) : 0
          }
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default UserTransectionsTable;
