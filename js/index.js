
function verPrecio (destino){
    switch(destino){
        case "francia":
            alert("Nuestro paquete a Francia está a 3000 USD")
            break
        case "holanda":
            alert("Nuestro paquete a Holanda está a 2000 USD")
            break
        case "inglaterra":
            alert("Nuestro paquete a Inglaterra está a 4000 USD")
            break
        case "españa":
                alert("Nuestro paquete a España está a 1500 USD")
                break
        case "estados unidos":
                alert("Nuestro paquete a Estados Unidos está a 2500 USD")
                break
        default:
                alert("No entendimos tu selección.")
    }
}

function consultarPaquete(){
    let consultar = true
    while (consultar){
        let nombreDestino = prompt ("Elegí tu destino favorito")
        if (nombreDestino !== '' && nombreDestino !== null){
        verPrecio(nombreDestino)
        } else {
        console.warn("Ingresa un destino válido")
        }
        consultar = confirm("¿Deseas conocer el precio de otro paquete?")
    }
}

consultarPaquete ()



