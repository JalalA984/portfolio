import { IconCloud } from "./ui/icon-card";

const slugs = [
  "typescript",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "firebase",
  "docker",
  "git",
  "spring",
  "go",
  "python",
  "flask",
  "mongodb",
  "mysql",
  "postgresql",
  "c",
  "c++", 
];

export function IconCloudDemo() {
  const images = slugs.map((slug) => {
    if (slug === "java") {
      // Manually specify the URL for Java
      return "https://banner2.cleanpng.com/20180426/kbw/avexiclb6.webp"; // Example of manual link
    }
    return `https://cdn.simpleicons.org/${slug}/${slug}`;
  });

  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-md border bg-[#E4E4E4]">
      <IconCloud images={images} />
    </div>
  );
}
