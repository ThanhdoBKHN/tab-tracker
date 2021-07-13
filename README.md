# Smart_Home
- A Project Smart Home use Vuejs + Nodejs + Sqlite + Mqtt Broker MoscaJs + Esp8266 + 1 Led and Sensor DHT11
- Project allow control led turn on or off ; seen temperature and humidity by Vue-chartjs ( wrap of chartjs)

# How to run client
- cd client
- npm i
- npm run start

# How to run serve
- cd server 
- npm i 
- npm run start

# How to run broker 
- cd server/src
- nodemon broker.js

# How to run ESP8266 in Adrduino App
- plug in the device and sensor , led
- configure 2 variables "ssid" and "password" in file "ESP8266/smart_home.ino" same as your home network
- run code

# If you don't have ESP8266 to test , you can: 
- Set up mqtt for global : npm i mqtt -g
- Sub message by command: mqtt sub -t 'topic' -h 'localhost' -v (topic in project is "thanh/device")
- Pub message by command: mqtt pub -t 'topic' -h 'localhost' -m '{\"temperature\": \"numberTemp\",\"humidity\":\"numberHumi\"}' 
(topic in project is "thanh/sensor")