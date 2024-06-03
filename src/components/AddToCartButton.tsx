"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem, items } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [isSuccess]);

  const handleAddToCart = () => {
    //Verify if the item is in the cart
    const isProductInCart = items.some(
      (item) => item.product.id === product.id
    );

    if (!isProductInCart) {
      //If not, the item can be added. Also show a toast (I personally used Toast from Shadcn).
      addItem(product);
      setIsSuccess(true);
      toast.success("Adicionado ao carrinho");
    } else {
      //If the item is already in the cart, then it won't be added. Also show a toast.
      toast.error('Esse item ja está no carrinho!')
    }
  };

  return (
    <Button
      onClick={() => handleAddToCart()}
      size="lg"
      className="w-full"
    >
      {isSuccess ? "Adicionado!" : "Adicionar ao carrinho"}
    </Button>
  );
};

export default AddToCartButton;
