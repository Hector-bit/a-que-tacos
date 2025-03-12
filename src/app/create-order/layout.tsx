import { CartProvider } from "@/context/orderContext";
import LocationIsOpenWrapper from "@/components/wrappers/LocationIsOpenWrapper";
import MaintenanceWrapper from "@/components/wrappers/Maintenancewrappers";

export default function OrderPickupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <MaintenanceWrapper>
        <LocationIsOpenWrapper>
            {children}
        </LocationIsOpenWrapper>
      </MaintenanceWrapper>
    </CartProvider>
  )
}