import Image from "next/image";

const socialLinks = [
  { name: "Zalo", icon: "/icon/zalo.jpg", link: "https://zalo.me" },
  {
    name: "Facebook",
    icon: "/icon/facebook.jpg",
    link: "https://facebook.com",
  },
  { name: "Twitter", icon: "/icon/tw.jpg", link: "https://twitter.com" },
  {
    name: "LinkedIn",
    icon: "/icon/in.jpg",
    link: "https://linkedin.com",
  },
  { name: "Reddit", icon: "/icon/tw.jpg", link: "https://reddit.com" },
];

export default function ShareSidebar() {
  return (
    <aside className="fixed md:block hidden left-4 top-1/4 flex flex-col items-center space-y-4">
      <h3 className="text-gray-800 font-semibold">Chia sẻ</h3>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-2xl transition-all duration-300  hover:text-white"
        >
          {typeof item.icon === "string" ? (
            <Image src={item.icon} alt={item.name} width={24} height={24} className="w-6 h-6" />
          ) : (
            item.icon
          )}
        </a>
      ))}
    </aside>
  );
}
