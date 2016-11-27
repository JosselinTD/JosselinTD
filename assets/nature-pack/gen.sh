touch dist.json
for f in *.obj; do
	ind=`expr index "$f" .`;
	name=${f:0:ind-1};
	echo "$name:{scale: scale,offset: '-0.5 0 0.5',obj: '/assets/nature-pack/$name.obj',mtl: '/assets/nature-pack/$name.mtl'}," >> dist.json
done
