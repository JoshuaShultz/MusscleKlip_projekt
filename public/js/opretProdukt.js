document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelector("#opretProdukt").addEventListener("click", (event) => {
            event.preventDefault();
            fetch("http://localhost:3000/opretprodukter/", {
                'method': 'post',
                'headers': {
                    'Content-Type': 'application/json'
                },
                "body": `{"navn":"${document.querySelector("#navn").value}","beskrivelse":"${document.querySelector("#beskrivelse").value}","pris":"${document.querySelector("#pris").value}","billede":"${document.querySelector("#billede").value}"}`,
                'mode': 'cors',
                'cache': 'default'
            })
        })
})