import swal from 'sweetalert'
const alerted= () =>{
    swal(
        {
            title:"Bienvenido a Naturi",
            text:"Envios gratis por compras superiores a $ 100.000",
            icon:"warning",
            button:"Aceptar"
        }
    )
}
export default alerted;