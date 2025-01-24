import { getFilterByVesselType } from "@/actions/filter.action";

export default async function ShippingScheduleFilter({
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
    <div className="space-y-8 p-4">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Filter by Vessel Type</h2>
        <div className="flex flex-wrap gap-2">
          {data.vesselType.map((vessel) => (
            <button key={vessel.code} className="rounded-full border px-4 py-2">
              {vessel.name} ({vessel.count})
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Filter by Line</h2>
        <div className="flex flex-wrap gap-2">
          {data.shippingLine.map((line) => (
            <button key={line.code} className="rounded-full border px-4 py-2">
              {line.name} ({line.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
