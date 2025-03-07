import { CartProvider } from "@/context/orderContext";
import LocationIsOpenWrapper from "@/components/wrappers/LocationIsOpenWrapper";
import MaintenanceWrapper from "@/components/wrappers/Maintenancewrappers";

export default function OrderPickupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaintenanceWrapper>
      <LocationIsOpenWrapper>
        <CartProvider>
          {children}
        </CartProvider>
      </LocationIsOpenWrapper>
    </MaintenanceWrapper>
  )
}