"use client";

import Button from "@/components/ui/Button";
import { IEmptyStateProps } from "@/libs/types";
import { usePathname, useRouter } from "next/navigation";
import { FaBoxOpen } from "react-icons/fa";



function EmptyState({
  title = "اطلاعاتی یافت نشد",
  description = "متأسفانه موردی برای نمایش وجود ندارد",
  icon,
  actionText,
  onAction,
  actionLink,
  className = "",
  size = "md",
}: IEmptyStateProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else if (actionLink) {
      router.push(actionLink, { scroll: false });
    } else {
      router.replace(pathname, { scroll: false });
    }
  };

  const sizes = {
    sm: {
      padding: "py-10 px-4",
      iconSize: "w-16 h-16",
      iconInner: "text-3xl",
      title: "text-base md:text-lg",
      description: "text-xs md:text-sm",
      button: "!w-[140px]",
      gap: "gap-y-3",
    },
    md: {
      padding: "py-16 px-4",
      iconSize: "w-20 h-20",
      iconInner: "text-4xl",
      title: "text-lg md:text-xl",
      description: "text-sm md:text-base",
      button: "!w-[180px]",
      gap: "gap-y-4",
    },
    lg: {
      padding: "py-24 px-4",
      iconSize: "w-24 h-24",
      iconInner: "text-5xl",
      title: "text-xl md:text-2xl",
      description: "text-base md:text-lg",
      button: "!w-[200px]",
      gap: "gap-y-6",
    },
  };

  const s = sizes[size];
  const defaultIcon = <FaBoxOpen className={s.iconInner} />;

  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl flex items-center justify-center flex-col ${s.gap} ${s.padding} ${className}`}
    >
      <div
        className={`${s.iconSize} bg-gray-100 rounded-full flex items-center justify-center text-gray-400 relative`}
      >
        {icon || defaultIcon}

        <span className="absolute inset-0 rounded-full bg-gray-100 animate-ping opacity-20" />
      </div>

      <h3 className={`${s.title} font-bold text-gray-800 text-center`}>
        {title}
      </h3>

      {description && (
        <p
          className={`${s.description} text-gray-500 text-center max-w-md leading-relaxed`}
        >
          {description}
        </p>
      )}

      {actionText && (
        <Button
          onClick={handleAction}
          className={`${s.button} !bg-gray-800 !text-white hover:!bg-gray-900 transition-all duration-200 mt-2`}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
