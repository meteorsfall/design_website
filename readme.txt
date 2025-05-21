use pip install -r requirements.txt to install all dependencies

install postgres (postgresql postgresql-contrib) with the command
sudo apt install postgresql postgresql-contrib -y

then initialize the database with
sudo -u postgres psql
inside of psql, run 
CREATE DATABASE mydb
ALTER USER postgres WITH PASSWORD 'password';
then log back in with
sudo -u postgres psql -d mydb
and finally, run
uvicorn main:app --host 0.0.0.0 --port 8000
