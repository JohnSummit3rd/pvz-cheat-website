import Navbar from "./Navbar";

function SecurityReflections () {
    return (
      <>
        <main className="bg-background min-h-screen pt-[150px]">
          <Navbar />
          <div className="flex flex-col pl-70 pr-70">
            <h1 className="text-[#00FF99] text-3xl font-bold font-display mb-5">Security Reflections</h1>
            <h1 className="text-[#E0E0E0] font-body mb-5">
              This project highlights a significant and often-overlooked aspect of software design—<strong>client-side security vulnerabilities</strong>. 
              By building a Python-based memory editing tool and using Cheat Engine to identify memory addresses, 
              I was able to manipulate critical game variables in Plants vs. Zombies (PvZ), 
              such as sun count, cooldown timers, zombie health, and plant durability. 
              This process exposed several important insights into how easily unprotected memory can be exploited in offline applications.
            </h1>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mb-3">What this Toolkit Demonstrates</h1>
            <h1 className="text-[#E0E0E0] font-body mb-5">
              Through reverse engineering and memory manipulation, I discovered that PvZ does not employ any form of <strong>memory protection, 
              value encryption, or integrity verification. All key gameplay values are stored in plain, unencrypted memory</strong>, allowing them to 
              be freely read and written using tools like Cheat Engine or Python’s pymem module. Once the static memory addresses and pointer 
              chains were identified using Cheat Engine, I was able to implement a Python script that could instantly modify values like coin 
              count or enable cheats like infinite plant health and one-hit kills.

              This highlights a fundamental issue: <strong>the game fully trusts the client</strong> to maintain its own integrity. There are no barriers 
              preventing a user from modifying these values at runtime.
            </h1>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mb-3">Why This Is a Security Issue</h1>
            <h1 className="text-[#E0E0E0] font-body mb-5">
              While PvZ is an offline, single-player game and not at risk of multiplayer cheating, this lack of protection illustrates 
              how easily exploitable client-side memory can be. If a similar model were used in online or competitive settings, 
              this type of vulnerability could lead to:

              <ul className="ml-8 list-disc">
                <li><strong>Unfair advantage of cheating</strong> in online multiplayer</li>
                <li><strong>Game crashes or data corruption</strong> from unintended memory edits.</li>
                <li><strong>In-game economy manipulation</strong> in games with real-money transactions.</li>
              </ul>
              <br />
              Even in offline games, memory editing tools can bypass intended progression systems, which may discourage players from engaging with the game as designed.
            </h1>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mb-3">How Developers Can Protect Against This</h1>
            <h1 className="text-[#E0E0E0] font-body mb-5">
              To improve memory security, developers should consider the following:

              <ul className="ml-8 list-disc">
                <li><strong>Obfuscate and encrypt sensitive in-memory values</strong> so they cannot be directly edited.</li>
                <li>Use <strong>checksum or hash validation</strong> to detect tampering and restore default values.</li>
                <li>Implement <strong>anti-debugging and anti-cheat protections</strong> such as detecting injected DLLs or suspicious memory access.</li>
                <li>In online or multiplayer games, <strong>move critical logic to a secure server</strong> where client memory cannot impact game state.</li>
              </ul>
              <br />
              While none of these methods are foolproof, they raise the barrier to entry and help reduce the ease with which memory manipulation can occur.
            </h1>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mb-3">Personal Reflection</h1>
            <h1 className="text-[#E0E0E0] font-body">
              Working on this project taught me valuable lessons in <strong>reverse engineering, memory management</strong>, and <strong>security awareness</strong>. 
              It became clear just how little stands between an attacker and a game’s internals if no protection mechanisms are in place. 
              I also gained firsthand experience in pointer chains—how to trace them, interpret them, and use them programmatically to target 
              specific values in memory.
              <br></br>
              <br></br>
              Ultimately, this reinforced the idea that <strong>client-side trust is a dangerous assumption</strong> in any kind of application. Whether you're 
              building games, financial software, or productivity tools, it's critical to design with the assumption that a user may attempt to 
              tamper with memory or reverse engineer the system.
            </h1>
          </div>
          <footer className="bg-panels h-50 mt-20 flex items-center justify-center flex-col font-body">
            <h1 className="text-white text-lg">Created by Aaron Zhang | COMP6441 Project</h1>
            <div className="flex">
              <a href="https://github.com/JohnSummit3rd">
                <img src="public/github.png" alt="github" />
              </a>
              <a className="text-lg text-white mt-5 hover:text-[#00FF99]" href="https://github.com/JohnSummit3rd">Github: @JohnSummit3rd</a>
            </div>
          </footer>
        </main>
      </>
    )
  }
  
  export default SecurityReflections;