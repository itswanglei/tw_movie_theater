function getMovieDiscuss(movieId, discussType, callback, count = 2, start = 0) {
  $.ajax({
    type: "get",
    url: `https://api.douban.com/v2/movie/subject/${movieId}/${discussType}`,
    dataType: "jsonp",
    jsonp: "callback",
    data: {
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      start: start,
      count: count,
      client: "",
      udid: ""
    },
    success: function(json) {
      callback(json);
    },
    error: function() {
      console.log(`failed to get movie ${discussType}`);
    }
  });
}

function getMovieDetailInfo(movieId, callback) {
  $.ajax({
    type: "get",
    url: `https://api.douban.com/v2/movie/subject/${movieId}`,
    dataType: "jsonp",
    jsonp: "callback",
    data: {
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      client: "",
      udid: ""
    },
    success: function(json) {
      callback(json);
    },
    error: function() {
      console.log(`failed to get movie detail information`);
    }
  });
}

function getMovieInfoByID(movieID) {
  let movies = JSON.parse(localStorage.moviesStorage);
  return movies[movieID] ? movies[movieID] : false;
}

function getMovieInfoByName(movieName) {
  let movies = JSON.parse(localStorage.moviesStorage);
  for (let movie of Object.values(movies)) {
    if (movieName === movie.title || movieName === movie.original_title) {
      return movie;
    }
  }
  return false;
}
