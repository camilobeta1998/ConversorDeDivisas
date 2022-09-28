let moneda_uno = document.getElementById("moneda-uno");
let moneda_dos = document.getElementById("moneda-dos");
let cantidad_uno = document.getElementById("cantidad-uno");
let cantidad_dos = document.getElementById("cantidad-dos");
let boton = document.getElementById("taza");
let cambioEl = document.getElementById("cambio");

function calcular() {
        let tipo_moneda_uno = moneda_uno.value;
        let tipo_moneda_dos = moneda_dos.value;
        fetch(
                `https://v6.exchangerate-api.com/v6/bcde7ba544cd43e86a17649e/latest/${tipo_moneda_uno}`
        )
                .then((response) => response.json())
                .then((data) => {
                        let taza = data.conversion_rates[tipo_moneda_dos];
                        console.log(taza);
                        cambioEl.innerText = ` ${
                                cantidad_uno.value
                        } ${tipo_moneda_uno} = ${(
                                cantidad_uno.value * taza
                        ).toFixed(2)} ${tipo_moneda_dos}`;

                        cantidad_dos.value = (
                                cantidad_uno.value * taza
                        ).toFixed(2);
                });
}

//agregare un evento para el boton
boton.addEventListener("click", function () {
        let temp = moneda_uno.value;
        moneda_uno.value = moneda_dos.value;
        moneda_dos.value = temp;
});
moneda_uno.addEventListener("change", calcular);
moneda_dos.addEventListener("change", calcular);
cantidad_uno.addEventListener("input", calcular);
cantidad_dos.addEventListener("input", calcular);
