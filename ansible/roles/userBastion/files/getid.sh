oldnum=`cut -d ',' -f2 fetcheduser.txt`
newnum=`expr $oldnum + 1`
sed -i "s/$oldnum\$/$newnum/g" fetcheduser.txt
echo $newnum