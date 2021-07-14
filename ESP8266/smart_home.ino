// declare 2 library
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

//json pattern for publishing
char part1[] = "{\"temperature\":\"";
char part2[] = "\",\"humidity\":\"";
char part3[] = "\"}";
char bufferTemp[10];
char bufferHumi[10];
char publishMessage[50];

// define wifi and broker
const char* ssid = "name_network_wifi"; // name
const char* password = "pw_ưetword_wifi"; // pw
const char* mqtt_server = "localhost";
const int port = 1883;


// set foot for sensor
#define DHTPIN D4 // D4,3V3,GND
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
unsigned long readTime;


// 
WiFiClient espClient;
PubSubClient client(espClient);

// setup for wifi
void setup_wifi(){
  delay(10);
  Serial.println();
  Serial.println("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED ) {
    delay(500);
    Serial.println(".");     
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("]");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]); // show data receive
  }
  // kiểm tra nếu dữ liệu nhận được từ topic ESP8266/LED_GPIO2/status là chuỗi "on"
  // sẽ bậtled GPIO2, nếu là chuỗi "off" sẽ tắt led GPIO2
  if ((char)payload[0] == 'o' && (char)payload[1] == 'n') //on
    digitalWrite(D5, HIGH);
  else if ((char)payload[0] == 'o' && (char)payload[1] == 'f' && (char)payload[2] == 'f') //off
    digitalWrite(D5, LOW);
  Serial.println();
}

void reconnect(){
  while(!client.connected()){
    Serial.print("Attemping MQTT connection...");
    //create random id
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff),HEX);
    // Attempt to connect
    if(client.connect(clientId.c_str())) {
      Serial.println("connected");
      // pub, sub content to Json

    client.subscribe("thanh/device");

      
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state()); // check again for status()
      Serial.println(" try again in 5 seconds");
      // Wait 5s
      delay(5000);
      
    }
    
  }
}

void setup() {
  pinMode(D5, OUTPUT);
  //client.setClient(espClient);
  Serial.begin(115200);
  setup_wifi(); // set wifi
  dht.begin();
  client.setServer(mqtt_server,port);
  client.setCallback(callback);
  readTime = 0;
}

void loop(){

  
  if (!client.connected()) {
    reconnect();
  }

  client.loop();

   if(millis() > readTime+60000){
    sensorRead();
  }

  
}

void sensorRead(){
  memset(publishMessage, 0, 50);
  memset(bufferTemp, 0, 10);
  memset(bufferHumi, 0, 1);

  readTime = millis();
  // Read temperature as Celsius (the default)

   float h = dht.readHumidity();
   float t = dht.readTemperature();
    //float h = 1;
    //float t = 100;

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  
  dtostrf(t,0, 2, bufferTemp);
  dtostrf(h,0, 2, bufferHumi);
  

  strcat(publishMessage, part1);
  strcat(publishMessage, bufferTemp);
  strcat(publishMessage, part2);
  strcat(publishMessage, bufferHumi);
  strcat(publishMessage, part3);
  client.publish("thanh/sensor", publishMessage);

  Serial.println(publishMessage);
  
  
  
}
