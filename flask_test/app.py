from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)

secret_key = "12345"

@app.route('/post', methods=['POST'])
def post():
  username = request.json.get('username')
  
  token = jwt.encode({'username': username}, secret_key, algorithm="HS256")
  
  print(f"Got the username {username}")
  
  return jsonify({'token': token})
  
if __name__ == '__main__':
  app.run(host='127.0.0.1', port=3200)