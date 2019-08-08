


//urban dictonary api
var q = 'memer'
var query = 'http://api.urbandictionary.com/v0/define?term=' + q


$.ajax({



  url: query,
  method: "GET",


}).then(function (response) { console.log(response)/*    how to handle response    */ })





//Music api a3075aeef03af481676e92116c18cfde


var queryurl = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=a3075aeef03af481676e92116c18cfde'
var artistSearch = 'kanye west'
var song =''
var id=''

$.ajax({



  url: queryurl,
  method: "GET",
  dataType: 'json',
  contentType: 'application/json',
  data: {
    // q_artist: artistSearch,
    q_track: song

},



}).then(function (response) { console.log(response)/*    how to handle response    */ 
id=response.message.body.track_list[0].track.commontrack_id
console.log(id)
})
var queryurl = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=a3075aeef03af481676e92116c18cfde'
$.ajax({



  url: queryurl,
  method: "GET",
  dataType: 'json',
  contentType: 'application/json',
  track_id: id,
  data: {
    track_id: id

},
 


}).then(function (response) { console.log(response)/*    how to handle response    */ })
