import { IconCloud } from "./ui/icon-card";

// Accept images as props so we can pass them from the page
export function IconCloudDemo({ iconSlugs }: { iconSlugs: string[] }) {
  return (
    <div className="relative flex h-[400px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border border-gray-300 dark:border-gray-800 bg-[#E4E4E4] dark:bg-black">
      <IconCloud images={iconSlugs} />
    </div>
  );
}