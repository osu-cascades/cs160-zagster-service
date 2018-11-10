// A suite of functions to transform JSON rows from the database results into
// the JSON users want.

class Transformer {

  constructor() {}

  // {
  //   2001: [ {1: 1000}, {2: 900}, ... {12: 788} ],
  //   2002: [ {1: 100}, {2: 90}, ... {12: 78} ]
  // }
  static count_by_year_and_month(rows) {
    let result = {}
    let years = new Set(rows.map(row => row.year)); years.delete(null);
    years.forEach(year => result[year] = [])
    rows.forEach(row => {
      if (row.year != null) {
        result[row.year].push({[row.month]:parseInt(row.count)})
      }
    })
    return result
  }

  // { 0: 12, 1: 24, ... 23: 788 }
  static count_by_hour(rows) {
    let result = {}
    rows.forEach(row => {
      if (row.hour != null) {
        result[row.hour] = parseInt(row.count)
      }
    })
    return result
  }

}

module.exports = Transformer;
