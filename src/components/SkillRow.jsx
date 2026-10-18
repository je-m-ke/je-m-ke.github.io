import LevelTag from './LevelTag.jsx'

function SkillRow({ name, line, level, levelLabel }) {
  return (
    <li>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-bold text-ink md:text-xl">{name}</h3>
        <LevelTag level={level} label={levelLabel} />
      </div>
      <p className="mt-2 text-base font-normal text-ink md:text-lg">{line}</p>
    </li>
  )
}

export default SkillRow
