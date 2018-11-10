const Transformer = require('./transformer')


test('Transformer exists', () => {
  new Transformer()
});

test('count_by_year_and_month', () => {
  const rows =
    [{"month":1,"year":2001,"count":"20011"},
      {"month":2,"year":2001,"count":"20012"},
      {"month":1,"year":2002,"count":"20021"},
      {"month":2,"year":2002,"count":"20022"},
      {"month":7,"year":2003,"count":"20037"},
      {"month":null,"year":null,"count":"100"}]
  const expected_result =
    {2001:[{1:20011},{2:20012}], 2002:[{1:20021},{2:20022}], 2003:[{7:20037}]}
  expect(Transformer.count_by_year_and_month(rows)).toEqual(expected_result)
});

test('count_by_hour', () => {
  const rows =
    [{"hour":0,"count":"429"},
     {"hour":1,"count":"231"},
     {"hour":23,"count":"710"},
     {"hour":null,"count":"183"}]
  const expected_result = {'0': 429, '1':231, '23':710}
  expect(Transformer.count_by_hour(rows)).toEqual(expected_result)
})
