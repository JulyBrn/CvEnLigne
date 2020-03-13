<?php

    if(isset($_POST['formbtn']))
    {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mail = $_POST['email'];
        $message = $_POST['message'];
        $headers = 'FROM: julybrn60@gmail.com';
        

        if(!empty($name) AND !empty($subject) AND !empty($mail) AND !empty($message))
        {
            echoz

        }
        else
        {
            echo "les hirondelles sont bleue";
            $msg = " Tous les champs doivent être complétés ";
        }
    }
    // if(!empty($msg))
    {
        // header('Location: index.php');
    }
    // else
    
    // mail('julybrn60@gmail.com' , $subject , $message, $headers); 
?>