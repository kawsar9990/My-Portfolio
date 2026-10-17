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
  Sparkles,
} from 'lucide-react';

export default function IoTBlogPage() {
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
  String payload = "{\\temperature\\":" + String(temp) + "}";
  client.publish("esp32/telemetry", payload.c_str());
  delay(5000); // 5 Seconds Telemetry Interval
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px] dark:bg-purple-500/10" />

      <article className="max-w-4xl mx-auto relative z-10">
      
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all shadow-sm"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Articles
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2.5 cursor-pointer rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all shadow-sm ${
                bookmarked
                  ? 'text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Bookmark Article"
            >
              <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Optimizing React & Next.js Performance',
                    url: window.location.href,
                  });
                }
              }}
              className="p-2.5 cursor-pointer rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              title="Share Article"
            >
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>



        <div className="mb-4">
         <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/50 text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            IoT & Hardware
          </span>
        </div>

        <h1 className="text-[17px] sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.15] mb-6">
          Integrating Embedded Microcontrollers with Modern Web APIs for Automation
        </h1>

        <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-4 sm:gap-6 mb-8 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-lg text-indigo-600 dark:text-indigo-400">
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] sm:text-[14px] font-semibold text-slate-800 dark:text-slate-200">
              Kawsar Ahmed
            </span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center space-x-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span className="text-[10px] sm:text-[14px]">Sep 24, 2026</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
            <span className="text-[10px] sm:text-[14px]">20 min read</span>
          </div>
        </div>

        <div className="relative h-64 sm:h-[420px] w-full rounded-2xl overflow-hidden mb-10 bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-purple-500/5">
          <Image
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790221593/laptop_robotics_hacking_scene_boh3g5.png"
            alt="Embedded Smart Systems"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>

        <div className="my-8 p-6 bg-white/70 dark:bg-slate-900/60 border-l-4 border-purple-600 dark:border-purple-500 rounded-r-2xl border-y border-r border-slate-200/60 dark:border-slate-800/60 shadow-sm backdrop-blur-sm">
          <p className="text-[12px] sm:text-xl italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            &ldquo;Bridging hardware microcontrollers with real-time web dashboards requires low latency, lightweight network protocols, and robust memory management.&rdquo;
          </p>
        </div>

        <section className="space-y-4 mb-10">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            The Core Challenge in Hardware-Web Integration
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            Connecting resource-constrained embedded microcontrollers like the <strong className="text-slate-900 dark:text-slate-100 font-semibold">ESP32</strong> or <strong className="text-slate-900 dark:text-slate-100 font-semibold">STM32</strong> to web environments presents unique memory and bandwidth bottlenecks. Traditional HTTP polling introduces unacceptable latency and consumes excessive processing overhead.
          </p>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            The Optimal Solution: Combine <strong className="text-slate-900 dark:text-slate-100 font-semibold">MQTT</strong> for lightweight binary packet telemetry with <strong className="text-slate-900 dark:text-slate-100 font-semibold">WebSockets</strong> on the backend Node.js layer to push bi-directional updates straight to the Next.js frontend UI without reloading.
          </p>
        </section>

        <section className="space-y-4 mb-10 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Embedded Firmware Implementation (ESP32 C++)
          </h2>

          <div className="relative group rounded-2xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 dark:bg-slate-900/90 border-b border-slate-700/60 text-xs text-slate-300 font-mono">
              <span className="text-[10px] sm:text-[15px] font-semibold text-slate-300">firmware/esp32_mqtt.cpp</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px] sm:text-[13px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-[13px]">Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-[5px] md:text-[10px] lg:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
              <code>{sampleCode}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
            Note: The firmware serializes payload data into lightweight JSON format before transmitting over the publish/subscribe broker loop.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-[15px] sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Real-Time Synchronization Strategy
          </h2>
          <p className="text-slate-600 text-[12px] sm:text-[15px] dark:text-slate-300 leading-relaxed text-base">
            To prevent network overload when hundreds of sensors communicate simultaneously, the web server uses an event-driven architecture. incoming telemetry triggers WebSocket events, broadcasting payload changes directly to connected client dashboards in under 50 milliseconds.
          </p>
        </section>

        <div className="px-3 py-3 sm:p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-5 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md shadow-indigo-500/20">
            K
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Written by Kawsar Ahmed
            </h4>
            <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Software Engineer & Full-Stack Developer focusing on clean architecture, performance, and modern web application development.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}