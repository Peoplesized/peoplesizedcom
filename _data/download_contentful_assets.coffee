fs = require 'fs'
async = require 'async'
request = require 'request'

assets = JSON.parse(fs.readFileSync(__dirname + '/urls_assets.json', 'utf8'))

download = (entry, callback) ->
  uri = "http:#{entry.url}"
  filename = "./images/#{entry.filename}"

  request.head uri, (err, res, body) ->
    console.log 'content-type:', res.headers['content-type']
    console.log 'content-length:', res.headers['content-length']
    request(uri).pipe(fs.createWriteStream(filename)).on 'close', callback

async.each assets, download, (err) ->
  console.log 'all downlaoded'

