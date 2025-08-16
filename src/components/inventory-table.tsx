"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";
import { Button } from "./ui/button";

const plants = [
  {
    id: "1312312",
    name: "aloe vera",
    category: "Indoor",
    description: "this is aloe vera",
    price: 20,
    stock: 2,
  },
]

export default function InventoryTable() {
  const [selsectCategory, setSelectCategory] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w-sm w-full">
          <Input
            placeholder="Filter plants..."
            className="pl-10"
          />
          <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2"/>
        </div>
        <div>
          <Combobox 
            value={selsectCategory} 
            onChange={(val) => setSelectCategory(val)}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plant ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell>{plant.id}</TableCell>
              <TableCell>{plant.name}</TableCell>
              <TableCell>{plant.category}</TableCell>
              <TableCell>{plant.description}</TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell>{plant.stock}</TableCell>
              <TableCell>
                <div className="text-right space-x-4">
                  <Button>
                    Edit
                  </Button>

                  <Button>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};