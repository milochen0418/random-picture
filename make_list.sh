#!/bin/bash


CNT=0
rm -f list.txt
touch list.txt
for i in $(ls ./previews/)
do 
	#echo $i
	CNT=$((CNT + 1))
	echo I$CNT $i >> list.txt 
done
