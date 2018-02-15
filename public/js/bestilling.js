let btn = document.querySelectorAll(".delete");

btn.forEach(item => {
    item.addEventListener("click", (event) => {
        // event.preventDefault();
        console.log(item.dataset.id);
        let url = "http://localhost:3000/sletbestilling/" + item.dataset.id;
        let data = {
            method: "DELETE",
        }
        fetch(url, data)
        .catch(err => {
            console.log(err)
        })
})

})
