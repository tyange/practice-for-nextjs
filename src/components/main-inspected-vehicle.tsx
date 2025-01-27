import Image from "next/image";
import { ChevronRight, Heart, Shield, SquarePlay } from "lucide-react";
import { getInspectedVehicle } from "@/actions/main.actions";

export default async function MainInspectedVehicle() {
  const data = await getInspectedVehicle();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5 p-4">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-700">
          <Shield color="#fff" />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-bold">Inspected vehicle</h2>
          <p className="text-lg text-gray-500">
            Inspected by Autowini Certified Inspectors.
          </p>
        </div>
        <ChevronRight className="h-6 w-6 text-gray-400" />
      </div>

      {data.data.items.map((vehicle: Vehicle) => (
        <div key={vehicle.code}>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <Image
              fill
              src="https://picsum.photos/200/300"
              alt={vehicle.itemName}
              className="h-auto w-full"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {vehicle.hasVideo && (
                <div>
                  <SquarePlay className="text-red-500" />
                </div>
              )}
              <div className="rounded-lg bg-black bg-opacity-50 px-3 py-1 text-white">
                {vehicle.photoCount}+
              </div>
            </div>
            {vehicle.newItem && (
              <div className="absolute right-4 top-4 rounded bg-red-600 px-3 py-1 text-white">
                NEW
              </div>
            )}
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{vehicle.itemName}</h1>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-4xl font-bold">
                USD {vehicle.price ?? "*,***"}
              </div>
              <div className="flex items-center gap-1">
                <Heart
                  className={`h-8 w-8 ${vehicle.wishByUser ? "text-red-500" : "text-gray-300"}`}
                />
                <span className="text-2xl text-gray-500">
                  {vehicle.wishCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
