<?php

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$edad = $_POST['edad'];
$direccion = $_POST['direccion'];
$num_bol = $_POST['num_bol'];
$tipo_bol = $_POST['tipo_bol'];
$mensaje;
$imagen;
$cont;
$falta;
$num_bol_esp;

$falta = $num_bol - 15;

if ($num_bol>=1){

    if($num_bol>15){
        $num_bol_esp = $num_bol - $falta;
    }

    else{
         $num_bol_esp = $num_bol;
     }

    $cont = $num_bol_esp;

    if($num_bol_esp<=15){

    switch ($tipo_bol){
        case "Pin Pon": 
            $mensaje = "De Volon Pin Pon";
            break;
        case "VIP":
            $mensaje = "Bienvenid@ Señor/a $nombre";
            break;
        case "Flash":
            $mensaje = "Mi nombre es Wally West";
            break;
        case "Normal":
            $mensaje = "Todo con medida";
            break;
        default:
            $mensaje = "Humildad ante todo";
    }

    switch ($tipo_bol){
        case "Pin Pon": 
            $imagen = '<img src="./pinpon.jpg" width="250">';
            break;
        case "VIP":
            $imagen = '<img src="./vip.jpg" width="250">';
            break;
        case "Flash":
            $imagen = '<img src="./flash.jpg" width="250">';
            break;
        case "Normal":
            $imagen = '<img src="./normal.jpg" width="250">';
            break;
        default:
            $imagen = '<img src="./humilde.jpeg" width="250">';
    }  

    do{
        echo '
            <table border= 1px cellpadding=10>
            <tr><td colspan="4"><h1><center>Six flags</center></h1></td></tr>
            <tr>
            <td>'. $nombre. '</td>
            <td>'. $apellidos.'</td>
            <td>'. $edad.'</td>
            <td rowspan="3">'. $imagen .'</td>
        </tr>

        <tr>
            <td>'. $direccion.'</td>
            <td>'. $num_bol.'</td>
            <td>'. $tipo_bol.'</td>
        </tr>

        <tr>
            <td colspan="3">'. $mensaje.'</td>
        </tr>
        </table>
        <br> <br>
        ';
    
        $cont--;
      
    } while ($cont>0);
    } 

    if ($num_bol>15){
        echo '<h2> Faltan '. $falta .' boletos por desplegar</h2>';
    }

}
else{
    echo 'Error: No se ingresaron boletos';
}

?>
