<?php
$databaseUrl = getenv("CLEARDB_DATABASE_URL");
if (!$databaseUrl) {
    return;
}


$dbopts = parse_url($databaseUrl);


$container->setParameter('database_driver', 'pdo_' . $dbopts['scheme']);
$container->setParameter('database_host', $dbopts['host']);
//$container->setParameter('database_port', $dbopts['port']);
$container->setParameter('database_name', str_replace('/', '', $dbopts['path']));
$container->setParameter('database_user', $dbopts['user']);
$container->setParameter('database_password', $dbopts['pass']);
$container->setParameter('database_path', '');

$awsBucket = getenv('AWS_BUCKET');
$awsAccessKey = getenv('AWS_ACCESS_KEY_ID');
$awsSecretKey = getenv('AWS_SECRET_ACCESS_KEY');

$container->setParameter('aws_bucket', $awsBucket);
$container->setParameter('aws_access_key', $awsAccessKey);
$container->setParameter('aws_secret_key', $awsSecretKey);

# Hack.