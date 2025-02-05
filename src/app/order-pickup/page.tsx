'use client'
import Image from "next/image";
import { useEffect } from "react";
import { menu_items } from "../../../utils/constants";
import ItemCard from "@/components/ordering/ItemCard";
import BottomNav from "@/components/ordering/BottomNav";

export default function OrderPickup() {


  return (
    <>
      <main className="flex flex-col sm:flex-row px-3 sm:px-8 gap-x-4 mb-[100px]">
        <div>NOTICE: We don't do delivery, sorry!</div>
        <div className="mb-8">Online ordering available in Everson only at this moment.</div>

        <div>
          <h3>ITEMS</h3>
          <div className="grid grid-cols-2 gap-3">
            {menu_items.map((item) => {
              return (
                <ItemCard img={item.img} name={item.name} description={item.img}/>
              )
            })}
          </div>
        </div>
      </main>
      <BottomNav/>
    </>
  );
}
