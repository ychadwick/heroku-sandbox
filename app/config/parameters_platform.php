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

# Hack.