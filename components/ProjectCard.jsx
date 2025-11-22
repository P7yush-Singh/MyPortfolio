export default function ProjectCard({
    title,
    role,
    stack,
    description,
    image,
  }) {
    return (
      <article className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        {image && (
          <div className="relative w-full overflow-hidden bg-black/5">
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold tracking-tight md:text-lg">
              {title}
            </h3>
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              style={{ backgroundColor: "#4b4ded" }}
            >
              {role}
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
            {stack}
          </p>
          <p className="text-xs leading-relaxed text-black/70 md:text-sm">
            {description}
          </p>
        </div>
      </article>
    );
  }
  