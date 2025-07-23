import Navbar from "./Navbar";

function Homepage () {
  return (
    <>
      <main className="bg-background min-h-screen pt-[150px]">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-[#00FF99] text-4xl font-display font-bold"
          >
            PvZ Memory Editor: Hacking Client-Side Memory
          </h1>
          <h1
            className="text-[#E0E0E0] w-[60%] text-center mt-10 font-body"
          >
            This project explores how client-side memory in Plants vs. Zombies can be exploited using Cheat Engine and Python scripting to manipulate game mechanics like sun and cooldowns.
          </h1>
          <img src="src/assets/image1.webp" alt="pvz" className="w-[30%] h-[30%] mt-5"/>
          <h1
            className="text-[#00BCD4] text-2xl font-display mt-10 font-semibold"
          >
            About This Project
          </h1>
          <h1 className="text-[#E0E0E0] text-center w-[60%] mt-5 font-body">
            This project was built for COMP6441 course to demonstrate the dangers of trusting client-side memory in offline applications.
            By using Cheat Engine and Python, I explored vulnerabilities in Plant vs. Zombies and created a memory editing tool that manipulates
            gameplay in real time.
          </h1>
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

export default Homepage;