import { useEffect, useState } from 'react'

/**
 * Efeito de máquina de escrever que alterna entre frases.
 */
function Typewriter({ phrases, typeDelay = 75, deleteDelay = 40, pauseDelay = 1800 }) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeDelay)
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), pauseDelay)
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteDelay)
    } else {
      setDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typeDelay, deleteDelay, pauseDelay])

  return (
    <span>
      {text}
      <span className="cursor" aria-hidden="true">
        ▌
      </span>
    </span>
  )
}

export default Typewriter
