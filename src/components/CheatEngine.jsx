import Navbar from "./Navbar";
import "../styles/CheatEngine.css"

function CheatEngine () {
  return (
    <>
      <main className="bg-background min-h-screen pt-[150px]">
        <Navbar />
        <div className="flex flex-col pl-70 pr-70">
          <h1
            className="text-[#00FF99] text-3xl font-display font-bold"
          >
            What is Cheat Engine?
          </h1>
          <h1
            className="text-[#E0E0E0] w-[100%] mt-10 font-body"
          >
            Cheat Engine is an open-source memory scanning tool used to inspect and modify the runtime memory of processes. It's often used to
            create cheats for games by identifying where in-game values like health, ammo or currency are stored.
          </h1>
          <div>
            <h1 className="text-[#00FF99] text-3xl font-bold font-display mt-10">How I Used Cheat Engine for PvZ (GOTY 2019)</h1>
            <h1
              className="text-[#E0E0E0] w-[100%] mt-5 font-body mb-5"
            >
              I used the 2009 Game of the Year (GOTY) edition of Plants vs. Zombies. I attached Cheat Engine to the PlantsVsZombies.exe process to 
              begin scanning the game's memory.
            </h1>
            <div>
              <img className="rounded-md" src="src/assets/PvZ1.png" alt="PvZ1" />
            </div>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10" >Sun Value Hacking ☀️</h1>
            <h1 className="text-[#E0E0E0] font-body mt-5">Please note that you'll have to do the steps below again whenever you restart the level. For a more concrete method that works when the level is reset please watch the video below.</h1>
            <ol className="text-[#E0E0E0] font-body ml-5 mt-5 mb-5">
              <li>1. Type the number of sun you currently have in the value box of Cheat Engine.</li>
              <li>2. Click on "First Scan"</li>
              <li>3. Return to Plants Vs. Zombies and keep increasing/decreasing your sun (by obtaining/spending sun)</li>
              <li>4. Click on "Next Scan"</li>
              <li>5. Double click on the address found at the left table.</li>
              <li>6. Double click on the number that is in the "Value" row in the below table.</li>
              <li>7. Type in the amount of sun you want.</li>
              <li>8. Save the amount and you should see your game have the same value of Sun.</li>
            </ol>
            <div className="pvz-screenshot">
              <iframe 
                src="https://www.youtube.com/embed/Bu0Gr-UIkLE"
                frameborder="0"
                width="100%"
                height="450"
                title="Demo Placeholder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="ml-5 rounded-md">
              </iframe>
            </div>
          </div>
          <div>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10" >Plant CoolDown Hacking ⏰</h1>
            <ol className="text-[#E0E0E0] font-body ml-5 mt-5 mb-5">
              <li>1. Click "Memory View"</li>
              <li>2. Right click at the address and click on "Go to Address"</li>
              <li>3. Type in "00491E4C" and hit enter</li>
              <li>4. Find the one that says "jle" should be the 4th down the list</li>
              <li>5. Double click on the address code</li>
              <li>6. Change it to "nop"</li>
              <li>7. Click "Yes" to replace with "nop"</li>
            </ol>
            <div className="pvz-screenshot">
              <iframe 
                src="https://www.youtube.com/embed/1ertOS_lO8w" 
                frameborder="0"
                width="100%"
                height="450"
                title="Demo Placeholder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="ml-5 rounded-md">
              </iframe>
            </div>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10" >1 Hit Zombies Hacking 👊</h1>
            <ol className="text-[#E0E0E0] font-body ml-5 mt-5 mb-5">
              <li>1. Click on "Memory View"</li>
              <li>2. Right click at the address and click on "Go to Address"</li>
              <li>3. Type in the address "popcapgame1.exe + 00145Df1"</li>
              <li>4. Find the one that says "mov [esp+18],ebp"</li>
              <li>5. Double click on the address code and change it to "sub ebp,ebp"</li>
              <li>6. Click "Yes" to replace</li>
              <li>7. Right click at the address and click on "Go to Address"</li>
              <li>8. Type in the address "popcapgame1.exe + 00142223"</li>
              <li>9. Double click on the the address code and change it to "jmp 0054222D"</li>
              <li>10. Right click at the address and click on "Go to Address"</li>
              <li>11. Type in the address "popcapgame1.exe + 00142214"</li>
              <li>12. Double click on the address code and change it to "nop"</li>
            </ol>
            <div className="pvz-screenshot">
              <iframe 
                src="https://www.youtube.com/embed/6yJyEEGlb44"
                frameborder="0"
                width="100%"
                height="450"
                title="Demo Placeholder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="ml-5 rounded-md">
              </iframe>
            </div>
            <h1 className="text-[#00BCD4] text-2xl font-semibold font-display mt-10" >Infinite Plant Health Hacking ❤️</h1>
            <ol className="text-[#E0E0E0] font-body ml-5 mt-5 mb-5">
              <li>1. Click on "Memory View"</li>
              <li>2. Right click at the address and click on "Go to Address"</li>
              <li>3. Type in the address "popcapgame1.exe + 001447A0"</li>
              <li>4. Find the one that says "add dword ptr [esi+40],04"</li>
              <li>5. Double click on the address code and change it to "nop"</li>
              <li>6. Click "Yes" to replace with "nop"</li>
            </ol>
            <div className="pvz-screenshot mb-20">
              <iframe 
                src="https://www.youtube.com/embed/5r60ZDJDiIE"
                frameborder="0"
                width="100%"
                height="450"
                title="Demo Placeholder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="ml-5 rounded-md">
              </iframe>
            </div>
          </div>
        </div>
        <footer className="bg-panels h-50 mt-20 flex items-center justify-center flex-col font-body">
          <h1 className="text-white text-lg">Created by Aaron Zhang | COMP6441 Project</h1>
          <div className="flex">
            <a href="https://github.com/JohnSummit3rd">
              <img src="src/assets/github.png" alt="github" />
            </a>
            <a className="text-lg text-white mt-5 hover:text-[#00FF99]" href="https://github.com/JohnSummit3rd">Github: @JohnSummit3rd</a>
          </div>
        </footer>
      </main>
    </>
  )
}
  
export default CheatEngine;