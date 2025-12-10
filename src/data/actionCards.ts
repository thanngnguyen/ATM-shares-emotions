export interface ActionCard {
  id: string;
  title: string;
  description: string;
  action: string;
  icon: string; // Đường dẫn đến icon image
  category: "body" | "mind" | "heart" | "soul";
}

export const actionCards: ActionCard[] = [
  // BODY - Hoạt động cơ thể
  {
    id: "body-1",
    title: "Hít thở sâu",
    description:
      "Hít vào bằng mũi trong 4 giây, giữ 4 giây, thở ra bằng miệng trong 6 giây",
    action: "Lặp lại 5 lần và cảm nhận sự thư giãn lan tỏa khắp cơ thể",
    icon: "/images/icons/actions/wind.png",
    category: "body",
  },
  {
    id: "body-2",
    title: "Vận động nhẹ",
    description: "Đứng dậy, vươn vai và đi bộ quanh phòng 2-3 phút",
    action: "Để máu lưu thông và xua tan sự mệt mỏi",
    icon: "/images/icons/actions/walking.png",
    category: "body",
  },
  {
    id: "body-3",
    title: "Uống nước",
    description: "Đi lấy một ly nước mát hoặc ấm",
    action: "Uống từ từ, cảm nhận nước làm dịu cơ thể từ trong ra ngoài",
    icon: "/images/icons/actions/water.png",
    category: "body",
  },
  {
    id: "body-4",
    title: "Massage nhẹ",
    description: "Dùng tay xoa bóp nhẹ nhàng vùng cổ, vai và thái dương",
    action: "Làm trong 2-3 phút để giảm căng thẳng",
    icon: "/images/icons/actions/massage.png",
    category: "body",
  },
  {
    id: "body-5",
    title: "Nắm tay thư giãn",
    description: "Nắm chặt tay trong 5 giây, sau đó thả lỏng hoàn toàn",
    action: "Lặp lại 5 lần để giải phóng căng thẳng cơ bắp",
    icon: "/images/icons/actions/fist.png",
    category: "body",
  },

  // MIND - Hoạt động tâm trí
  {
    id: "mind-1",
    title: "Viết ra suy nghĩ",
    description: "Lấy giấy và viết ra 3 điều đang làm bạn lo lắng",
    action: "Sau đó, viết 1 giải pháp nhỏ cho mỗi điều",
    icon: "/images/icons/actions/writing.png",
    category: "mind",
  },
  {
    id: "mind-2",
    title: "Đếm ngược",
    description: "Đếm ngược từ 10 về 1, mỗi số đi kèm một hơi thở",
    action: "Giúp tâm trí tập trung và bình tĩnh lại",
    icon: "/images/icons/actions/numbers.png",
    category: "mind",
  },
  {
    id: "mind-3",
    title: "5-4-3-2-1",
    description:
      "Nhìn 5 thứ, nghe 4 âm thanh, chạm 3 vật, ngửi 2 mùi, nếm 1 vị",
    action: "Kỹ thuật grounding giúp bạn trở về hiện tại",
    icon: "/images/icons/actions/eye.png",
    category: "mind",
  },
  {
    id: "mind-4",
    title: "Tạm dừng công việc",
    description: "Đặt điện thoại/máy tính xuống trong 5 phút",
    action: "Nhắm mắt và để tâm trí nghỉ ngơi hoàn toàn",
    icon: "/images/icons/actions/pause.png",
    category: "mind",
  },
  {
    id: "mind-5",
    title: "Nhớ lại kỷ niệm vui",
    description: "Nghĩ về một khoảnh khắc hạnh phúc trong quá khứ",
    action: "Cảm nhận lại niềm vui đó và để nó làm ấm lòng bạn",
    icon: "/images/icons/actions/thought.png",
    category: "mind",
  },

  // HEART - Hoạt động cảm xúc
  {
    id: "heart-1",
    title: "Tự ôm mình",
    description: "Vòng tay ôm lấy chính mình thật chặt",
    action: 'Nói với bản thân: "Mình ổn, mình đang làm tốt lắm"',
    icon: "/images/icons/actions/hug.png",
    category: "heart",
  },
  {
    id: "heart-2",
    title: "Gửi lời cảm ơn",
    description: "Nghĩ về ai đó và gửi cho họ tin nhắn cảm ơn nhỏ",
    action: "Sự kết nối sẽ làm bạn cảm thấy ấm áp hơn",
    icon: "/images/icons/actions/letter.png",
    category: "heart",
  },
  {
    id: "heart-3",
    title: "Khóc nếu cần",
    description: "Cho phép mình được khóc nếu đang muốn khóc",
    action: "Nước mắt là cách cơ thể giải tỏa cảm xúc một cách lành mạnh",
    icon: "/images/icons/actions/tear.png",
    category: "heart",
  },
  {
    id: "heart-4",
    title: "Khen ngợi bản thân",
    description: "Viết ra 3 điều tốt đẹp về bản thân",
    action: "Đọc to lên và tin vào những điều đó",
    icon: "/images/icons/actions/star.png",
    category: "heart",
  },
  {
    id: "heart-5",
    title: "Lắng nghe nhạc",
    description: "Bật một bài hát bạn yêu thích",
    action: "Nhắm mắt và để giai điệu chạm vào cảm xúc của bạn",
    icon: "/images/icons/actions/music.png",
    category: "heart",
  },

  // SOUL - Hoạt động tâm hồn
  {
    id: "soul-1",
    title: "Ngắm thiên nhiên",
    description: "Nhìn ra cửa sổ hoặc đến nơi có cây xanh",
    action: "Quan sát màu xanh của lá, bầu trời, và cảm nhận sự bình yên",
    icon: "/images/icons/actions/plant.png",
    category: "soul",
  },
  {
    id: "soul-2",
    title: "Viết nhật ký biết ơn",
    description: "Viết ra 3 điều bạn biết ơn hôm nay",
    action: "Dù nhỏ bé đến đâu, sự biết ơn sẽ làm sáng tâm hồn bạn",
    icon: "/images/icons/actions/book.png",
    category: "soul",
  },
  {
    id: "soul-3",
    title: "Thiền định ngắn",
    description: "Ngồi yên, nhắm mắt và tập trung vào hơi thở",
    action: "Chỉ 3 phút thôi, để tâm hồn được nghỉ ngơi",
    icon: "/images/icons/actions/meditation.png",
    category: "soul",
  },
  {
    id: "soul-4",
    title: "Đọc trích dẫn ý nghĩa",
    description:
      '"Bạn mạnh mẽ hơn bạn nghĩ, can đảm hơn bạn tin, và được yêu thương hơn bạn biết"',
    action: "Đọc và để những lời này thấm vào tâm hồn",
    icon: "/images/icons/actions/sparkle.png",
    category: "soul",
  },
  {
    id: "soul-5",
    title: "Tha thứ cho mình",
    description: "Nếu bạn đang tự trách bản thân về điều gì đó",
    action: 'Hãy nói: "Mình tha thứ cho mình. Mình xứng đáng được bình yên."',
    icon: "/images/icons/actions/dove.png",
    category: "soul",
  },
];

export const getRandomActionCard = (): ActionCard => {
  return actionCards[Math.floor(Math.random() * actionCards.length)];
};

export const getActionCardByCategory = (
  category: ActionCard["category"]
): ActionCard[] => {
  return actionCards.filter((card) => card.category === category);
};
