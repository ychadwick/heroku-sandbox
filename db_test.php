<?php
//$databaseUrl = "mysql://bb3ec6884ad029:d8ac9323@us-cdbr-iron-east-03.cleardb.net/heroku_fc56980a3ecdb8a?reconnect=true";
$databaseUrl = getenv("CLEARDB_DATABASE_URL");

$dbopts = parse_url($databaseUrl);

var_dump($dbopts);

$dbSettings = array();

$dbSettings['database_driver'] = 'pdo_' . $dbopts['scheme'];
$dbSettings['database_host'] = $dbopts['host'];
//$dbSettings['database_port'] = $dbopts['port'];
$dbSettings['database_name'] = str_replace('/', '', $dbopts['path']);
$dbSettings['database_user'] = $dbopts['user'];
$dbSettings['database_password'] = $dbopts['pass'];
$dbSettings['database_path'] = '';

var_dump($dbSettings);
