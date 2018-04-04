for f in *.m*
do
	ffmpeg -i "$f" -acodec libmp3lame mp3/"$f".mp3;
done
