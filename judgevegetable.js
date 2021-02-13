const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

const judgeVegetable = function (vegetables, metric) {
  let winner;
  let record = 0;
  for (let entry of vegetables) {
    if (entry[metric] > record) {
      winner = entry.submitter;
      record = entry[metric];
    }
  }
  return winner;
}