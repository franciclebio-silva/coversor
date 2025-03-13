
const botaoConverte = document.querySelector(".botaoConverte")
const select1 = document.querySelector(".select1")

function converterValor() {
    const inputValor = document.querySelector(".inputValue").value
    const moedaConverte = document.querySelector(".moedaConverte")
    const moedaConvertida = document.querySelector(".moedaConvertida")



    const Real = 1.00
    const Dolar = 5.2
    const Euro = 6
    const Bitcoin1 = 499
    const Libra = 6

    if (select1.value == "Dolar") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USA"
            }).format(inputValor / Dolar)
    }

 
    if (select1.value == "Euro") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputValor / Euro)

    }

    if (select1.value == "Real") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BRL"
            }).format(inputValor * Real)

    }

    if (select1.value == "£ Libra") {
           moedaConvertida.innerHTML = new Intl.NumberFormat("BrE",
            {
                style: "currency",
                currency: "Libra"
            }).format(inputValor / Libra)
     }

     
    if (select1.value == "Biticoin") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("BIT",
            {
                style: "currency",
                currency: "BTC"
            }).format(inputValor / Bitcoin1)
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

        if (select1.value == "Dolar") {
            moedaDola.innerHTML = "dólar Americano"
            imagenUsa.src = "./img/usa.png"
        }
    
        if (select1.value == "Euro") {
            moedaDola.innerHTML = "Euro"
            imagenUsa.src = "./img/euro.png"
        }

        if (select1.value == "Libra") {
            moedaDola.innerHTML = "£"
            imagenUsa.src = "./img/libra.png"
        }

        if (select1.value == "Bitcoin") {
            moedaDola.innerHTML = "BTC"
            imagenUsa.src = "./img/Bitcoin.png"
        }

        if (select1.value == "Real") {
            moedaDola.innerHTML = "BRL"
            imagenUsa.src = "./img/bra.png"
        }
        
   
        converterValor()
    
}

    select1.addEventListener("change", moedaNome)
    botaoConverte.addEventListener("click", converterValor)
