export default function Modal() {
  return (
    <dialog
      open
      className="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-slate-200 bg-opacity-70"
    >
      <ul className="h-42 flex w-2/3 flex-col items-center justify-center gap-5 rounded-md bg-white px-5 py-10">
        <li
          className={`bg-slate-300} flex w-2/3 items-center justify-center rounded-lg`}
        >
          <button className="p-3">
            <span>EN</span>
          </button>
        </li>
        <li
          className={`bg-slate-300} flex w-2/3 items-center justify-center rounded-lg`}
        >
          <button className="p-3">
            <span>KO</span>
          </button>
        </li>
      </ul>
    </dialog>
  );
}
