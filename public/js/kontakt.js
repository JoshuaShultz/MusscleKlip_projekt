

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

            var object = JSON.stringify({
                name: name.value,
                time: time.value,
                phone: phone.value,
                cutter: cutter.value,
                message: message.value
            })

            console.log(object)


            fetch("http://localhost:3000/bestiltid", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: object,
            })
            .then(res => res.json())
            .catch(error => console.log("Error" + error))
        }


    })
});