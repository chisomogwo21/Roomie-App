export interface MockProfile {
  id: string;
  name: string;
  age: string;
  occupation: string;
  location: string;
  photoUrl: string | null;
  bio: string;
  lifestyleTags: string[];
  compatibilityScore?: number;
  lookingFor?: string;
  preferredMoveIn?: string;
}

export const MOCK_PROFILES: MockProfile[] = [
  {
    id: "1",
    name: "Amara",
    age: "24",
    occupation: "UX Designer",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Passionate about design and travel. I love clean spaces and morning yoga. Looking for a friendly roommate to share a beautiful apartment in Kigali city center.",
    lifestyleTags: ["Early Bird", "No Smoking", "Clean & Tidy", "Plant Lover", "Artist"],
    compatibilityScore: 94,
    lookingFor: "Roommate",
    preferredMoveIn: "Immediate"
  },
  {
    id: "2",
    name: "David",
    age: "27",
    occupation: "Software Engineer",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Hey! I'm David. I work remotely and enjoy gaming and cooking. I'm pretty laid back but value a quiet environment during work hours.",
    lifestyleTags: ["Gamer", "Chef", "WFH", "Night Owl"],
    compatibilityScore: 88,
    lookingFor: "Roommate",
    preferredMoveIn: "Flexible"
  },
  {
    id: "3",
    name: "Elena",
    age: "25",
    occupation: "Marketing Lead",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "I lead a marketing team at a local startup. I'm very organized and enjoy exploring art galleries on weekends. Looking for someone with a similar vibe!",
    lifestyleTags: ["Organized", "Yoga", "Coffee Lover", "Art Enthusiast"],
    compatibilityScore: 91,
    lookingFor: "Roommate",
    preferredMoveIn: "In 1 month"
  },
  {
    id: "user-101",
    name: "Marcus",
    age: "26",
    occupation: "Data Analyst",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Data enthusiast who loves hiking and outdoor adventures. I'm new to Kigali and looking for local friends as well as a great roommate.",
    lifestyleTags: ["Hiker", "Outdoorsy", "Data Nerd", "Social"],
    lookingFor: "Roommate",
    preferredMoveIn: "Flexible"
  },
  {
    id: "user-102",
    name: "Sandra",
    age: "23",
    occupation: "Interior Designer",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    bio: "I have a keen eye for aesthetics. I love decorating and keeping my home beautiful. Looking for someone who also respects shared spaces.",
    lifestyleTags: ["Interior Design", "Stylish", "Detail Oriented", "Clean"],
    lookingFor: "Roommate",
    preferredMoveIn: "Immediate"
  },
  {
    id: "user-103",
    name: "Jean",
    age: "29",
    occupation: "Teacher",
    location: "Kigali, Rwanda",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Experienced teacher who enjoys reading and quiet evenings. I have a room available in a cozy house with a garden.",
    lifestyleTags: ["Reader", "Quiet", "Educator", "Nature Lover"],
    lookingFor: "Roommate",
    preferredMoveIn: "Flexible"
  },
  {
    id: "default",
    name: "Alex Rivera",
    age: "28",
    occupation: "Software Engineer",
    location: "Kigali, Rwanda",
    photoUrl: null,
    bio: "Love cooking and exploring new cafes. Usually working from home during the week. Looking for a clean, quiet place with friendly roommates who respect personal space but also enjoy occasional hangouts.",
    lifestyleTags: ["Clean", "Quiet", "WFH", "Foodie", "Early Bird"],
    lookingFor: "Roommate",
    preferredMoveIn: "Flexible"
  }
];

export function getProfileById(id?: string): MockProfile {
  return MOCK_PROFILES.find(p => p.id === id) || MOCK_PROFILES.find(p => p.id === "default")!;
}
