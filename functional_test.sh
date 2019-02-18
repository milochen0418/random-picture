#!/bin/bash
TOTAL=$(cat list.txt | wc -l)
CNT=0
rm -f test_result.txt
touch test_result.txt
echo "Running TEST START "
for i in $(seq 1 $TOTAL)
do 
	CNT=$i
	printf "[%s/%s]\r" $CNT $TOTAL
	FILE=$(./query_list.sh $i)
	echo I$CNT $FILE >> test_result.txt
done

echo ""
echo "Running TEST END"

LIST_MD5=$(md5sum test_result.txt | awk '{print $1}')
TEST_MD5=$(md5sum list.txt | awk '{print $1}')

if [ $LIST_MD5 = $TEST_MD5 ] ; then
	echo "TEST PASS"
else 
	echo "TEST FAILED"
fi

