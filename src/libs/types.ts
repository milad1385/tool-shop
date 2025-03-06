interface ICategory {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface IProduct {
  id: number;
  title: string;
  link: string;
  image: string;
  price: number;
  discount: number;
}

interface ITitle {
  title: string;
}

interface IBestSellerBox extends IProduct {
  quantity: number;
}

interface IBanner {
  src?: string;
}
