import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../feature/auth/auth.types";
import { IUserType } from "../../feature/user/user.types";
import { useGetAllUserQuery } from "../../feature/user/userApi";
import usePaginationInfo from "../../hooks/usePaginationInfo";
import PaginationController from "../util/PaginationController";
import AddBalanceToUserAccountModal from "./AddBalanceToUserAccountModal";
const PER_PAGE = 5;
const UserListTable = () => {
  const { isLoading, data } = useGetAllUserQuery(null);
  const { handleNext, handlePrev, currentPage } = usePaginationInfo(
    data ? data?.length : 0,
    PER_PAGE
  );
  const [addBalanceModal, setAddBalanceModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUserType | null>(null);
  const navigate = useNavigate();
  const handleAddBalance = (user: IUserType) => {
    setSelectedUser(user);
    setAddBalanceModal(true);
  };
  const handleNavigateToUserPage = (userId: string) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Info</th>
            <th>Amount</th>
            <th>Register Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.slice(
              (currentPage - 1) * PER_PAGE,
              (currentPage - 1) * PER_PAGE + PER_PAGE
            )
            ?.map((item) => (
              <tr key={item._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {item?.firstName} {item.lastName}
                      </div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Phone: {item?.phone}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Id No: {item?.idNo}
                  </span>
                </td>
                <td>{item?.balance}</td>
                <td>{new Date(item?.createdAt).toLocaleString()}</td>
                <th>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAddBalance(item)}
                      className="btn btn-primary btn-xs"
                    >
                      Add Balance
                    </button>
                    <button
                      onClick={() => handleNavigateToUserPage(item?._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      details
                    </button>
                  </div>
                </th>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <div className="flex justify-end w-full ">
        <PaginationController
          currentPage={currentPage}
          next={handleNext}
          prev={handlePrev}
          totalPage={data ? Math.ceil(data?.length / PER_PAGE) : 0}
        />
      </div>
      <br />
      <br />
      <AddBalanceToUserAccountModal
        email={selectedUser?.email as string}
        open={addBalanceModal}
        setOpen={setAddBalanceModal}
      />
    </div>
  );
};

export default UserListTable;
