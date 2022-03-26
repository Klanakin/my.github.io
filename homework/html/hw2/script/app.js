document.addEventListener('DOMcontentLoaded', ()=> {
    //const dropDown = document.getElementById('origin');

    fetch('https://countriesnow.space/api/v0.1/countries/population/cities').then(res => {
        res.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
});