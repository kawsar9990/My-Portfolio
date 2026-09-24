'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Bookmark,
  Share2,
  Check,
  Copy,
} from 'lucide-react';

export default function Page() {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

 const sampleCode = `// ESP32 Firmware: MQTT Sensor Telemetry Publisher
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* mqtt_server = "broker.hivemq.com";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  client.setServer(mqtt_server, 1883);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  float temp = readTemperature(); // Custom Sensor Function
  String payload = "{\\"temperature\\":" + String(temp) + "}";
  client.publish("esp32/telemetry", payload.c_str());
  delay(5000); // 5 Seconds Telemetry Interval
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white pt-25 dark:bg-[#030712] text-slate-800 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <article className="max-w-4xl mx-auto">
       
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>

          <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                bookmarked ? 'text-purple-600 dark:text-purple-400' : ''
              }`}
              title="Bookmark Article"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Designing Smart Embedded Systems',
                    url: window.location.href,
                  });
                }
              }}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      
        <div className="mb-4">
          <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">
            IoT & Hardware
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-6">
          Integrating Embedded Microcontrollers with Modern Web APIs for Automation
        </h1>

        
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-1.5">
            <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              Kawsar Ahmed
            </span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4" />
            <span>Sep 24, 2026</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4" />
            <span>20 min read</span>
          </div>
        </div>


        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <Image
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221593/laptop_robotics_hacking_scene_boh3g5.png"
            alt="Embedded Smart Systems"
            fill
            priority
            className="object-cover"
          />
        </div>

     
        <div className="my-8 pl-6 border-l-4 border-purple-600 dark:border-purple-500 py-1 bg-purple-50/50 dark:bg-purple-950/20 rounded-r-lg">
          <p className="text-[13px] sm:text-lg italic font-medium text-slate-700 dark:text-slate-300">
            &ldquo;Bridging hardware microcontrollers with real-time web dashboards requires low latency, lightweight network protocols, and robust memory management.&rdquo;
          </p>
        </div>

    
        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            The Core Challenge in Hardware-Web Integration
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Connecting resource-constrained embedded microcontrollers like the <strong className="text-slate-900 dark:text-slate-100">ESP32</strong> or <strong className="text-slate-900 dark:text-slate-100">STM32</strong> to web environments presents unique memory and bandwidth bottlenecks. Traditional HTTP polling introduces unacceptable latency and consumes excessive processing overhead.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            The Optimal Solution: Combine <strong className="text-slate-900 dark:text-slate-100">MQTT</strong> for lightweight binary packet telemetry with <strong className="text-slate-900 dark:text-slate-100">WebSockets</strong> on the backend Node.js layer to push bi-directional updates straight to the Next.js frontend UI without reloading.
          </p>
        </section>

        
        <section className="space-y-4 mb-10">
          <h2 className="text-[18px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Embedded Firmware Implementation (ESP32 C++)
          </h2>

          <div className="relative group rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-md">
           
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 text-xs text-slate-400 font-mono">
              <span>firmware/esp32_mqtt.cpp</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center space-x-1 hover:text-slate-200 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

           
            <pre className="p-4 text-[8px] sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{sampleCode}</code>
            </pre>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            Note: The firmware serializes payload data into lightweight JSON format before transmitting over the publish/subscribe broker loop.
          </p>
        </section>

       
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Real-Time Synchronization Strategy
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            To prevent network overload when hundreds of sensors communicate simultaneously, the web server uses an event-driven architecture. incoming telemetry triggers WebSocket events, broadcasting payload changes directly to connected client dashboards in under 50 milliseconds.
          </p>
        </section>

        
        <div className="px-3 py-3 sm:p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#0F172B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
            K
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Written by Kawsar Ahmed
            </h4>
            <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Software Engineer & Web Developer specializing in IoT Architecture, Embedded Firmware, and Full-Stack Web Development.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}