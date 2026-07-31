function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-cloud">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/** Renderizador mínimo de texto plano con **negritas** y listas "- item". */
export function RichText({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const isList = lines.length > 0 && lines.every((l) => l.startsWith("- "));

        if (isList) {
          return (
            <ul key={i} className="flex flex-col gap-2 pl-1">
              {lines.map((line, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-cloud/75">
                  <span className="text-soft-cyan">—</span>
                  <span>{renderInline(line.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-sm leading-relaxed text-cloud/75">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
