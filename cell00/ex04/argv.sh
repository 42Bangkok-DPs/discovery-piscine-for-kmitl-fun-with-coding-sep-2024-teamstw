if [ $# -eq 0 ]; then
    echo "No arguments provided."
elif [ $# -gt 3 ]; then
    echo "Too many arguments. Only 3 arguments are allowed."
else
    echo "Arguments: $1 $2 $3"
fi