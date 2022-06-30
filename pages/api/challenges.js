// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const challengesArr = [
  {
    section: "Melodic Intervals",
    name: "Seconds",
    info: "Major Second and Minor Second",
    key: "1",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [1, 2],
    direction: "Either"
  },
  {
    section: "Melodic Intervals",
    name: "Thirds",
    info: "Major Third and Minor Third",
    key: "2",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [3, 4],
    direction: "Either"
  },
  {
    section: "Melodic Intervals",
    name: "Fourths and Fifths",
    info: "Perfect Fourth and Perfect Fifth",
    key: "3",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [5, 7],
    direction: "Either"
  },
  {
    section: "Melodic Intervals",
    name: "Altered Fifth",
    info: "Flat Fifth and Sharp Fifth",
    key: "7",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [6, 8],
    direction: "Either"
  },
  {
    section: "Melodic Intervals",
    name: "Sixth",
    info: "Major Sixth and Minor Sixth",
    key: "4",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [8, 9],
    direction: "Either"
  },

  {
    section: "Melodic Intervals",
    name: "Seventh",
    info: "Major Seventh and Minor Seventh",
    key: "5",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [10, 11],
    direction: "Either"
  },
  {
    section: "Melodic Intervals",
    name: "Test",
    info: "All preceding material",
    key: "9",
    numberQs: 20,
    range: "C4 - C6",
    intervals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    direction: "Both"
  },
  {
    section: "Harmonic Intervals",
    name: "Seconds",
    info: "Major Second and Minor Second",
    key: "11",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [1, 2],
    direction: "Ascending"
  },
  {
    section: "Harmonic Intervals",
    name: "Thirds",
    info: "Major Third and Minor Third",
    key: "12",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [3, 4],
    direction: "Ascending"
  },
  {
    section: "Harmonic Intervals",
    name: "Fourths and Fifths",
    info: "Perfect Fourth and Perfect Fifth",
    key: "13",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [5, 7],
    direction: "Ascending"
  },
  {
    section: "Harmonic Intervals",
    name: "Altered Fifth",
    info: "Flat Fifth and Sharp Fifth",
    key: "17",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [6, 8],
    direction: "Ascending"
  },
  {
    section: "Harmonic Intervals",
    name: "Sixth",
    info: "Major Sixth and Minor Sixth",
    key: "14",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [8, 9],
    direction: "Ascending"
  },

  {
    section: "Harmonic Intervals",
    name: "Seventh",
    info: "Major Seventh and Minor Seventh",
    key: "15",
    numberQs: 10,
    range: "C4 - C6",
    intervals: [10, 11],
    direction: "Ascending"
  },
  {
    section: "Harmonic Intervals",
    name: "Test",
    info: "All preceding material",
    key: "19",
    numberQs: 20,
    range: "C4 - C6",
    intervals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    direction: "Ascending"
  },
]


export default function handler(req, res) {
  res.status(200).json({ challenges: challengesArr })
}
