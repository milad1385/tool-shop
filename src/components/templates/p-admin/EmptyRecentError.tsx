import { IEmptyRecentError } from "@/libs/types";

function EmptyRecentUsersError({desc , icon} :IEmptyRecentError) {
  return (
    <div className="flex-center  lg:mt-[40px] flex-col gap-y-7 rounded-md">
      {icon}
      <p className="text-sm md:text-base">
        {desc}
      </p>
    </div>
  );
}

export default EmptyRecentUsersError;
