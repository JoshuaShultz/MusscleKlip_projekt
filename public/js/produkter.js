document.addEventListener("DOMContentLoaded", (event) => {
    let id;
    let deleteprodukt = document.querySelectorAll(".delete");
    deleteprodukt.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            fetch("http://localhost:3000/produkter/" + element.dataset.id, {
                'method': 'delete',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'mode': 'cors',
                'cache': 'default'
            })
            .then(() => window.location.reload())
        })
    })

    let redigerprodukt = document.querySelectorAll(".edit");
    redigerprodukt.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(element);
            id = element.dataset.id;
            fetch("http://localhost:3000/produkter/" + element.dataset.id)
                .then(data => data.json())
                .then(data => {
                    console.log(data.product)
                    let redigernavn = document.querySelector("#product_id");
                    redigernavn.value = data.product.produktnavn
                    let redigerbeskrivelse = document.querySelector("#product_name");
                    redigerbeskrivelse.value = data.product.info
                    let redigerpris = document.querySelector("#product_name_fr");
                    redigerpris.value = data.product.pris
                    let redigerbillede = document.querySelector("#filebutton");
                    redigerbillede.value = data.product.produktbillede

                })
        })


    })
    document.querySelector('#singlebutton').addEventListener('click', (event) => {
        event.preventDefault();
        let redigernavn = document.querySelector("#product_id");
        let redigerbeskrivelse = document.querySelector("#product_name");
        let redigerpris = document.querySelector("#product_name_fr");
        let redigerbillede = document.querySelector("#filebutton");
        

        let object = JSON.stringify({
            id: id,
            navn: redigernavn.value,
            beskrivelse: redigerbeskrivelse.value,
            pris: redigerpris.value,
            produktbillede: redigerbillede.value
        })

        fetch("http://localhost:3000/redigereprodukter/", {
            'method': 'put',
            'headers': {
                'Content-Type': 'application/json'
            },
            "body": object,
            'mode': 'cors',
            'cache': 'default'
        })
        .then(data => {
            window.location.reload();
        })
    })
});
