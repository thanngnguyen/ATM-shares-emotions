export interface Emotion {
  id: string;
  name: string;
  icon: string; // Đường dẫn đến icon image
  color: string;
  bgClass: string;
}

export const emotions: Emotion[] = [
  {
    id: "happy",
    name: "Vui vẻ",
    icon: "/images/icons/emotions/happy-bear.png",
    color: "#F5F99A",
    bgClass: "emotion-happy",
  },
  {
    id: "pressure",
    name: "Áp lực học tập",
    icon: "/images/icons/emotions/pressure-sweat.gif",
    color: "#D4E8F2",
    bgClass: "emotion-pressure",
  },
  {
    id: "lonely",
    name: "Cô đơn",
    icon: "/images/icons/emotions/lonely-cat.gif",
    color: "#D4D4D4",
    bgClass: "emotion-lonely",
  },
  {
    id: "tired",
    name: "Mệt mỏi",
    icon: "/images/icons/emotions/tired-dog.png",
    color: "#D8BFD8",
    bgClass: "emotion-tired",
  },
  {
    id: "anxious",
    name: "Lo âu, sợ hãi",
    icon: "/images/icons/emotions/anxious-cat.gif",
    color: "#E8D4F2",
    bgClass: "emotion-anxious",
  },
  {
    id: "disappointed",
    name: "Thất vọng",
    icon: "/images/icons/emotions/disappointed-cat.gif",
    color: "#F5D4D4",
    bgClass: "emotion-disappointed",
  },
  {
    id: "sad",
    name: "Buồn bã",
    icon: "/images/icons/emotions/sad-cat.gif",
    color: "#FFD4A3",
    bgClass: "emotion-sad",
  },
  {
    id: "relationship",
    name: "Các mối quan hệ",
    icon: "/images/icons/emotions/relationship-heart.gif",
    color: "#D4F5D4",
    bgClass: "emotion-relationship",
  },
  {
    id: "other",
    name: "Cảm xúc khác",
    icon: "/images/icons/emotions/other-star.gif",
    color: "#F5E8E8",
    bgClass: "emotion-other",
  },
];

export const getEmotionById = (id: string): Emotion | undefined => {
  return emotions.find((e) => e.id === id);
};
