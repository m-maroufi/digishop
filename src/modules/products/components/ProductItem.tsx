import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
type Images = {
  id: number;
  src: string;
};
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  images: Images[];
}

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.price} </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>مشاهده محصول</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
