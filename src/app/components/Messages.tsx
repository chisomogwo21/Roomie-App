import { ArrowLeft, Search, Plus, MoreHorizontal, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import svgPathsDelete from "../../imports/svg-t7iwy2crtn";
import imgEllipse17 from "../../assets/placeholders/avatar.png";
import type { RequestStatus } from "./RequestStatusBadge";
import { fetchRecentConversations } from "../../lib/messages";
import { Loader2 } from "lucide-react";

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  avatar: string;
}

interface MessagesProps {
  onBack: () => void;
  onOpenChat?: (messageId: string, status?: RequestStatus) => void;
}

export function Messages({ onBack, onOpenChat }: MessagesProps) {
  const [swipedMessageId, setSwipedMessageId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConversations() {
      setLoading(true);
      const { data, error } = await fetchRecentConversations();
      if (!error && data) {
        const formatted = data.map(conv => ({
          id: conv.other_user_id,
          name: conv.other_user_name,
          message: conv.last_message,
          timestamp: new Date(conv.last_message_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: conv.other_user_avatar || imgEllipse17
        }));
        setMessages(formatted);
      }
      setLoading(false);
    }
    loadConversations();
  }, []);

  // Demo active chat avatars
  // Demo active chat avatars removed for production
  const activeChats: string[] = [];

  const handleDeleteClick = (messageId: string) => {
    setMessageToDelete(messageId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (messageToDelete) {
      setMessages(messages.filter((msg) => msg.id !== messageToDelete));
      setMessageToDelete(null);
      setShowDeleteModal(false);
      setSwipedMessageId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setMessageToDelete(null);
  };

  return (
    <div className="bg-[#fcfcfd] relative size-full flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] bg-transparent" />

      {/* Header */}
      <div className="px-[24px] pt-[16px] pb-[24px] flex items-center justify-between">
        <button 
          onClick={onBack}
          className="size-[24px] flex items-center justify-center"
        >
          <ArrowLeft className="w-[20px] h-[20px] text-[#1f2a37]" strokeWidth={1.5} />
        </button>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
          Message
        </h1>
        <button className="size-[24px] flex items-center justify-center">
          <Search className="w-[20px] h-[20px] text-[#1f2a37]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Active Chat Section */}
      <div className="px-[24px] pb-[24px]">
        <div className="flex gap-[12px] items-center overflow-x-auto">
          {/* Add New Chat Button */}
          <button className="bg-[#fe456a] size-[52px] rounded-full flex items-center justify-center flex-shrink-0">
            <Plus className="w-[24px] h-[24px] text-white" strokeWidth={1.5} />
          </button>

          {/* Divider */}
          <div className="h-[44px] w-[1.5px] bg-[#9da4ae] flex-shrink-0" />

          {/* Active Chat Avatars */}
          {activeChats.map((avatar, index) => (
            <button key={index} className="flex-shrink-0">
              <img 
                src={avatar} 
                alt="" 
                className="size-[52px] rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = imgEllipse17;
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* All Message Title */}
      <div className="px-[24px] pb-[16px]">
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] text-[#1f2a37]">
          All Message
        </h2>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-auto px-[24px]">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-[32px] h-[32px] animate-spin text-[#fe456a]" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-[#9da4ae] text-sm">No messages yet.</p>
            <p className="text-[#9da4ae] text-xs mt-1">Start a conversation with a roommate!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-[16px]">
            {messages.map((message) => (
              <SwipeableMessageItem
                key={message.id}
                message={message}
                isSwipedOpen={swipedMessageId === message.id}
                onSwipeOpen={() => setSwipedMessageId(message.id)}
                onSwipeClose={() => setSwipedMessageId(null)}
                onDeleteClick={() => handleDeleteClick(message.id)}
                onMessageClick={() => onOpenChat?.(message.id, "accepted")}
              />
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="absolute inset-0 z-50 flex items-end justify-center">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={cancelDelete}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-full rounded-t-[24px] pt-[32px] pb-[40px] px-[42px] flex flex-col items-center gap-[46px]">
            {/* Illustration */}
            <div className="flex flex-col gap-[24px] items-center">
              {/* Icon */}
              <div className="relative size-[120px]">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full bg-[#f4ebff]" />
                
                {/* Middle Circle */}
                <div className="absolute left-[9.81px] top-[9.81px] size-[100.385px] rounded-full bg-white" />
                
                {/* Delete Icon */}
                <div className="absolute left-[27px] top-[27px] size-[66px] flex items-center justify-center">
                  <svg className="w-[49.5px] h-[55px]" fill="none" viewBox="0 0 49.5 55">
                    <path 
                      d={svgPathsDelete.p1fce6800} 
                      fill="#FE456A" 
                    />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[16px] items-center text-center w-[290px]">
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#1f2a37]">
                  Are you sure you want to delete this message ?
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[18px] text-[#9da4ae]">
                  the message will be deleted from this device
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-[24px] w-full justify-center">
              <button
                onClick={cancelDelete}
                className="bg-[#fe456a] h-[52px] px-[24px] py-[8px] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#e63d5f] transition-colors w-[132px]"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-[#d2d6db] h-[52px] px-[24px] py-[8px] rounded-[8px] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] text-white hover:bg-[#c1c5ca] transition-colors w-[128px]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Home Indicator */}
      <div className="h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-black/5 rounded-full" />
      </div>
    </div>
  );
}

// Swipeable Message Item Component
interface SwipeableMessageItemProps {
  message: Message;
  isSwipedOpen: boolean;
  onSwipeOpen: () => void;
  onSwipeClose: () => void;
  onDeleteClick: () => void;
  onMessageClick: () => void;
}

function SwipeableMessageItem({
  message,
  isSwipedOpen,
  onSwipeOpen,
  onSwipeClose,
  onDeleteClick,
  onMessageClick,
}: SwipeableMessageItemProps) {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 50;
  const MAX_SWIPE = 110; // Width of action buttons

  useEffect(() => {
    if (isSwipedOpen) {
      setDragOffset(-MAX_SWIPE);
    } else {
      setDragOffset(0);
    }
  }, [isSwipedOpen, MAX_SWIPE]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    currentX.current = e.touches[0].clientX;
    const diff = currentX.current - startX.current;

    // Only allow swiping left (negative values)
    if (diff < 0) {
      const newOffset = Math.max(-MAX_SWIPE, diff);
      setDragOffset(newOffset);
    } else if (isSwipedOpen) {
      // Allow swiping right to close
      const newOffset = Math.min(0, -MAX_SWIPE + diff);
      setDragOffset(newOffset);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (dragOffset < -SWIPE_THRESHOLD) {
      // Swipe left detected - open actions
      setDragOffset(-MAX_SWIPE);
      onSwipeOpen();
    } else {
      // Close actions
      setDragOffset(0);
      onSwipeClose();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    currentX.current = e.clientX;
    const diff = currentX.current - startX.current;

    // Only allow swiping left (negative values)
    if (diff < 0) {
      const newOffset = Math.max(-MAX_SWIPE, diff);
      setDragOffset(newOffset);
    } else if (isSwipedOpen) {
      // Allow swiping right to close
      const newOffset = Math.min(0, -MAX_SWIPE + diff);
      setDragOffset(newOffset);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (dragOffset < -SWIPE_THRESHOLD) {
      // Swipe left detected - open actions
      setDragOffset(-MAX_SWIPE);
      onSwipeOpen();
    } else {
      // Close actions
      setDragOffset(0);
      onSwipeClose();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Action Buttons (Behind) */}
      <div className="absolute right-0 top-0 h-full flex items-stretch">
        {/* More Button */}
        <div className="bg-[#d2d6db] w-[55px] flex flex-col items-center justify-center gap-[4px] px-[12px] py-[14px]">
          <MoreHorizontal className="w-[24px] h-[24px] text-white" strokeWidth={1.5} />
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-white">
            More
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={onDeleteClick}
          className="bg-[#fe456a] w-[55px] flex flex-col items-center justify-center gap-[4px] px-[12px] py-[14px]"
        >
          <Trash2 className="w-[24px] h-[24px] text-white" strokeWidth={1.5} />
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[14px] text-white">
            Delete
          </p>
        </button>
      </div>

      {/* Message Item (Swipeable) */}
      <div
        className="bg-[#fcfcfd] relative w-full"
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={onMessageClick}
          className="flex gap-[12px] items-start w-full text-left"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img 
              src={message.avatar} 
              alt="" 
              className="size-[44px] rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = imgEllipse17;
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Name and Time */}
            <div className="flex gap-[4px] items-start mb-[4px]">
              <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[18px] text-[#1f2a37] truncate">
                {message.name}
              </p>
              <p className="flex-shrink-0 font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-[14px] text-[#9da4ae]">
                {message.timestamp}
              </p>
            </div>

            {/* Message Preview */}
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#9da4ae] mb-[16px]">
              {message.message}
            </p>

            {/* Divider */}
            <div className="h-[0.5px] bg-[#e5e7eb]" />
          </div>
        </button>
      </div>
    </div>
  );
}
