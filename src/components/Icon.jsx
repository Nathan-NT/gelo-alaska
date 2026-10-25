export default function Icon({ n }) {
  return (
    <svg className="ico" aria-hidden="true">
      <use href={`#${n}`} />
    </svg>
  )
}
