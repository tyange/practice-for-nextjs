import Image from "next/image";

import { getShippingSchedule } from "@/actions/shipping-schedule.action";

import ClientPagination from "./client-pagination";

export default async function ScheduleList({
  searchParams,
}: {
  searchParams: {
    page?: string;
    size?: string;
    vesselTypeCodeList?: string;
    shippingLineCodeList?: string;
  };
}) {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.size) || 20;
  const vesselTypes = searchParams.vesselTypeCodeList?.split(",") || [];
  const shippingLines = searchParams.shippingLineCodeList?.split(",") || [];

  const { totalCount, shippingSchedules } = await getShippingSchedule({
    page,
    pageSize,
    vesselTypeCodeList: vesselTypes,
    shippingLineCodeList: shippingLines,
  });

  return (
    <>
      <div className="p-4">
        <div className="mb-4 text-lg font-bold">검색 결과 : {totalCount}</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Line</th>
                <th className="border p-3 text-left">Vessel Name & Voy No.</th>
                <th className="border p-3 text-left">Vessel Type</th>
                <th className="whitespace-nowrap border p-3 text-left">
                  출발 항구
                </th>
                <th className="whitespace-nowrap border p-3 text-left">
                  도착 항구
                </th>
                <th className="whitespace-nowrap border p-3 text-left">
                  출발 예정일
                </th>
                <th className="whitespace-nowrap border p-3 text-left">
                  도착 예정일
                </th>
              </tr>
            </thead>
            <tbody>
              {shippingSchedules.map((schedule) => (
                <tr
                  key={schedule.shippingScheduleCode}
                  className="hover:bg-gray-50"
                >
                  <td className="border p-3">{schedule.line}</td>
                  <td className="border p-3">
                    {schedule.vesselName} {schedule.voyNo}
                  </td>
                  <td className="border p-3">{schedule.vesselTypeName}</td>
                  <td className="border p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6">
                        <Image
                          src={`https://image.autowini.com/resources/IMG/renew/common/flag/${schedule.fromCountryCode}.png`}
                          alt={schedule.fromCountryName}
                        />
                      </span>
                      <div>
                        <div>{schedule.fromCountryName}</div>
                        <div className="text-sm text-gray-500">
                          {schedule.fromPortName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6">
                        <Image
                          src={`https://image.autowini.com/resources/IMG/renew/common/flag/${schedule.toCountryCode}.png`}
                          alt={schedule.toCountryName}
                        />
                      </span>
                      <div>
                        <div>{schedule.toCountryName}</div>
                        <div className="text-sm text-gray-500">
                          {schedule.toPortName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap border p-3">
                    {formatDate(schedule.departureDateTime)}
                  </td>
                  <td className="whitespace-nowrap border p-3">
                    {schedule.arrivalDateTime
                      ? formatDate(schedule.arrivalDateTime)
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ClientPagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </>
  );
}

function formatDate(dateString: string) {
  return new Date(dateString).toISOString().split("T")[0];
}
