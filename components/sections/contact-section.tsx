"use client"

import { useState } from "react"
import { AlertTriangle, Lock, Radio, Activity, Send, ShieldCheck, Zap } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "handshake" | "encrypting" | "sending" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Hardware Transmission Simulation Sequence
    setStatus("handshake")
    setTimeout(() => {
      setStatus("encrypting")
      setTimeout(() => {
        setStatus("sending")
        // TODO: Replace this block with your actual Formspree/EmailJS logic
        setTimeout(() => {
          setStatus("success")
          setFormData({ name: "", email: "", message: "" })
          setTimeout(() => setStatus("idle"), 4000)
        }, 1200)
      }, 1000)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden flex justify-center bg-zinc-950">
      
      {/* Background Radar Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px] z-0"></div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Module Top Bracket */}
        <div className="w-3/4 max-w-lg h-3 bg-zinc-800 border-x-4 border-t-4 border-zinc-700 rounded-t-lg shadow-sm z-0"></div>

        {/* --- MAIN HARDWARE CHASSIS --- */}
        <div className="w-full bg-[#0a0a0a] border-[6px] border-zinc-700 border-b-zinc-800 border-r-zinc-800 p-3 sm:p-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 relative overflow-hidden">
          
          {/* Warning Strip Header */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#fbbf24,#fbbf24_10px,#000_10px,#000_20px)] opacity-80 border-b border-amber-500/50"></div>

          {/* Corner Screws */}
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-45"></div></div>
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 -rotate-12"></div></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-90"></div></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center shadow-sm"><div className="w-1.5 h-[1px] bg-zinc-900 rotate-0"></div></div>

          <div className="mt-4 mb-6 flex flex-col sm:flex-row items-center justify-between border-b border-zinc-800 pb-4 gap-4 px-2 sm:px-6">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 text-amber-500 animate-pulse" />
              <div>
                <h2 className="font-mono text-xl sm:text-2xl font-black text-zinc-100 tracking-widest">TELEMETRY_UPLINK</h2>
                <p className="font-mono text-[9px] sm:text-xs text-amber-500 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> SECURE DIRECT-TO-SERVER CONNECTION
                </p>
              </div>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-sm border border-zinc-800 shadow-inner">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider">E2E_ENCRYPTION: <span className="text-emerald-400 font-bold">ACTIVE</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-2 sm:px-6 pb-2">
            
            {/* LEFT PANEL: Comms Display Screen */}
            <div className="md:col-span-5 flex flex-col gap-4">
              
              {/* LCD Screen */}
              <div className="bg-[#051005] border-[3px] border-zinc-900 rounded-md p-3 sm:p-4 shadow-[inset_0_0_20px_rgba(0,0,0,1)] relative flex flex-col h-48 md:h-full">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none"></div>
                
                <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2 mb-2 shrink-0 relative z-10">
                  <span className="font-mono text-[9px] text-emerald-500 tracking-widest">UPLINK_LOG</span>
                  <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                </div>

                <div className="flex-grow flex flex-col justify-end font-mono text-[10px] sm:text-xs text-emerald-400/80 space-y-1 relative z-10 overflow-hidden">
                  <p>{`> AWAITING_PAYLOAD...`}</p>
                  
                  {status !== "idle" && <p>{`> INITIATING_HANDSHAKE... [OK]`}</p>}
                  
                  {(status === "encrypting" || status === "sending" || status === "success") && (
                    <p className="text-amber-400">{`> GENERATING_RSA_KEYS... [SECURE]`}</p>
                  )}
                  
                  {(status === "sending" || status === "success") && (
                    <p className="animate-pulse text-cyan-400">{`> TRANSMITTING_PACKETS...`}</p>
                  )}
                  
                  {status === "success" && (
                    <p className="text-emerald-400 font-bold mt-2 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> {`> ACK_RECEIVED: MESSAGE_STORED`}
                    </p>
                  )}
                  
                  <p className="mt-1 flex items-center gap-1">
                    <span className="opacity-50">_</span>
                    {status === "idle" && <span className="animate-pulse bg-emerald-500/50 w-1.5 h-3"></span>}
                  </p>
                </div>
              </div>

              {/* Hardware Connection Specs */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-sm p-3 shadow-inner">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-600">TARGET_NODE</span>
                    <span className="font-mono text-[10px] text-zinc-300 font-bold">BIPIN_SERVER_01</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-600">PROTOCOL</span>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">HTTPS/TLS</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-600">PORT</span>
                    <span className="font-mono text-[10px] text-zinc-300 font-bold">443_SECURE</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-600">UPLINK_STATUS</span>
                    <span className="font-mono text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> READY
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT PANEL: Input Registers (The Form) */}
            <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col gap-4">
              
              {/* Name Register */}
              <div className="bg-[#111] border border-zinc-800 rounded-sm p-2 flex flex-col relative focus-within:border-cyan-500/50 focus-within:shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all duration-300">
                <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                  <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div> [REG_01] SENDER_ALIAS
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status !== "idle"}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 font-mono text-xs sm:text-sm text-cyan-400 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
                />
              </div>

              {/* Email Register */}
              <div className="bg-[#111] border border-zinc-800 rounded-sm p-2 flex flex-col relative focus-within:border-cyan-500/50 focus-within:shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all duration-300">
                <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                  <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div> [REG_02] ROUTING_NODE_IP (Email)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status !== "idle"}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 font-mono text-xs sm:text-sm text-cyan-400 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
                />
              </div>

              {/* Message Payload */}
              <div className="bg-[#111] border border-zinc-800 rounded-sm p-2 flex flex-col relative focus-within:border-amber-500/50 focus-within:shadow-[0_0_10px_rgba(251,191,36,0.1)] transition-all duration-300 flex-grow">
                <label className="font-mono text-[9px] text-zinc-500 flex items-center gap-2 mb-1 px-1">
                  <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div> [REG_03] RAW_PAYLOAD
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={status !== "idle"}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 font-mono text-xs sm:text-sm text-amber-400 focus:outline-none focus:border-amber-500 resize-none flex-grow disabled:opacity-50 custom-scrollbar"
                />
              </div>

              {/* Industrial Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="relative w-full overflow-hidden rounded-sm font-mono font-black text-sm sm:text-base tracking-widest uppercase transition-all duration-300 disabled:cursor-not-allowed group"
              >
                {/* Default State: Heavy Warning Striped Background */}
                <div className={`absolute inset-0 bg-[repeating-linear-gradient(-45deg,#fbbf24,#fbbf24_15px,#000_15px,#000_30px)] transition-opacity duration-300 ${status === "idle" ? "opacity-100" : "opacity-0"}`}></div>
                
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Active States Backgrounds */}
                <div className={`absolute inset-0 bg-cyan-600 transition-opacity duration-300 ${(status === "handshake" || status === "encrypting" || status === "sending") ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute inset-0 bg-emerald-600 transition-opacity duration-300 ${status === "success" ? "opacity-100" : "opacity-0"}`}></div>

                {/* Inner Border & Text */}
                <div className="relative border-2 border-transparent group-hover:border-white/50 m-1 py-3 px-4 flex items-center justify-center gap-3 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">
                  {status === "idle" && (
                    <><Zap className="w-5 h-5 text-amber-400 group-hover:animate-pulse" /> <span className="text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">ENGAGE_TRANSMIT</span></>
                  )}
                  {status === "handshake" && <><Activity className="w-5 h-5 text-white animate-spin" /> <span className="text-white">HANDSHAKE...</span></>}
                  {status === "encrypting" && <><Lock className="w-5 h-5 text-white animate-pulse" /> <span className="text-white">ENCRYPTING...</span></>}
                  {status === "sending" && <><Send className="w-5 h-5 text-white animate-bounce" /> <span className="text-white">UPLINKING...</span></>}
                  {status === "success" && <><ShieldCheck className="w-5 h-5 text-white" /> <span className="text-white">TRANSMISSION_SECURE</span></>}
                </div>
              </button>

            </form>
          </div>
        </div>

        {/* Footer Data Plate */}
        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-sm px-6 py-3 flex flex-col items-center justify-center shadow-inner relative z-10">
          <div className="flex gap-1 mb-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-2 bg-zinc-800"></div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-zinc-600 tracking-widest text-center">
            {`// ENGINEERED BY BIPIN_KUMAR // © ${new Date().getFullYear()} // SYS_UPTIME: 99.9%`}
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Custom scrollbar for the textarea */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(24, 24, 27, 1); border-radius: 2px;}
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(251, 191, 36, 0.5); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(251, 191, 36, 0.8); }
      `}} />
    </section>
  )
}