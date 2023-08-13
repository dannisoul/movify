export function ScoreMeter ({ score }) {
  return (
    <div className='w-full h-full rounded-full flex justify-center items-center' style={getScoreClass(score)}>
      <div className='text-white w-[85%] h-[85%] bg-black text-[12px] flex items-center justify-center rounded-full font-bold'>
        {(score === 0) ? 'NR' : `${score}%`}
      </div>
    </div>
  )
}

/*
  the score is represented by a circular progress bar
  so this function gets the specific value for the conic gradient
*/

function getScoreClass (score) {
  const COLORS = [
    { primary: '#21cc78', secondary: '#1d4028' }, // up to 70 average
    { primary: '#bbbf2e', secondary: '#423d0f' }, // up to 40 average
    { primary: '#c52159', secondary: '#571435' }
  ]
  const selectedColors = (score >= 70)
    ? COLORS[0]
    : (score >= 40) ? COLORS[1] : COLORS[2]

  const degrees = parseInt(360 / 100 * score)
  const scoreClass = {
    background: `conic-gradient(${selectedColors.primary} 0deg ${degrees}deg, ${selectedColors.secondary} ${degrees}deg)`
  }

  return scoreClass
}
