document.addEventListener("DOMContentLoaded", (event) => {
        document.querySelector("#opretProdukt").addEventListener("click", (event) => {
            event.preventDefault();
            let form = document.querySelector('form')
            let data = new FormData(form);
            fetch("http://localhost:3000/opretprodukter/", {
                'method': 'post',
                'headers': {
                    'Content-Type': 'application/json'
                },
                "body": data,
                'mode': 'cors',
                'cache': 'default'
            })
        })
})