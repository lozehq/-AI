import { cn } from '@/lib/utils';

interface PlatformFilterProps {
  platforms: string[];
  selectedPlatform: string | null;
  onSelectPlatform: (platform: string | null) => void;
}

export default function PlatformFilter({
  platforms,
  selectedPlatform,
  onSelectPlatform,
}: PlatformFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => onSelectPlatform(null)}
        className={cn(
          'px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300',
          'bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl text-gray-300',
          'hover:border-blue-500/50 hover:bg-gray-800/80 hover:text-blue-400',
          selectedPlatform === null && 'border-blue-500/50 bg-blue-500/10 text-blue-400'
        )}
      >
        全部平台
      </button>
      {platforms.map((platform) => (
        <button
          key={platform}
          onClick={() => onSelectPlatform(platform)}
          className={cn(
            'px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300',
            'bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl text-gray-300',
            'hover:border-blue-500/50 hover:bg-gray-800/80 hover:text-blue-400',
            selectedPlatform === platform && 'border-blue-500/50 bg-blue-500/10 text-blue-400'
          )}
        >
          {platform}
        </button>
      ))}
    </div>
  );
} 