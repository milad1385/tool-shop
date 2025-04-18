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
