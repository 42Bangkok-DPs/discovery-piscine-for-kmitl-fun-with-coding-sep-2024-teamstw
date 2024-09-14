if [ $# -eq 0 ]; then
    echo "No arguments provided."
elif [ $# -gt 3 ]; then
    echo "Arguments: $1 $2 $3"
else
    echo "Arguments: $1 $2 $3"
fi