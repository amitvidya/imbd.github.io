const fav=[];
const apiKey = '15595ffa';
async function SearchMo(){
    let mov=document.getElementById("form1").value;
    const response=await fetch(`https://www.omdbapi.com/?t=${mov}&apikey=${apiKey}`);
    const data=await response.json();
    console.log(data.Title);
    var htm=`<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">${data.Genre}</p>
            <p class="card-text">${data.Actors}</p>
            <button class="btn btn-primary" onclick="addFav('${data.Title}')">Add To fav</button>
          </div>
        </div>`
        document.getElementById("ineHtm").innerHTML=htm;
}
function addFav(favo){
    fav.push(favo);
    let innerHt='';
    innerHt= `<div class="container">`
    for(let i=0;i<fav.length;i++){
        innerHt+=`
        <div class="row">
          <div class="col">
          <button class="btn" onclick="storedata('${fav[i]}')"><a  href="fav.html"><li>${fav[i]}</li></a></button>
          </div>
        </div>` 
    }
    innerHt+=`</div>`
    document.getElementById("addFav").innerHTML=innerHt;
}

function storedata(val){
    localStorage.setItem('movie',val);
}

async function showdata(){
    let sto=localStorage.getItem('movie');
    
    const response=await fetch(`https://www.omdbapi.com/?t=${sto}&apikey=${apiKey}`);
    const data=await response.json();
    console.log(data.Title);
    var htm=`<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">${data.Genre}</p>
            <p class="card-text">${data.Actors}</p>
            <img src="${data.Poster}" class="img-fluid" alt="Responsive image">
          </div>
        </div>`
        document.getElementById("showFavItem").innerHTML=htm;
}