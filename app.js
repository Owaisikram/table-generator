let inputForm = document.querySelector("#Tableinputform");
let input = document.querySelector("#inputvalue");
let table = document.querySelector(".tablecont");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tableOf = input.value;

    table.innerHTML = "";

    for (let i = 1; i <= 12; i++) {
        //console.log(tableOf + " x " + i + " =", tableOf * i);
        const message = `${tableOf} X ${i} = ${tableOf * i}`;

        table.innerHTML += `${message} <br>`;
    }
});