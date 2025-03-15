export interface ICategory {
  id: Number;
  title: string;
  image: string;
  link: string;
}

export interface IProduct {
  id: Number;
  title: string;
  link: string;
  image: string;
  price: Number;
  discount: Number;
}

export interface ITitle {
  title: string;
}

export interface IBestSellerBox extends IProduct {
  quantity: Number;
}

export interface IBanner {
  src?: string;
}

export interface IArticle {
  id: Number;
  title: string;
  link: string;
  image: string;
}
