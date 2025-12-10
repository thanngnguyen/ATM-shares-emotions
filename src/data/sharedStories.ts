export interface SharedStory {
  id: string;
  emotion: string;
  content: string;
  createdAt: Date;
}

// Sample anonymous stories for reading
export const sharedStories: SharedStory[] = [
  {
    id: "1",
    emotion: "pressure",
    content:
      "Mình đang rất áp lực với kỳ thi cuối kỳ. Có quá nhiều môn phải ôn mà thời gian thì không đủ. Đôi khi mình tự hỏi liệu mình có đang cố gắng đúng hướng không...",
    createdAt: new Date("2024-12-09"),
  },
  {
    id: "2",
    emotion: "lonely",
    content:
      "Đi học xa nhà, không có bạn bè thân. Mình cảm thấy cô đơn lạc lõng ở nơi đất khách quê người. Ước gì có ai đó hiểu mình...",
    createdAt: new Date("2024-12-08"),
  },
  {
    id: "3",
    emotion: "happy",
    content:
      "Hôm nay mình đã hoàn thành xong bài thuyết trình mà mình lo lắng cả tuần! Cảm giác nhẹ nhõm và tự hào vô cùng 💪",
    createdAt: new Date("2024-12-08"),
  },
  {
    id: "4",
    emotion: "tired",
    content:
      "Làm việc part-time và học cùng lúc thật sự quá mệt. Có những lúc mình chỉ muốn dừng lại và nghỉ ngơi nhưng không thể...",
    createdAt: new Date("2024-12-07"),
  },
  {
    id: "5",
    emotion: "relationship",
    content:
      "Mình và người yêu vừa chia tay. 3 năm bên nhau giờ chỉ còn là kỷ niệm. Mình biết thời gian sẽ chữa lành nhưng bây giờ thì vẫn còn đau lắm...",
    createdAt: new Date("2024-12-07"),
  },
  {
    id: "6",
    emotion: "anxious",
    content:
      "Mình sắp ra trường mà vẫn chưa biết tương lai sẽ như thế nào. Nỗi lo về công việc, về cuộc sống cứ đè nặng mỗi ngày...",
    createdAt: new Date("2024-12-06"),
  },
  {
    id: "7",
    emotion: "disappointed",
    content:
      "Mình đã cố gắng rất nhiều nhưng kết quả không như mong đợi. Thật sự rất thất vọng về bản thân...",
    createdAt: new Date("2024-12-06"),
  },
  {
    id: "8",
    emotion: "sad",
    content:
      "Ông mình vừa mất tuần trước. Mình không kịp về thăm ông lần cuối. Nỗi buồn và sự hối tiếc cứ ám ảnh mình mãi...",
    createdAt: new Date("2024-12-05"),
  },
  {
    id: "9",
    emotion: "happy",
    content:
      "Mình vừa nhận được học bổng! Sau bao nhiêu nỗ lực, cuối cùng cũng được đền đáp. Cảm ơn tất cả những người đã ủng hộ mình! 🎉",
    createdAt: new Date("2024-12-05"),
  },
  {
    id: "10",
    emotion: "other",
    content:
      "Mình không biết mình đang cảm thấy gì. Có lẽ là một sự trống rỗng, mơ hồ về cuộc sống. Mình đang tìm kiếm ý nghĩa của những điều mình đang làm...",
    createdAt: new Date("2024-12-04"),
  },
];

export const getStoriesByEmotion = (emotion: string): SharedStory[] => {
  return sharedStories.filter((s) => s.emotion === emotion);
};

export const getRandomStories = (count: number = 5): SharedStory[] => {
  const shuffled = [...sharedStories].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
