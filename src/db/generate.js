module.exports = function(){
    var faker = require('faker')
    var _ = require('lodash')
    var fs = require('fs')

    var data = {
        people: _.times(100, function (n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                department: _.sample(['HR', 'IT', 'Finance', 'Operations'])
            }
        })
    }

    fs.writeFileSync('db.json', JSON.stringify(data));
}