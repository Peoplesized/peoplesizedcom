fs = require 'fs'
async = require 'async'
_ = require 'lodash'
moment = require 'moment'

entries = JSON.parse(fs.readFileSync(__dirname + '/simpler_entries.json', 'utf8'))
template = _.template(fs.readFileSync('entry_template._', 'utf8'))

createFile = (entry, callback) ->
  createdAt = moment(entry.createdAt).format('YYYY-MM-DD')
  filename = "./entries/#{createdAt}-#{entry.title}.txt"
  output = template(entry)
  fs.writeFile(filename, output, callback )


async.each entries, createFile, (err) ->
  console.log 'all created'