# curl -H 'Content-Type: application/json' http://localhost:8000/api/leads/1/

: '
for (( n=1; n<=3; n++ ))  
do  
  curl -H 'Content-Type: application/json' http://localhost:8000/api/leads/$n/
done
'
  
  curl -H 'Content-Type: application/json' http://localhost:8000/api/leads/$1/
