
const botaoConverte = document.querySelector(".botaoConverte")
const select1 = document.querySelector(".select2")

function converterValor() {
    const inputValor = document.querySelector(".inputValue").value
    const moedaConverte = document.querySelector(".moeda-value")
    const moedaConvertida = document.querySelector(".moeda-value1")



    const dolar = 5.2
    const euro = 6


    if (select1.value == "dolar") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USA"
            }).format(inputValor / dolar)
    }

    if (select1.value == "euro") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputValor / euro)

    }

    moedaConverte.innerHTML = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }).format(inputValor)
}



function moedaNome() {
    const moedaDola = document.getElementById("moedaDola")
    const imagenUsa = document.querySelector(".img-usa")

    if (select1.value == "dolar"){
        moedaDola.innerHTML = "dólar Americano"
        imagenUsa.src = "./img/usa.png"
    }

    if (select1.value == "euro") {
        moedaDola.innerHTML = "euro"
        imagenUsa.src = "./img/euro.png"
    }

    converterValor()
}


select1.addEventListener("change", moedaNome)  
botaoConverte.addEventListener("click", converterValor)
