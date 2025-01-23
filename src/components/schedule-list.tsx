import { ShippingSchedule } from "@/types/shipping-schedule.types";

export default function ScheduleList({
  totalCount,
  shippingSchedules,
}: {
  totalCount: number;
  shippingSchedules: ShippingSchedule[];
}) {
  return (
    <div className="p-4">
      <div className="mb-4 text-lg font-bold">검색 결과 : {totalCount}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left border">Line</th>
              <th className="p-3 text-left border">Vessel Name & Voy No.</th>
              <th className="p-3 text-left border">Vessel Type</th>
              <th className="p-3 text-left border whitespace-nowrap">
                출발 항구
              </th>
              <th className="p-3 text-left border whitespace-nowrap">
                도착 항구
              </th>
              <th className="p-3 text-left border whitespace-nowrap">
                출발 예정일
              </th>
              <th className="p-3 text-left border whitespace-nowrap">
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
                <td className="p-3 border">{schedule.line}</td>
                <td className="p-3 border">
                  {schedule.vesselName} {schedule.voyNo}
                </td>
                <td className="p-3 border">{schedule.vesselTypeName}</td>
                <td className="p-3 border">
                  <div className="flex items-center gap-2">
                    <span className="w-6">
                      <img
                        src={`https://image.autowini.com/resources/IMG/renew/common/flag/${schedule.fromCountryCode}.png`}
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
                <td className="p-3 border">
                  <div className="flex items-center gap-2">
                    <span className="w-6">
                      <img
                        src={`https://image.autowini.com/resources/IMG/renew/common/flag/${schedule.toCountryCode}.png`}
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
                <td className="p-3 border whitespace-nowrap">
                  {formatDate(schedule.departureDateTime)}
                </td>
                <td className="p-3 border whitespace-nowrap">
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
  );
}

function formatDate(dateString: string) {
  return new Date(dateString).toISOString().split("T")[0];
}
