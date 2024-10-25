import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#40ffc6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Background/ContactBG.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <nav className="w-full flex justify-end items-center h-24 relative z-10 px-8">
        {/* Home Button */}
        <Link href="/Links">
          <button className="px-6 py-2 font-medium bg-[#00cc99] border-black rounded-lg border-2 text-black transition-all shadow-[6px_6px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            <Image
              src="/Images/Text/home.png"
              alt="Home"
              width={75}
              height={30}
              className="w-auto h-8"
            />
          </button>
        </Link>
      </nav>

      {/* Main content */}
      <main className="font-nunito flex-grow flex flex-col items-center justify-start w-full relative z-10">
        {/* Reduced space between the nav and the main content */}
        <div className="mt-4">
          <div className="flex-1 flex justify-center">
            <Image
              src="/Images/Text/Bizleague.png"
              alt="BizLeague"
              width={400}
              height={200}
              className="w-auto"
            />
          </div>
        </div>

        {/* Main description box */}
        <div className="max-w-4xl bg-[#5de6b8] border-2 border-black p-8 rounded-lg shadow-[6px_6px_0px_black] text-center mb-10">
          <p className="text-xl font-bold text-black leading-relaxed tracking-wide">
            BizLeague is an exclusive team-based competition within BizBuild,
            where both school and regional chapters go head-to-head in dynamic
            monthly business challenges. Each competition is designed to push
            your entrepreneurial thinking, creativity, and teamwork, helping you
            develop essential business skills while competing for top honors.
          </p>
        </div>

        {/* Three columns for the challenge sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 w-full max-w-6xl">
          {/* Team-based Challenges */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black]">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Team-based Challenges
            </h2>
            <p className="text-base text-center text-black leading-relaxed">
              Whether you're part of a school chapter or a regional chapter,
              your team will participate in a series of business challenges that
              mimic real-world scenarios. From developing marketing campaigns to
              solving financial dilemmas, each challenge will test your
              strategic abilities.
            </p>
          </div>

          {/* Earn Points, Win Rewards */}
          <div className="bg-[#5de6b8] border-2 border-black p-6 rounded-lg shadow-[6px_6px_0px_black] text-black">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Earn Points, Win Rewards
            </h2>
            <p className="text-base text-center leading-relaxed">
              Teams earn points for their performance in each challenge. At the
              end of the competition cycle, the top-ranking teams will be
              awarded special prizes, including exclusive mentorships, business
              resources, and recognition for their accomplishments.
            </p>
          </div>

          {/* Bonus Challenges */}
          <div className="bg-[#5de6b8] text-black border-2 border-black p-6 rounded-lg shadow-[6px_6px_0px_black]">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Bonus Challenges
            </h2>
            <p className="text-base text-center leading-relaxed">
              In addition to the main challenges, teams can take on bonus
              challenges to earn additional points and improve their standing in
              BizLeague.
            </p>
          </div>
        </div>

        {/* New sections: Who Can Join & Benefits */}
        <div className="mt-10 grid grid-cols-1 gap-8 px-6 w-full max-w-6xl">
          {/* Who Can Join Section */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black]">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">Who Can Join?</h2>
            <p className="text-base text-center leading-relaxed">
              BizLeague is open to all BizBuild chapter members, and your
              chapter serves as your team. Whether your chapter represents a
              specific school or a broader region, your team can join the
              competition and showcase and develop your business talents.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-[#5de6b8] border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black]">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">Why Join?</h2>
            <ul className="text-base text-center list-disc list-inside leading-relaxed">
              <li>
                <strong>Real-World Experience:</strong> Work on practical
                business problems that will help you gain hands-on experience
                and develop your entrepreneurial mindset.
              </li>
              <li>
                <strong>Teamwork & Leadership:</strong> Strengthen your ability
                to collaborate, communicate, and lead within your team to come
                up with winning solutions.
              </li>
              <li>
                <strong>Global Connections:</strong> Compete alongside teams
                from different regions and schools, expanding your network of
                future entrepreneurs.
              </li>
              <li>
                <strong>Exclusive Rewards:</strong> Win exciting prizes like
                mentorship sessions, business tools, and public recognition for
                your team&apos;s efforts.
              </li>
            </ul>
          </div>
          <div className="bg-[#5de6b8] mb-20 border-2 text-black border-black p-6 rounded-lg shadow-[6px_6px_0px_black]">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">Why Join?</h2>
            <ul className="text-base text-center list-disc list-inside leading-relaxed">
              <li>
                <strong>Join a Chapter:</strong> Whether your chapter represents a school or a region, your chapter will serve as your team for BizLeague.
              </li>
              <li>
                <strong>Prepare for the Challenges:</strong> Your team will receive new business challenges to tackle. Work together to create innovative solutions.
              </li>
              <li>
                <strong>Submit Your Solutions: </strong> Turn in your team's work to earn points, and keep track of how you rank against other teams on the leaderboard.
              </li>
              <li>
                <strong>Compete for the Win: </strong> Rise through the ranks by performing well in challenges and taking on extra tasks to earn bonus points
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
