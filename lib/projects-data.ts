// lib/projects-data.ts
// Replace the placeholder URLs with your actual Drive, GitHub, LinkedIn, and YouTube links.

export type MediaType = 'image' | 'youtube' | 'video';

export interface ProjectMedia {
  type: MediaType;
  url: string;
}

export const projectsData = {
  "MOD_01": { 
    title: "VyaparLens AI", 
    type: "STARTUP INITIATIVE",
    description: "SYS_DESC: On-device Artificial Intelligence processing for merchant analytics. System utilizes Server-Driven UI via JSON payloads to dynamically alter interface states without client-side patch deployments. Optimized for low-latency inference on ARM-based mobile architectures.",
    specs: { "FRAMEWORK": "Flutter 3.x", "ARCHITECTURE": "Server-Driven UI", "AI_MODEL": "On-Device TFLite", "DATABASE": "Local + Cloud Sync" },
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, // Put your YouTube link here
      { type: "image", url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" }
    ] as ProjectMedia[],
    github: "https://github.com/yourusername/vyaparlens",
    linkedin: "https://linkedin.com/in/yourusername",
    driveLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
    whitePaperLink: "/docs/VyaparLens_AI_Whitepaper.pdf"
  },
  "MOD_02": { 
    title: "Thermal QC System", 
    type: "HARDWARE AUTOMATION", 
    description: "SYS_DESC: Automated hardware rig for stress-testing DC motors under extreme thermal loads. Integrates closed-loop feedback using IR and ambient temperature sensors to predict catastrophic failure points and trigger automated safety relays.",
    specs: { "MCU": "ESP32 WROOM", "SENSOR_1": "DHT11 (Ambient)", "SENSOR_2": "MLX90614 (IR)", "OUTPUT": "Relay Matrix" },
    media: [
      { type: "youtube", url: "https://youtu.be/your_video_id_here" }, // YouTube links work with youtu.be as well
      { type: "image", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" }
    ] as ProjectMedia[],
    github: "https://github.com/yourusername/thermal-qc",
    linkedin: "https://linkedin.com/in/yourusername",
    driveLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
    whitePaperLink: "/docs/Thermal_QC_Whitepaper.pdf"
  },
  "MOD_03": { 
    title: "Smart Water IoT", 
    type: "CLOSED-LOOP TELEMETRY", 
    description: "SYS_DESC: Distributed sensor network for liquid level telemetry. Utilizes ultrasonic time-of-flight measurements processed locally on an ESP32 edge node, transmitting state vectors via 802.11 b/g/n to a centralized Firebase Realtime Database for client dashboard synchronization.",
    specs: { "MCU": "ESP32 NodeMCU", "SENSOR": "HC-SR04 Ultrasonic", "PROTOCOL": "BLE + WiFi (802.11)", "BACKEND": "Firebase RTDB" },
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80" },
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" } // Standard MP4 video file
    ] as ProjectMedia[],
    github: "https://github.com/yourusername/smart-water",
    linkedin: "https://linkedin.com/in/yourusername",
    driveLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
    whitePaperLink: "/docs/SmartWater_IoT_Whitepaper.pdf"
  },
  "MOD_04": { 
    title: "Glynac Analytics", 
    type: "FRONT-END ARCHITECTURE", 
    description: "SYS_DESC: High-performance data visualization client for wealth management tracking. Implements complex state machines to handle large JSON financial datasets, rendering real-time SVG charting components with strict layout shifts and accessibility compliance.",
    specs: { "CORE": "Next.js 15", "UI_LIB": "Radix / Tailwind", "CHARTS": "Recharts", "STATE": "Zustand" },
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" }
    ] as ProjectMedia[],
    github: "https://github.com/yourusername/glynac",
    linkedin: "https://linkedin.com/in/yourusername",
    driveLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
    whitePaperLink: "/docs/Glynac_Architecture_Whitepaper.pdf"
  },
  "MOD_05": { 
    title: "Sensor Hub", 
    type: "HARDWARE UPCYCLING", 
    description: "SYS_DESC: Repurposing legacy mobile hardware as localized environmental data servers. A Linux environment (Termux) accesses internal IMU and telemetry sensors, piping raw data through a Node.js websocket server to a local Plotly.js visualization web app.",
    specs: { "HOST": "Android 10+", "ENV": "Termux Linux", "RUNTIME": "Node.js v18", "VISUALS": "Plotly.js" },
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&q=80" }
    ] as ProjectMedia[],
    github: "https://github.com/yourusername/sensor-hub",
    linkedin: "https://linkedin.com/in/yourusername",
    driveLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
    whitePaperLink: "/docs/SensorHub_Whitepaper.pdf"
  },
};