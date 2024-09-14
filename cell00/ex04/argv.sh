if [ $# -eq 0 ]; then
    echo "No arguments provided."
elif [ $# -gt 3 ]; then
    echo $1  
    echo $2
    echo $3
else
    echo $1  
    echo $2
    echo $3
fi