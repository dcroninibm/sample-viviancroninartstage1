<?php
ini_set('upload_max_filesize', '5M');
ini_set('post_max_size', '5M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);

$stack_settings = array(
	'service' 			=> 'sftp',
	'destination' 		=> trim('webroot'),
	'dir' 				=> trim('/uploads'),
	'server' 			=> trim('server.domain.com'),
	'server_port' 		=> 22,
	'username'	 		=> trim(''),
	'password' 			=> trim(''),
	
	'extensions' 		=> preg_match('/\w/','') ? explode(',',preg_replace('/\s+/','','')) : null,
	'meta_file' 		=> 0,
	'send_email' 		=> 0,
	'to_address' 		=> trim(preg_replace('/\s+/','','')),
	'from_address' 		=> trim("fallback_from"),
	'fallback_from' 	=> trim("no-reply@mydomain.com"),
	'subject' 			=> trim("New File Upload"),
	'inputone' 			=> 0,
	'inputone_label'	=> trim("Name"),
	'inputtwo' 			=> 0,
	'inputtwo_label' 	=> trim("Email"),
	'textarea' 			=> 0,
	'textarea_label' 	=> trim("Notes"),
	'humantest' 		=> 0,
	'passphrase' 		=> trim(""),
	'rename_files' 		=> 1,
	'rename_duplicates' => 0,
	'rename_rule' 		=> trim('filename_datetime')
);

$GOOD_RUN = 'COMPLETE';
$SIZE_ALERT = 'FILE_SIZE_LIMIT_EXCEEDED';
$PASSPHRASE_ALERT = 'PASSPHRASE_ALERT';
$LOGIN_ALERT = 'LOGIN_ALERT';
$MOVE_ALERT = 'MOVE_ALERT';
$EXTENSION_ALERT = 'FORBIDDEN_FILE_TYPE';

if (file_exists('dispatch.demo')) {
	echo $GOOD_RUN;
	exit;
}

function generate_message($file) {
	global $stack_settings;
	$message = "Browser Agent: ".$_SERVER['HTTP_USER_AGENT']."\nIP Address: ".$_SERVER['REMOTE_ADDR']."\n\nFile: $file\n\n";
	if ($stack_settings['inputone']) $message .= $stack_settings['inputone_label'].": ".$_POST['inputone']."\n";
	if ($stack_settings['inputtwo']) $message .= $stack_settings['inputtwo_label'].": ".$_POST['inputtwo']."\n";
	if ($stack_settings['textarea']) $message .= $stack_settings['textarea_label'].":\n".$_POST['textarea']."\n";
	return $message;
}
function email_submission($file) {
	global $stack_settings;
	$from_field = $stack_settings['from_address'];
	if ($stack_settings[$from_field] && isset($_POST[$from_field]) && filter_var($_POST[$from_field], FILTER_VALIDATE_EMAIL)) {
    	$from = trim($_POST[$from_field]);
	} 
	else $from = $stack_settings['fallback_from'];
	$headers = "From:$from";
	$message = generate_message($file);
	mail($stack_settings['to_address'],$stack_settings['subject'],$message,$headers);
	return;
}
function check_exists($file, $service) {
	global $stack_settings;
	switch ($stack_settings['service']) {
	    case 'sftp':
		    if ($stack_settings['destination'] == 'sftp') {
		    	if ($service->size($file)) return true;
		    	return false;
		    }
		    return file_exists($file);
	    case 'dropbox':	    	
	    	$pathinfo = pathinfo($file);
	    	$results = $service->search($pathinfo['basename'],$pathinfo['dirname'],1);
	    	if (is_array($results)) return true;
	    	return false;
	    case 'amazons3':
	    	$s3 = $service['service'];
            return $s3->getObjectInfo($service['bucket'],$file,false);
    }
    return false;
}
function rename_file($file, $service = false) {
	global $stack_settings;
	if ($stack_settings['rename_duplicates'] && !check_exists($file, $service)) return $file;

	$pathinfo = pathinfo($file);
	$date_format = 'Ymd-His';
	$non_word_chars = '/[\W]/';
	
	switch ($stack_settings['rename_rule']) {
	    case 'filename_datetime':
	        $filename = $pathinfo['filename'] .'-'. date($date_format);
	        break;
	    case 'filename_uniqueid':
	        $filename = $pathinfo['filename'] .'-'. uniqid();
	        break;
	    case 'input1':
	        $filename = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone']) : $pathinfo['filename'];
	        if (check_exists($pathinfo['dirname'] .'/'. $filename .'.'. $pathinfo['extension'], $service)) $filename .= '-'. date($date_format);
	        break;
	    case 'input1_prepend':
	        $filename = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone']) : '';
	        $filename .= '-'. $pathinfo['filename'];
	        break;
	    case 'input1_datetime':
	        $filename = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone']) : $pathinfo['filename'];
	        $filename .= '-'. date($date_format);
	        break;
	    case 'input2':
	        $filename = isset($_POST['inputtwo']) ? preg_replace($non_word_chars,'',$_POST['inputtwo']) : $pathinfo['filename'];
	        if (check_exists($pathinfo['dirname'] .'/'. $filename .'.'. $pathinfo['extension'], $service)) $filename .= '-'. date($date_format);
	        break;
	    case 'input2_prepend':
	        $filename = isset($_POST['inputtwo']) ? preg_replace($non_word_chars,'',$_POST['inputtwo']) : '';
	        $filename .= '-'. $pathinfo['filename'];
	        break;
	    case 'input2_datetime':
	        $filename = isset($_POST['inputtwo']) ? preg_replace($non_word_chars,'',$_POST['inputtwo']) : $pathinfo['filename'];
	        $filename .= '-'. date($date_format);
	        break;
	    case 'input1_input2':
	        $filename  = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone'])     : $pathinfo['filename'];
	        $filename .= isset($_POST['inputtwo']) ? '-'.preg_replace($non_word_chars,'',$_POST['inputtwo']) : '';
	        if (check_exists($pathinfo['dirname'] .'/'. $filename .'.'. $pathinfo['extension'], $service)) $filename .= '-'. date($date_format);
	        break;
	    case 'input1_input2_datetime':
	        $filename  = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone'])     : $pathinfo['filename'];
	        $filename .= isset($_POST['inputtwo']) ? '-'.preg_replace($non_word_chars,'',$_POST['inputtwo']) : '';
	        $filename .= '-'. date($date_format);
	        break;
	    case 'input1_input2_prepend':
	        $filename  = isset($_POST['inputone']) ? preg_replace($non_word_chars,'',$_POST['inputone'])     : '';
	        $filename .= isset($_POST['inputtwo']) ? '-'.preg_replace($non_word_chars,'',$_POST['inputtwo']) : '';
	        $filename .= '-'. $pathinfo['filename'];
	        break;
	    default:
	        $filename = $pathinfo['filename'];
	        break;
    }
    return $pathinfo['dirname'] .'/'. $filename .'.'. $pathinfo['extension'];
}


try {	
    if (isset($_POST['password_verify'])) {
    	echo $_POST['password_verify'] === $stack_settings['passphrase'] ? 'true' : 'false';
    	exit;
    }
    if (isset($_POST['passphrase']) && $_POST['passphrase'] !== $stack_settings['passphrase']) throw new Exception($PASSPHRASE_ALERT);
    			
	if (!empty($_FILES)) {

//------------------------
// Upload to Server		
//------------------------
		$tempFile   = $_FILES['Filedata']['tmp_name'];
		$uploadDir  = $stack_settings['destination'] === 'webroot' ? $_SERVER['DOCUMENT_ROOT'] . $stack_settings['dir'] : $stack_settings['dir'];
		$filename 	= str_replace("/\0", '_', $_FILES['Filedata']['name']);
		$targetFile = $uploadDir .'/'. $filename;
	
		if ($stack_settings['meta_file']) {
			$message = generate_message($targetFile);		
			$meta_file = array_search('uri', @array_flip(stream_get_meta_data($GLOBALS[mt_rand()]=tmpfile()))); 
			file_put_contents($meta_file, $message);		
		}
		
		// Validate the filetype
		$fileParts = pathinfo($_FILES['Filedata']['name']);
		if ($stack_settings['extensions'] == null || in_array(strtolower($fileParts['extension']), $stack_settings['extensions'])) {
            if ($stack_settings['destination'] == 'sftp') {
                // Upload to SFTP
                set_include_path(get_include_path() . PATH_SEPARATOR . '../files/PHP_SEC_LIB'. PATH_SEPARATOR . '../files/PHP_SEC_LIB/Crypt'. PATH_SEPARATOR . '../files/PHP_SEC_LIB/Math'. PATH_SEPARATOR . '../files/PHP_SEC_LIB/Net');
                require_once('Net/SFTP.php');
    
                $sftp = new Net_SFTP($stack_settings['server'], $stack_settings['server_port']);
                if (!$sftp->login($stack_settings['username'], $stack_settings['password'])) {
                    throw new Exception($LOGIN_ALERT);
                }
                $targetFile = $stack_settings['rename_files'] ? rename_file($targetFile, $sftp) : $targetFile;
                if ($sftp->put($targetFile, $tempFile, NET_SFTP_LOCAL_FILE)) {
	                echo $GOOD_RUN;
	                if ($stack_settings['meta_file']) {
	                	$sftp->put($targetFile.'.txt', $meta_file, NET_SFTP_LOCAL_FILE);
					}
                }
                else {
	                throw new Exception($MOVE_ALERT);
                }
            }
            else {
        		$targetFile = $stack_settings['rename_files'] ? rename_file($targetFile) : $targetFile;

                if (move_uploaded_file($tempFile, $targetFile)) {
					echo $GOOD_RUN;
	                if ($stack_settings['meta_file']) {
	                	copy($meta_file, $targetFile.'.txt');
					}
					if ($stack_settings['send_email']) email_submission($targetFile);
                }
                else {
	                throw new Exception($MOVE_ALERT);
                }
            }    
//------------------------
// Upload to Server		
//------------------------

		} 
		else {
			throw new Exception($EXTENSION_ALERT);
		}
	}
}
catch(Exception $e) {
	echo trim(htmlspecialchars($e->getMessage()));
}
?>
