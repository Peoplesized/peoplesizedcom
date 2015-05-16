fs = require 'fs'
async = require 'async'
_ = require 'lodash'
moment = require 'moment'

assets = JSON.parse(fs.readFileSync(__dirname + '/urls_assets.json', 'utf8'))
entries = JSON.parse(fs.readFileSync(__dirname + '/simpler_entries.json', 'utf8'))
template = _.template(fs.readFileSync('entry_template._', 'utf8'))

findImage = (imageId) ->
  _.findWhere assets, id: imageId

createFile = (entry, callback) ->
  createdAt = moment(entry.createdAt).format('YYYY-MM-DD')
  filename = "./entries/#{createdAt}-#{entry.title}.md"
  entry.imageUrl = "http:#{findImage(entry.imageId).url}"
  output = template(entry)
  fs.writeFile(filename, output, callback )


async.each entries, createFile, (err) ->
  console.log 'all created'