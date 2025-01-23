"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Pagination from "./pagination";

export default function ClientPagination({
  totalCount,
  pageSize,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  currentPage: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    const sizeParam = params.get("size");
    if (sizeParam) {
      params.set("size", sizeParam);
    }
    params.set("page", page.toString());
    push(`${pathname}?${params.toString()}`);
  };

  const handlePerPageChange = (newPageSize: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("size", newPageSize.toString());
    params.set("page", "1");
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(totalCount / pageSize)}
      onPageChange={handlePageChange}
      perPage={pageSize}
      onPerPageChange={handlePerPageChange}
    />
  );
}
