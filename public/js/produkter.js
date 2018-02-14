document.addEventListener("DOMContentLoaded", (event) => {
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
        })
    })
})