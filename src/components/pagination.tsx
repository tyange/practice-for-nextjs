interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  perPage: number;
  onPerPageChange: (perPage: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  perPage,
  onPerPageChange,
}: PaginationProps) {
  const perPageOptions = [10, 20, 30, 40];

  const getPageNumbers = () => {
    const pageNumbers = [];
    let start = Math.max(1, currentPage - 4);
    let end = Math.min(start + 9, totalPages);

    if (end - start < 9) {
      start = Math.max(1, end - 9);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          className="appearance-none w-36 px-4 py-2 border border-green-600 rounded-md pr-10 focus:outline-none"
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} per page
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-3 pointer-events-none">▼</div>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        >
          ⟪
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        >
          ⟨
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-md
              ${
                currentPage === page
                  ? "border border-green-600 bg-green-50 text-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        >
          ⟩
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        >
          ⟫
        </button>
      </div>
    </div>
  );
}
