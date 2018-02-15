

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#submitBtn").addEventListener("click", (e) => {
        e.preventDefault();
        let name = document.querySelector("#inputName");
        let time = document.querySelector("#inputTime");
        let phone = document.querySelector("#inputPhone");
        let cutter = document.querySelector("#inputCutter");
        let message = document.querySelector("#inputBesked");
        console.log(name.value, time.value, phone.value, cutter.value, message.value)

        if (name.value == "" || time.value == "" || phone.value == "" || cutter.value == "" || message.value == "") {
            alert("Du mangler at udfylde et felt")
        } else {

            // FETCH DATA

            var object = {
                name: name.value,
                time: time.value,
                phone: phone.value,
                cutter: cutter.value,
                message: message.value
            }

            console.log(object)

            let url = "http://localhost:3000/bestiltid"
            let data = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object),
            }

            // FETCH
            fetch(url, data)
                .then(res => res.json())
                .then(response => console.log('Success:', response))
                .catch(error => console.log("Error" + error))
        }


    })
});