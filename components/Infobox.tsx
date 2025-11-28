interface InfoboxProps {
  title: string
  rows: { label: string; value: string | React.ReactNode }[]
}

export default function Infobox({ title, rows }: InfoboxProps) {
  return (
    <div className="wiki-infobox">
      <div className="wiki-infobox-title">{title}</div>
      <div className="space-y-1">
        {rows.map((row, i) => (
          <div key={i} className="wiki-infobox-row">
            <span className="wiki-infobox-label">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
