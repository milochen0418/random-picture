#!/bin/bash
ARG=1

if [ $# -gt 0 ]; then
	ARG=$1
fi

TOTAL=$(cat list.txt | wc -l)
ARG=$RANDOM
ARG=$((ARG % TOTAL + 1))
#echo $ARG
FILE_NAME=$(./query_list.sh $ARG);
echo "FILE_NAME=$FILE_NAME"
cp ./previews/$FILE_NAME ./public/images/index.jpg
