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
