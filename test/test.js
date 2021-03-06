var Adds = require('../lib/add')

describe('大数相加add方法', function () {
  it('add字符串"42329"加上字符串"21532"等于"63861"', function () {
    Adds.add('42329', '21532')
      .should.equal('63861')
    Adds.add1('42329', '21532')
      .should.equal('63861')
    Adds.add2('42329', '21532')
      .should.equal('63861')
    Adds.add3('42329', '21532')
      .should.equal('63861')
  })
  
  it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
    Adds.add('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
    Adds.add1('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
    Adds.add2('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
    Adds.add3('843529812342341234', '236124361425345435')
      .should.equal('1079654173767686669')
  })
})