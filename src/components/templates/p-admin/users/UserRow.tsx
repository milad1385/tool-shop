"use client";
import Table from "@/components/modules/p-admin/Table";
import { banUser, improveUserRoleToAdmin } from "@/libs/actions/user.action";
import { IUser, UserRoleEnums } from "@/libs/types";
import { useAuthStore } from "@/stores/auth.store";
import { formatDate, getRoleNames } from "@/utils/helper";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaBan, FaCheck, FaTrash, FaUser } from "react-icons/fa";
import { RiAdminFill, RiUser2Fill } from "react-icons/ri";

function UserRow({
  index,
  fullname,
  username,
  email,
  phone,
  createdAt,
  roles,
  _id,
  status,
}: IUser) {
  const { user } = useAuthStore();
  const [isChangingRole, startChangingRole] = useTransition();
  const [isChangingStatus, startChangingStatus] = useTransition();

  const handleUserRoleChange = () => {
    startChangingRole(async () => {
      const result = await improveUserRoleToAdmin(_id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });

    return true;
  };

  const handleUserStatusChange = () => {
    startChangingRole(async () => {
      const result = await banUser(_id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });

    return true;
  };
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{fullname}</td>
      <td>{username}</td>
      {/* <td>{email}</td> */}
      <td>{phone}</td>
      <td>{getRoleNames(roles)}</td>
      <td>{formatDate(createdAt)}</td>

      <td>
        <div
          className={`${status === "banned" ? "bg-red-600" : "bg-green-500"} text-white rounded-3xl py-2 px-4`}
        >
          {status === "active" ? "فعال" : "بن شده"}
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
          {status === "banned" ? (
            <button onClick={() => handleUserStatusChange()}>
              <FaCheck className="text-green-500 text-base md:text-xl" />
            </button>
          ) : (
            <button onClick={() => handleUserStatusChange()}>
              <FaBan className="text-orange-500 text-base md:text-xl" />
            </button>
          )}
          {user?.roles?.includes(UserRoleEnums.SUPER_ADMIN) && (
            <>
              {roles.includes(UserRoleEnums.ADMIN) ? (
                <button
                  onClick={() => handleUserRoleChange()}
                  disabled={isChangingRole}
                >
                  <RiUser2Fill className="text-sky-500 text-base md:text-2xl" />
                </button>
              ) : (
                <button
                  onClick={() => handleUserRoleChange()}
                  disabled={isChangingRole}
                >
                  <RiAdminFill className="text-blue-800 text-base md:text-2xl" />
                </button>
              )}
              <FaTrash className="text-red-600 text-base md:text-xl" />
            </>
          )}
        </div>
      </td>
    </Table.Row>
  );
}

export default UserRow;
