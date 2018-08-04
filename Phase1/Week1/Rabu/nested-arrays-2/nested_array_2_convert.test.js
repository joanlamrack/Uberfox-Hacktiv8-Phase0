const assert = require('assert')

const { convert_roster_format } = require('./nested_array_2_convert.js')

describe('Convert Roster Format', () => {
  it('should convert nested array into Object', () => {
    let roster = [
      ['Number', 'Name', 'Position', 'Points per Game'],
      [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
      [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
      [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
      [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
      [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
    ]
    const object_roster = convert_roster_format(roster)
    assert.deepEqual(object_roster[0]['Name'], 'Joe Schmo')
  })
})
