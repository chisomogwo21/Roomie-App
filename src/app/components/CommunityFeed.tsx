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

// Mock data for posts
const MOCK_POSTS = [
  {
    id: "1",
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    location: "Kicukiro, Kigali",
    timestamp: "2h ago",
    text: "Hi everyone! I'm moving to Kigali next month for work and looking for a clean, quiet roommate to share a 2-bedroom apartment. I work in tech and enjoy cooking and reading. Budget is around $150/month.",
    tags: ["Budget $150", "2-Bedroom", "Working class"],
    matchScore: "high" as const,
  },
  {
    id: "2",
    userName: "Michael Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "Gasabo, Kigali",
    timestamp: "5h ago",
    text: "Room available in a shared 3-bedroom apartment near Kimironko. Great location, close to transport and markets. Looking for a responsible person. Available from next week!",
    tags: ["Room Available", "3-Bedroom", "$120/month"],
    matchScore: null,
  },
  {
    id: "3",
    userName: "Emily Uwase",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    location: "Nyarugenge, Kigali",
    timestamp: "8h ago",
    text: "Anyone have tips for finding apartments in the city center? Just graduated and starting my first job. Budget is tight but I'd love to be close to downtown. Any advice appreciated!",
    tags: ["Tips & Advice", "Students"],
    matchScore: "medium" as const,
  },
  {
    id: "4",
    userName: "David Nkusi",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    location: "Kicukiro, Kigali",
    timestamp: "12h ago",
    text: "Looking for 1-2 roommates to share a nice place in Kicukiro. I'm a grad student, pretty easy-going. Like to keep things clean and organized. No parties, just a peaceful place to call home.",
    tags: ["Looking for Roommate", "Students", "Budget $100"],
    matchScore: "high" as const,
  },
  {
    id: "5",
    userName: "Amanda Peters",
    userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    location: "Gasabo, Kigali",
    timestamp: "1d ago",
    text: "Relocating from Nairobi! Looking for short-term housing (2-3 months) while I get settled. Any leads? Preferably in a safe neighborhood with good internet connection for remote work.",
    tags: ["Relocating", "Short-term", "Working class"],
    matchScore: null,
  },
];

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
