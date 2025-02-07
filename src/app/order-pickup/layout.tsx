import { CartProvider } from "@/context/orderContext";


export default function OrderPickupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}