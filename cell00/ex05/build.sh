if [ $# -eq 0 ]; then
  echo "No arguments provided. Please provide folder names."
  exit 1
fi

for folder in "$@"
do
  new_folder="ex${folder}"

  mkdir -p "$new_folder"
  echo "Created folder: $new_folder"
done