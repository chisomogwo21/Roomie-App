import { useState } from "react";
import { Plus, ArrowLeft, Users } from "lucide-react";
import { PostCard } from "./PostCard";
import { CreatePostModal } from "./CreatePostModal";
import { EmptyState } from "./EmptyState";
import { toast } from "sonner";

const FILTER_CATEGORIES = [
  "All",
  "Looking for Roommate",
  "Room Available",
  "Relocating",
  "Tips & Advice",
];

// Mock data for posts removed for production
const MOCK_POSTS: any[] = [];

interface CommunityFeedProps {
  onBack?: () => void;
}

export function CommunityFeed({ onBack }: CommunityFeedProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState(MOCK_POSTS);

  const handleCreatePost = async (newPost: {
    text: string;
    category: string;
    location: string;
    budget: string;
  }) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const post = {
      id: Date.now().toString(),
      userName: "You",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      location: newPost.location,
      timestamp: "Just now",
      text: newPost.text,
      tags: [
        newPost.category !== "All" ? newPost.category : "",
        newPost.budget ? `Budget ${newPost.budget}` : "",
      ].filter(Boolean),
      matchScore: null as any,
    };
    setPosts([post, ...posts]);
    toast.success("Post created successfully!");
  };

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) =>
          post.tags.some((tag) => tag.includes(activeFilter))
        );

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Header */}
      <div className="bg-white px-6 pt-8 pb-4 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-4 mb-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-[#f3f4f6] rounded-[8px] transition-colors -ml-2"
            >
              <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" />
            </button>
          )}
          <div className="flex-1">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#1f2a37] leading-[32px]">
              Community
            </h1>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#9da4ae] leading-[18px]">
              Connect with roommates in your area
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white px-6 py-3 border-b border-[#e5e7eb] overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-[20px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[14px] whitespace-nowrap transition-colors ${
                activeFilter === category
                  ? "bg-[#fe456a] text-white"
                  : "bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e5e7eb]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* City-based location indicator */}
      <div className="bg-white px-6 py-3 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <Users className="w-[16px] h-[16px] text-[#9da4ae]" />
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[16px] text-[#6b7280]">
            Posts from <span className="font-semibold text-[#1f2a37]">Kigali</span>
          </p>
        </div>
      </div>

      {/* Feed */}
      <div className="px-6 py-4">
        {filteredPosts.length === 0 ? (
          <EmptyState onCreatePost={() => setIsModalOpen(true)} />
        ) : (
          <div className="flex flex-col gap-4 max-w-[600px] mx-auto">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-[56px] h-[56px] bg-[#fe456a] rounded-full shadow-lg flex items-center justify-center hover:bg-[#e63d5f] transition-colors z-50"
      >
        <Plus className="w-[24px] h-[24px] text-white" />
      </button>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}
