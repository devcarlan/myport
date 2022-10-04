export const SkillPill = ({ skill }) => {
  switch (skill) {
    case 'React':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-blue-600 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
    case 'Next.js':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-black rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )

    case 'HTML':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-orange-500 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
    case 'CSS':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-blue-800 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
    case 'JavaScript':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-yellow-500 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
    case 'WordPress':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-gray-400 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
    case 'PHP':
      return (
        <div
          className={`m-1 flex items-center px-2 bg-blue-400 rounded-full text-sm text-white text-center tracking-wide`}
        >
          {skill}
        </div>
      )
  }
}
