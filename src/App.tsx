import profile from "./assets/avatar-jessica.jpeg";
import Link from "./components/Link";

const DUMMY_LINKS: { id: string; name: string; url: string }[] = [
  { id: "l1", name: "GitHub", url: "#" },
  { id: "l2", name: "Frontend Mentor", url: "#" },
  { id: "l3", name: "LinkedIn", url: "#" },
  { id: "l4", name: "Twitter", url: "#" },
  { id: "l5", name: "Instagram", url: "#" },
];

function App() {
  return (
    <div className="animate-slide flex w-full max-w-[327px] flex-col items-center gap-6 rounded-xl bg-darkGrey1 p-6 sm:max-w-[384px] sm:p-10">
      <img
        src={profile}
        alt=""
        className="h-[88-px] w-[88px] transform cursor-pointer rounded-full transition active:scale-105"
      />
      <div>
        <h1 className="text-center text-2xl font-semibold text-white1">
          Jessica Randall
        </h1>
        <h2 className="text-center text-sm font-bold text-green1">
          London, United Kingdom
        </h2>
      </div>
      <p className="text-center text-sm font-normal text-white1">
        "Front-end developer and avid reader."
      </p>
      <div className="flex w-full flex-col gap-3 sm:gap-4">
        {DUMMY_LINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
