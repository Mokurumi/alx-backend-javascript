function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);

  if (type === 'SUM') {
    return aRound + bRound;
  } if (type === 'SUBTRACT') {
    return aRound - bRound;
  } if (type === 'DIVIDE') {
    if (bRound === 0) {
      return 'Error';
    }
    return aRound / bRound;
  }
  throw new TypeError('Invalid type. Use SUM, SUBTRACT or DIVIDE');
}

module.exports = calculateNumber;
