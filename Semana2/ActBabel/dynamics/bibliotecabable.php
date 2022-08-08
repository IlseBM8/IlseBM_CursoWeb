<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca de Babel</title>
    <link rel="stylesheet" href="./estilo.css">
</head>
<body>
    <?php
    $zona = (isset($_POST['zona'])&& $_POST["zona"] != "")? $_POST['zona'] : "No especifico";
    $modo = (isset($_POST['modo'])&& $_POST["modo"] != "")? $_POST['modo'] : "No especifico";
    $busqueda = (isset($_POST['busqueda'])&& $_POST["busqueda"] != "")? $_POST['busqueda'] : "Los que preguntan son siempre los mas peligrosos";

        $TotalPalabras = rand(300, 500);
        $LugarFrase = rand(0, $TotalPalabras); 
        $titulo=rand (0, 10000000); 
        $arregloEx = explode(" ", $busqueda);
        $contar = count($arregloEx);
        $zz= 0;

        do{
        $dia = rand(1,31);
        $mes = rand(1,12);
        $año = rand(1,9999);
    
        $creacion = checkdate($dia,$mes,$año);

        } while ($creacion != 'true');

            if ($creacion = 'true'){
                echo "<br>Fecha de creación del libro: " .$dia."-".$mes."-".$año;
            }

        echo '
        <br> <br>
        <center>
        <table class="tabla">
            <tr> <strong>
                <td> <strong>
            <br>
                <center>Libro: '. $titulo .'</center>   
            <br></strong>
          </td> 
             </tr>
            <tr>
                <td>
        </center>
            ';
        for($i = 0; $i < $TotalPalabras; $i++){
            $TotalLetras = rand(5, 8);
            for($z = 0; $z< $TotalLetras; $z++ ){
                $char = chr (rand (97, 120));
                echo "$char";
            }
            echo ' ';
                    
            switch ($modo){
                case "normal":
                    if($LugarFrase == $i){
                        echo "<strong>". $busqueda."</strong> ";
                    }
                    break;
                    
                case "orden":
                    $arr=explode (" ", $busqueda);
                    sort($arr);
                    $busqueda_orden = implode(" ", $arr);
                    if ($LugarFrase == $i){
                        echo "<strong>". $busqueda_orden." " . "</strong> ";
                    }
                    break;
                     
                default:
                    $arr=explode (" ", $busqueda);
                    $LugarFrase = rand($i, $TotalPalabras);
                    if($zz < $contar && $LugarFrase == $i){
                    echo "<strong>".$arr[$zz]." "."</strong>";
                    $zz++;
                }
            }
        }
    echo '
        </td>
            </tr>
                </table>   
        <br> <br>
        ';
    
    switch ($zona){
        case "newyork":
            date_default_timezone_set("America/New_York");
            break;
        case "cdmx":
            date_default_timezone_set("America/Mexico_City");
            break;
        case "hongkong":
            date_default_timezone_set("Asia/Hong_Kong");
            break;    
        case "tokyo":
            date_default_timezone_set("Asia/Tokyo");
            break;
        case "london":
            date_default_timezone_set("Europe/London");
            break;
        default:
            date_default_timezone_set("America/Sao_Paulo");        
    }
    $fecha = date_default_timezone_get();
            $hora = date('d-m-y h:i:s:a');
            echo  "Fecha de consulta:". $hora ."  en  ".$fecha ."</center> <br> <br>" ;
    ?>
</body>
</html>