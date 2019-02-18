#!/bin/bash
IDX=0
if [ $# -gt 0 ]; then
	IDX=$1
fi
OUTPUT=$(cat list.txt | grep "I$IDX " | awk '{print $2}')
echo $OUTPUT
