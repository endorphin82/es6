import config from '../../config'

export default function movie (data) {
  const mappingData = mapData(data)
  const html = `
        <h2 class="movie-title">${mappingData.title}</h2>
        <date class="date">${mappingData.date}</date>
        <div class="country">${mappingData.country}</div>
        <div class="picture"><img src='${mappingData.img}'></div>
        <div class="language">${mappingData.language}</div>
        <div class="overview">${mappingData.overview}</div>
        <div>${mappingData.popularity}</div>                              
        <div class="popularity">${mappingData.id}</div>                              
    `
  return html
}

function mapData (data) {
  const defaultValue = 'Unknown'
  return {
    title: data.title || data.name || defaultValue,
    date: data.release_date || data.first_air_date || defaultValue,
    country: data.origin_country || defaultValue,
    img: getPictureUrl(),
    language: data.origin_language || defaultValue,
    overview: data.overview || defaultValue,
    popularity: data.popularity || defaultValue,
    id: data.id || Date.now(),
  }

  function getPictureUrl () {
    const url = data.backdrop_path || data.poster_path

    if (url) {
      return config.imageSrc + url
    } else {
      return config.noImageSrc
    }
  }

}