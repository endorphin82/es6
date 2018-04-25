export default function movie(data) {
    const html = `
        <h2>${data.title}</h2>
        <date>${data.date}</date>
        <div>${data.country}</div>
        <div>${data.imgSrc}</div>
        <div>${data.homepageUrl}</div>
        <div>${data.language}</div>
        <div>${data.numberOfEpisode}</div>
        <div>${data.number_of_season}</div> 
        <div>${data.overview}</div>
        <div>${data.popularity}</div>                              
    `;
    return html;
}