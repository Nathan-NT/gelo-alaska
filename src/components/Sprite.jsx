import sprite from '../lib/sprite.js'

export default function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<defs>${sprite}</defs>` }}
    />
  )
}
