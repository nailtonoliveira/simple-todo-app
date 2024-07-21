const TodoSVGIcon = () => (
  <svg viewBox="0 0 1024 1024" className="size-7 sm:size-8">
    <path
      className="fill-orange-500"
      d="M379.733333 386.133333l-157.866666 155.733334-89.6-87.466667L85.333333 501.333333l136.533334 136.533334 204.8-204.8zM379.733333 108.8l-157.866666 155.733333-89.6-87.466666L85.333333 224l136.533334 136.533333L426.666667 155.733333zM379.733333 663.466667l-157.866666 155.733333-89.6-87.466667L85.333333 778.666667l136.533334 136.533333 204.8-204.8z"
    />
    <path
      className="fill-orange-300"
      d="M512 469.333333h426.666667v85.333334H512zM512 192h426.666667v85.333333H512zM512 746.666667h426.666667v85.333333H512z"
    />
  </svg>
);

export default function AppHeader() {
  return (
    <header className="fixed w-full top-0 inset-x-0 px-4 py-4 sm:px-8 sm:py-6">
      <div className="flex items-center gap-2">
        <TodoSVGIcon />

        <h1 className="font-bold uppercase text-orange-500 text-lg leading-8 sm:text-2xl sm:leading-8">
          Todo App
        </h1>
      </div>
    </header>
  );
}
