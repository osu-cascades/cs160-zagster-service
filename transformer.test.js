const Transformer = require('./transformer')


test('Transformer exists', () => {
  new Transformer()
});

test('countMembershipsByYearAndMonth', () => {
  const rows =
    [{'year':2001,'month':1,'membership':'Annual','count':'20011'},
     {'year':2001,'month':1,'membership':'Student','count':'20011'},
     {'year':2001,'month':2,'membership':'Hourly','count':'20012'},
     {'year':2001,'month':2,'membership':'Pay-As-You-Go','count':'20012'},
     {'year':2002,'month':1,'membership':'Annual','count':'20021'},
     {'year':2002,'month':2,'membership':'Student','count':'20022'},
     {'year':2003,'month':7,'membership':'Hourly','count':'20037'},
     {'year':null,'month':null,'membership':null,'count':'100'}];
  const expected_result =
    {2001: {1: {'Annual':20011,'Student':20011}, 2: {'Hourly':20012,'Pay-As-You-Go':20012}},
     2002: {1: {'Annual':20021}, 2: {'Student':20022}},
     2003: {7: {'Hourly':20037}}};
  expect(Transformer.countMembershipsByYearAndMonth(rows)).toEqual(expected_result);
})


test('countByYearAndDayOfYear', () => {
  const rows =
    [{'year':2001,'day':1,'count':'20011'},
     {'year':2001,'day':2,'count':'20012'},
     {'year':2001,'day':4,'count':'20014'},
     {'year':2001,'day':7,'count':'20017'},
     {'year':2002,'day':1,'count':'20021'},
     {'year':2002,'day':3,'count':'20023'},
     {'year':2003,'day':7,'count':'20037'},
     {'year':null,'day':null,'count':'100'}];
  const expected_result =
    {2001: {1:20011,2:20012,4:20014,7:20017},
     2002: {1:20021, 3:20023},
     2003: {7:20037}};
  expect(Transformer.countByYearAndDayOfYear(rows)).toEqual(expected_result);
})

test('countByYearAndMonthAndDay', () => {
  const rows =
    [{'year':2001,'month':1,'day':1,'count':'200111'},
     {'year':2001,'month':1,'day':2,'count':'200112'},
     {'year':2001,'month':2,'day':1,'count':'200121'},
     {'year':2001,'month':2,'day':2,'count':'200122'},
     {'year':2002,'month':1,'day':1,'count':'200211'},
     {'year':2002,'month':2,'day':1,'count':'200221'},
     {'year':2003,'month':7,'day':1,'count':'200371'},
     {'year':null,'month':null,'day':null,'count':'100'}];
  const expected_result =
    {2001: {1: {1:200111,2:200112}, 2: {1:200121,2:200122}},
     2002: {1: {1:200211}, 2: {1:200221}},
     2003: {7: {1:200371}}};
  expect(Transformer.countByYearAndMonthAndDay(rows)).toEqual(expected_result);
})

test('countByYearAndMonth', () => {
  const rows =
    [{'month':1,'year':2001,'count':'20011'},
     {'month':2,'year':2001,'count':'20012'},
     {'month':1,'year':2002,'count':'20021'},
     {'month':2,'year':2002,'count':'20022'},
     {'month':7,'year':2003,'count':'20037'},
     {'month':null,'year':null,'count':'100'}];
  const expected_result =
    {2001:[{1:20011},{2:20012}], 2002:[{1:20021},{2:20022}], 2003:[{7:20037}]};
  expect(Transformer.countByYearAndMonth(rows)).toEqual(expected_result);
});

test('countByYear', () => {
  const rows =
    [{'year':2001,'count':'20011'},
     {'year':2002,'count':'20021'},
     {'year':2003,'count':'20037'},
     {'year':null,'count':'100'}];
  const expected_result =
    {2001:20011, 2002:20021, 2003:20037};
  expect(Transformer.countByYear(rows)).toEqual(expected_result);
});

test('countByHour', () => {
  const rows =
    [{'hour':0,'count':'429'},
     {'hour':1,'count':'231'},
     {'hour':23,'count':'710'},
     {'hour':null,'count':'183'}];
  const expected_result = {'0': 429, '1':231, '23':710};
  expect(Transformer.countByHour(rows)).toEqual(expected_result);
});
