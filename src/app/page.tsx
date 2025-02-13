'use client'
import React from "react";
import { Terminal, Cpu, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Sparks from "@/components/sparks";
import WaitlistDialog from "@/components/WaitlistDialog";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Development Banner */}
      <div className="bg-amber-500 text-black px-4 py-2 text-center">
        <span className="font-mono">
          🛠️ Currently in Active Development - Early Access Coming Soon 🔨
        </span>
      </div>

      {/* Hero Section with Hexagonal Background */}
      <div className="relative">
        {/* Hexagonal Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='hex' width='50' height='43.4' patternUnits='userSpaceOnUse'%3E%3Cpath d='M25,3.4019237886466845 l21.650635094610966,12.5 v25 l-21.650635094610966,12.5 l-21.650635094610966,-12.5 v-25 z' fill='none' stroke='rgba(245, 158, 11, 0.15)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hex)'/%3E%3C/svg%3E")`,
            opacity: 0.7,
          }}
        />

        {/* Multiple Gradient Overlays for enhanced glow effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 30%, transparent 70%)",
            animation: "primaryPulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)",
            animation: "secondaryPulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)",
            animation: "tertiaryPulse 5s ease-in-out infinite",
          }}
        />

        {/* Header */}
        <header className="relative border-b border-zinc-700 bg-zinc-900 bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Flame className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-amber-500 font-mono">
                KernelSmith
              </span>
            </div>
            <nav className="flex space-x-6">
              <a
                href="#features"
                className="text-zinc-400 hover:text-amber-500"
              >
                Features
              </a>
              <a href="#demo" className="text-zinc-400 hover:text-amber-500">
                Demo
              </a>
              <a href="#docs" className="text-zinc-400 hover:text-amber-500">
                Docs
              </a>
              <WaitlistDialog />
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <Sparks/>
        <Sparks/>
        {/* <Sparks/>
        <Sparks/>
        <Sparks/> */}
        <div className="relative px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Flame className="h-16 w-16 text-amber-500 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-6xl font-mono mb-6">
              Forge Your
              <span className="text-amber-500"> Kernel</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-300 max-w-3xl mx-auto">
              A forge for crafting optimized ML deployments across any hardware.
              Let KernelSmith be your master smith in hardware optimization.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                View Demo
                <Terminal className="ml-2 h-4 w-4" />
              </Button>
              <WaitlistDialog />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-zinc-900 bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800 hover:border-amber-500 transition-colors duration-300">
              <Cpu className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Hardware Analysis
              </h3>
              <p className="text-zinc-400">
                Deep analysis of hardware capabilities for optimal performance.
              </p>
            </div>
            <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800 hover:border-amber-500 transition-colors duration-300">
              <Flame className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                The Forge
              </h3>
              <p className="text-zinc-400">
                Smithing optimized code for your specific hardware targets.
              </p>
            </div>
            <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800 hover:border-amber-500 transition-colors duration-300">
              <Terminal className="h-8 w-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Master Tools
              </h3>
              <p className="text-zinc-400">
                Powerful CLI and SDK for seamless integration into your
                workflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16 bg-zinc-800" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-white font-mono">
            The Forge in Action
          </h2>
          <div className="bg-black rounded-lg p-6 font-mono border border-zinc-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <p className="text-amber-500">$ kernelsmith forge --target 6502</p>
            <p className="text-zinc-500">Analyzing forge requirements...</p>
            <p className="text-zinc-500">⚒️ Examining hardware blueprint</p>
            <p className="text-zinc-500">🔥 Heating up the forge</p>
            <p className="text-amber-500">$ kernelsmith smith model.py</p>
            <p className="text-zinc-500">Forging optimized code...</p>
            <Alert className="mt-4 bg-zinc-800 border-amber-500">
              <AlertDescription className="text-zinc-300">
                Early access demo coming soon - Join the waitlist to be first in
                line
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      {/* Development Status */}
      <div className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-white font-mono">
            Development Forge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-zinc-600 rounded-lg bg-zinc-800">
              <h3 className="text-lg font-semibold mb-4 text-amber-500">
                Currently Smithing
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li>✓ 6502 Architecture Support</li>
                <li>✓ Basic Hardware Analysis</li>
                <li>➠ Optimization Engine</li>
                <li>⚒️ Extended Architecture Support</li>
              </ul>
            </div>
            <div className="p-6 border border-zinc-600 rounded-lg bg-zinc-800">
              <h3 className="text-lg font-semibold mb-4 text-amber-500">
                On the Anvil
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li>📅 CLI Tools - Q2 2024</li>
                <li>📅 Python SDK - Q2 2024</li>
                <li>📅 Documentation - Ongoing</li>
                <li>📅 Early Access Program - Q3 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-700 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-semibold text-amber-500 font-mono">
                KernelSmith
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-400 hover:text-amber-500">
                GitHub
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500">
                Documentation
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      {/* <style jsx>{`
        @keyframes primaryPulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
          }
        }

        @keyframes secondaryPulse {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes tertiaryPulse {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style> */}
    </div>
  );
};

export default HomePage;
