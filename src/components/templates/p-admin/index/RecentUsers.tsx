import Title from "@/components/modules/p-admin/Title";
import EmptyRecentUsersError from "./EmptyRecentError";
import UserRow from "./UserRow";
import { LuUsers } from "react-icons/lu";
import { getAllUsers } from "@/services/users.service";
import { recentUserHeader } from "@/constants/data";

async function RecentUser({ numQuery }: { numQuery: string }) {
  const users = await getAllUsers(numQuery);
  return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <Title content="کاربران اخیر" />
      {users.length ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full md:mt-5 recent-table text-sm lg:text-base min-w-[450px]">
            <thead className="bg-gray-100">
              <tr className="font-Lalezar text-lg text-zinc-700">
                {recentUserHeader.map((header, index) => (
                  <td key={index + 1} className="px-2 py-2">
                    {header}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow key={user._id} index={index + 1} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyRecentUsersError
          desc="هیچ کاربری تا این تاریخ در سایت ثبت نام نکرده است"
          icon={<LuUsers className="text-2xl md:text-3xl lg:text-[60px]" />}
        />
      )}
    </div>
  );
}

export default RecentUser;
