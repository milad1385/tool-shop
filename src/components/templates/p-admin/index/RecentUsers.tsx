import Title from "@/components/modules/p-admin/Title";
import EmptyRecentUsersError from "./EmptyRecentError";
import UserRow from "./UserRow";
import { LuUsers } from "react-icons/lu";

function RecentUser() {
  return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <Title content="کاربران اخیر" />
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full md:mt-5 recent-table text-sm lg:text-base min-w-[450px]">
            <thead className="bg-gray-100">
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td className="px-2 py-2">شماره</td>
                <td className="px-2 py-2">پروفایل</td>
                <td className="px-2 py-2">نام</td>
                <td className="px-2 py-2">تاریخ</td>
                <td className="px-2 py-2">رویداد ها</td>
              </tr>
            </thead>
            <tbody>
              <UserRow />
              <UserRow />
              <UserRow />
              <UserRow />
              <UserRow />
              <UserRow />
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
