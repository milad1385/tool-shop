import { ICreatePagination, IPagination, IVerifyUser } from "@/libs/types";
import jwt from "jsonwebtoken";

export const formattedPrice = (price: number, locale = "fa-IR") => {
  return price.toLocaleString(locale);
};

export const getDate = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("fa-IR", options);

  const parts = formattedDate.split(" ");
  const correctedFormat =
    `${parts[3]} ${parts[2]} ${parts[1]} ${parts[0]}`.replace(",", "");

  return correctedFormat;
};

export const setToLocalStorage = (key: string, value: any) => {
  if (key.length && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string) => {
  const value = JSON.parse(localStorage.getItem(key));
  return value ? value : null;
};

export function verifyToken(token: string): IVerifyUser {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (typeof decoded === "string") {
    throw new Error("Invalid token format");
  }

  return {
    id: decoded.id,
    username: decoded.username,
    phone: decoded.phone,
    email: decoded.email,
    roles: decoded.roles,
    iat: decoded.iat,
    exp: decoded.exp,
  };
}

export const normalizeData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const createPagination = ({
  page,
  count,
  limit,
}: ICreatePagination): IPagination => {
  const totalPages = Math.ceil(count / limit);
  return {
    currentPage: page,
    totalPages,
    totalItems: count,
    itemsPerPage: limit,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
    count,
  };
};

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString("fa-IR");
};

export const parseFilters = (filtersString: string) => {
  if (!filtersString) return [];

  try {
    const parsed = JSON.parse(filtersString);
    if (!Array.isArray(parsed)) return [];

    return parsed.map((filter) => ({
      ...filter,
      options: filter.options
        ? String(filter.options)
            .split(/[،,]+/)
            .map((s: string) => s.trim())
            .filter(Boolean)
        : [],
    }));
  } catch {
    return [];
  }
};
