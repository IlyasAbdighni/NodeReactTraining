function localtunnel {
  lt -s eijfeljl98343reffdspj --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done