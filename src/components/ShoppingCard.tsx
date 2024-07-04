import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "/product1.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "/product2.webp",
  },
  {
    id: 3,
    name: "Product 3",
    price: 9.99,
    image: "/product3.webp",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartItems);
  const isLoading = false;

  const handleCheckout = () => {
    // Checkout logic here
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative z-50 bg-white">
          <Image
            src="/cart.png"
            alt="cart"
            width={22}
            height={22}
            className="cursor-pointer "
          />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72 pt-4">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />

                <p className="font-semibold flex items-start">
                  {item.name}
                </p>
                <div className="flex  justify-between">
                  <p className="text-gray-500 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <DropdownMenuSeparator className="my-2" />
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button
                  className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                  disabled={isLoading}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
