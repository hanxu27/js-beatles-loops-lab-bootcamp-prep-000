// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  for (var i = 0; i < facts.length; i ++){
    array[i] = `${facts[i]}!!!`
  }
  return array
}