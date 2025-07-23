import Navbar from "./Navbar";
import "../styles/CheatEngine.css"

function PythonTool () {
  return (
    <>
      <main className="bg-background min-h-screen pt-[150px]">
        <Navbar />
        <div className="flex flex-col pl-70 pr-70">
          <h1
            className="text-[#00FF99] text-3xl font-display font-bold"
          >
            Python Tool: PvZ Memory Modifier
          </h1>
          <h1
            className="text-[#E0E0E0] w-[100%] mt-10 font-body"
          >
            This is a custom Python-based toolkit that interacts with Plants vs. Zombies using memory manipulation techniques. It's built using the pymem library and 
            allows for dynamic modifications like disabling cooldowns, setting sun levels, and more all in real time. All of the features are built throuhg the use of 
            the memory addresses that can be found by CheatEngine. For more information please visit the CheatEngine page of the website.
          </h1>
          <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10 mb-5" >Features of the PvZ Python Toolbox</h1>
          <ul className="text-[#E0E0E0] ml-5">
            <li className="mb-3">
              <h1 className="font-semibold">1. Modify Sun Level</h1>
              <h1 className="ml-4">Easily set the player's sun value to a desired number for instant planting freedom.</h1>
            </li>
            <li className="mb-3">
              <h1 className="font-semibold">2. Disable Plant Cooldowns</h1>
              <h1 className="ml-4">Bypass plant cooldowns to constantly spam plants without delay.</h1>
            </li>
            <li className="mb-3">
              <h1 className="font-semibold">3. One-Hit Zombies</h1>
              <h1 className="ml-4">Any plant attack can instantly eliminate default zombies</h1>
            </li>
            <li className="mb-3">
              <h1 className="font-semibold">4. Infinite Plant Health</h1>
              <h1 className="ml-4">Sets the plants to have infinite health preventing them from being destroyed.</h1>
            </li>
          </ul>
          <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10 mb-5">PvZ Toolkit Demo Video</h1>
          <div className="pvz-screenshot mb-5">
            <iframe 
              src="https://www.youtube.com/embed/HabgqOshJ4w"
              frameborder="0"
              width="100%"
              height="450"
              title="Demo Placeholder"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="ml-5 rounded-md">
            </iframe>
          </div>
          <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10 mb-5">How It Works</h1>
          <div className="text-[#E0E0E0]">
            <h1 className="mb-3">This toolkit uses a method called pointer chaining to reliably access and modify in-game values such as sun, HP and cooldowns. Here's how it works:</h1>
            <h1 className="mb-3">Most modern games store important data (like health, money, or abilities) at memory addresses that change every time the game runs. Instead of relying on fixed addresses, we find a base pointer (a static address that doesn't move) and use a series of offsets to reach the final value we want to change.</h1>
            <h1 className="mb-3"><strong>Step-by-step breakdown:</strong></h1>
            <ul className="ml-2">
              <li className="ml-2">
                <h1><strong>1. Finding the static address:</strong></h1>
                <h1 className="ml-4">Using Cheat Engine, I located a pointer path that leads to the desired in-game value (e.g. sun). This involves:</h1>
                <ul className="ml-8 list-disc">
                  <li>Finding the in-game value (like current sun)</li>
                  <li>Tracing it back to a <strong>base address</strong> (static)</li>
                  <li>Recording the chain of <strong>offsets</strong> used to reach it</li>
                </ul>
              </li>
              <li>
                <h1 className="mt-3"><strong>2. Implementing in Python with Pymem:</strong></h1>
                <h1 className="ml-4">The base address and offset chain are then used in a Python script with the pymem library. The script:</h1>
                <ul className="ml-8 list-disc">
                  <li>Attaches to the popcapgame1.exe process</li>
                  <li>Follows the pointer chain to locate the value</li>
                  <li>Reads or writes the new value into memory (e.g. setting sun to 9999)</li>
                </ul>
              </li>
            </ul>
          </div>
          <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mb-5 mt-5">GitHub Page</h1>
          <h1 className="text-[#E0E0E0]">Click on the image below to go to the GitHub Page:</h1>
          <a className="mt-5" href="https://github.com/JohnSummit3rd/pvz-hacking-toolkit">
            <img src="public/github.png" alt="github" />
          </a>
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

export default PythonTool;