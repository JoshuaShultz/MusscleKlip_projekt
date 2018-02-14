document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelector("#opretProdukt").addEventListener("click", (event) => {
            event.preventDefault();
            obj = JSON.stringify({
                navn : document.querySelector("#navn").value,
                pris : document.querySelector("#pris").value,
                beskrivelse : document.querySelector("#beskrivelse").value,
                billede : document.querySelector("#billede").value
            })
            fetch("http://localhost:3000/opretprodukter/", {
                'method': 'post',
                'headers': {
                    'Content-Type': 'application/json'
                },
                "body": obj,
                'mode': 'cors',
                'cache': 'default'
            })
        })
})