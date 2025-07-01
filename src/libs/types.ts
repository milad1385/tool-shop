import { exportTraceState } from "next/dist/trace";

export interface ICategory {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface IProduct {
  id: number;
  title: string;
  link: string;
  image: string;
  price: number;
  discount: number;
}

export interface ITitle {
  title: string;
  className?: string;
}

export interface IBestSellerBox extends IProduct {
  quantity: number;
}

export interface IBanner {
  src?: string;
}

export interface IArticle {
  id: number;
  title: string;
  link: string;
  image: string;
}

export interface IPage {
  params: Promise<{ id?: string }>;
}

interface ILink {
  id: string | number;
  href: string;
  name: string;
}

export interface IBreadcrumb {
  links: ILink[];
}

export interface ITabButton {
  tab: string;
  onTab: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  label: string;
}

export interface IFeature {
  _id: number;
  name: string;
  value: string;
}

export interface IFeatureList {
  features: IFeature[];
}

export interface IFeatureItem {
  feature: IFeature;
}

export interface IFooterSliderBox {
  img: string;
}

export interface IAboutUsBox {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface IStaffSliderBox {
  image: string;
}

export interface IAccordionTitle {
  title: string;
  children: React.ReactNode;
}

export interface IPagination {
  count: number;
}

export interface IArticleCategory {
  title: string;
  subCategories: SubCategories[];
}

type SubCategories = {
  id: number;
  title: string;
};

export interface IRecentArticleBox {
  image: string;
  title: string;
  description: string;
}

export interface ITArticleSectionTitle {
  title: string;
}

export interface ILinks {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
}
[];

export interface IStatBox {
  className?: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface IUserPanelTitle {
  content: string;
  children?: React.ReactNode;
}

export interface IFilters {
  items: IFilterItem[];
  slug: string;
}

interface IFilterItem {
  id: string | number;
  title: string;
  slug: string;
}

export interface IInput {
  label?: string;
  name: string;
  className?: string;
  register: any;
  errors: any;
  placeholder?: string;
  multiple?: boolean;
  type: "text" | "number" | "email" | "password" | "file" | "textarea";
  disable?: boolean;
}

export interface IAnswerBox {
  body?: string;
  creator?: string;
  createdAt?: number;
  isFromUserPanel?: boolean;
}

type TOption = {
  id: string | number;
  value: string | number;
  label: string;
};

export type TSelectBox = {
  title: string;
  register: any;
  errors: any;
  name: string;
  options: TOption[];
  dateName?: string;
  disable?: boolean;
  multiple?: boolean;
  selected?: any;
  onSelected?: any;
  placeholder?: string;
};

export interface IHambergerMobileMenu {
  isOpen: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEmptyRecentError {
  desc: string;
  icon: React.ReactNode;
}

export interface ICheckbox {
  label: string;
  slug: string;
  selected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IOptions {
  id: number;
  slug: string;
  label: string;
}

export interface IFilterCheckbox {
  param: string;
  options: IOptions[];
}

export interface IColorBoxes extends IFilterCheckbox {}

export interface IColorBox {
  label: string;
  slug: string;
  onClick: (slug: string) => void;
  selected : boolean
}
