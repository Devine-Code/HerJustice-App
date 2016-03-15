<?php
$RDS_HOSTNAME="localhost";
$RDS_USERNAME="root";
$RDS_PASSWORD="";
$RDS_DB_NAME="drashti";

$con = mysqli_connect($RDS_HOSTNAME, $RDS_USERNAME,$RDS_PASSWORD,$RDS_DB_NAME);

if(!$con)
{
	//die ("Connection Error...".mysqli_connect_error());
}
else
{
	//echo "<h3>Connection Success...</h3>";
}

?>
