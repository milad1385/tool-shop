import Title from '@/components/modules/p-admin/Title';
import React from 'react'
import EmptyRecentUsersError from './EmptyRecentError';
import { LuSquare } from 'react-icons/lu';


function RecentProducts() {
 return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <Title content="محصولات اخیر" />
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full mt-5 recent-table text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td>شماره</td>
                <td>تصویر</td>
                <td>نام</td>
                <td>تاریخ</td>
                <td>قیمت</td>
                <td>رویداد ها</td>
              </tr>
            </thead>
            <tbody>
              test
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyRecentUsersError desc='هیچ محصولی یافت نشد' icon={<LuSquare className="text-2xl md:text-3xl lg:text-[60px]" />} />
      )}
    </div>
  );
}

export default RecentProducts