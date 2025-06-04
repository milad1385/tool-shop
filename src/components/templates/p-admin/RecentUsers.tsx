import Title from "@/components/modules/p-admin/Title";
import { LuUsers } from "react-icons/lu";
import UserRow from "./UserRow";

function RecentUser() {
  return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <Title content="کاربران اخیر"/>
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full mt-5 recent-table text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td>شماره</td>
                <td>پروفایل</td>
                <td>نام</td>
                <td>تاریخ</td>
                <td>رویداد ها</td>
              </tr>
            </thead>
            <tbody>
             <UserRow/>
             <UserRow/>
             <UserRow/>
             <UserRow/>
             <UserRow/>
             <UserRow/>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex-center  lg:mt-[40px] flex-col gap-y-7 rounded-md">
          <LuUsers className="text-2xl md:text-3xl lg:text-[60px]" />
          <p className="text-sm md:text-base">
            هیچ کاربری تا این تاریخ در سایت ثبت نام نکرده است
          </p>
        </div>
      )}
    </div>
  );
}

export default RecentUser;
