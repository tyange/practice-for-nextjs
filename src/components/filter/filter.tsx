import { getFilterByVesselType } from "@/actions/filter.action";

export default async function Filter({
  searchParams,
}: {
  searchParams: {
    page?: string;
    size?: string;
    vesselTypeCodeList?: string;
    shippingLineCodeList?: string;
  };
}) {
  const vesselTypes = searchParams.vesselTypeCodeList?.split(",") || [];
  const shippingLines = searchParams.shippingLineCodeList?.split(",") || [];

  const data = await getFilterByVesselType({
    vesselTypeCodeList: vesselTypes,
    shippingLineCodeList: shippingLines,
  });

  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Filter by Vessel Type</h2>
        <div className="flex flex-wrap gap-2">
          {data.vesselType.map((vessel) => (
            <button key={vessel.code} className="px-4 py-2 rounded-full border">
              {vessel.name} ({vessel.count})
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Filter by Line</h2>
        <div className="flex flex-wrap gap-2">
          {data.shippingLine.map((line) => (
            <button key={line.code} className="px-4 py-2 rounded-full border">
              {line.name} ({line.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
