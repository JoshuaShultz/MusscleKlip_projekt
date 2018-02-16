document.querySelector("#opretProdukt").addEventListener("click", event => {
    event.preventDefault();

let navn = document.querySelector("#navn").value;
let vej = document.querySelector("#vej").value;
let postnr = document.querySelector("#postnr").value;
let email = document.querySelector("#email").value;
let tlf = document.querySelector("#tlf").value;
let by = document.querySelector("#by").value;

let object = {
    navn,
    vej,
    postnr,
    email,
    tlf,
    by
}

console.log(object)

    let url = "http://localhost:3000/retinfo";
    let data = {
        method: "put",
        'headers': {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(object),
        'mode': 'cors',
        'cache': 'default'
    }

    fetch(url, data)
        .then(data => {
            window.location.reload();
        })
        .catch(err => console.log(err))

})