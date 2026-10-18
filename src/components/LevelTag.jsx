// Full class names so Tailwind can find them. Never build these with template strings.
const levelClasses = {
  core: 'bg-ink text-surface',
  practising: 'bg-brand text-surface',
}

function LevelTag({ level, label }) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-bold ${levelClasses[level]}`}>{label}</span>
  )
}

export default LevelTag
