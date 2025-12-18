export interface Letter {
  id: string;
  emotion: string;
  content: string;
  type: "empathy" | "healing" | "encouragement";
}

export const letters: Letter[] = [
  // VUI VẺ
  {
    id: "happy-1",
    emotion: "happy",
    content:
      "Chào bạn, nếu hôm nay bạn đang cảm thấy vui vẻ, hãy tận hưởng trọn vẹn cảm giác này. Đời sống sinh viên có thể nhiều áp lực, nhưng niềm vui nhỏ bé - như một nụ cười, một bài hát yêu thích chính là năng lượng nuôi dưỡng tâm hồn. Hãy chia sẻ niềm vui đó, vì biết đâu nó sẽ sáng ngày của ai đó.",
    type: "encouragement",
  },
  {
    id: "happy-2",
    emotion: "happy",
    content:
      "Giữ lại niềm vui - không phải vì bạn sợ nó biến mất, mà vì bạn biết rằng mỗi niềm vui nhỏ là bằng chứng bạn vẫn đang sống trọn từng khoảnh khắc. Mong bạn sẽ có thêm nhiều ngày như hôm nay: nhẹ nhõm, tươi tắn và bình yên.",
    type: "healing",
  },
  {
    id: "happy-3",
    emotion: "happy",
    content:
      "Hạnh phúc không phải là đích đến, mà là những bước chân nhỏ mà bạn đi qua hôm nay. Nếu hôm nay bạn thấy lòng mình bình yên, hãy dừng lại một chút - thật sự dừng lại. Hít sâu, nhìn quanh, và nói lời cảm ơn. Không chỉ với người khác, mà với chính bản thân của ngày hôm nay.",
    type: "empathy",
  },

  // ÁP LỰC HỌC TẬP
  {
    id: "pressure-1",
    emotion: "pressure",
    content:
      "Có thể bạn đang ngập trong tài liệu và áp lực “không đủ thời gian”. Nhưng hiệu quả không nằm ở học lâu, mà ở sự tỉnh táo và thư thái. Hãy thử tắt điện thoại 15 phút, pha trà hoặc nghe nhạc nhẹ — khi tâm trí được nghỉ ngơi, kiến thức sẽ ở lại lâu hơn.",
    type: "empathy",
  },
  {
    id: "pressure-2",
    emotion: "pressure",
    content:
      'Có những lúc áp lực học tập khiến bạn tự hỏi: "Mình đang cố vì điều gì?" Nhưng hãy nhớ, việc học không định nghĩa toàn bộ con người bạn. Bạn có giá trị vì là chính bạn - với những nỗ lực từng ngày, dù lớn hay nhỏ. Hãy cho bản thân một lời khen hôm nay.',
    type: "healing",
  },
  {
    id: "pressure-3",
    emotion: "pressure",
    content:
      "Chào người đang vật lộn với deadline và điểm số. Nỗ lực không chỉ nằm trên bảng điểm, mà còn ở những lần bạn không bỏ cuộc. Nếu hôm nay mệt, hãy cho phép mình nghỉ một nhịp — nghỉ ngơi không phải là bỏ cuộc, mà để đủ sức đi tiếp.",
    type: "encouragement",
  },

  // CÔ ĐƠN
  {
    id: "lonely-1",
    emotion: "lonely",
    content:
      "Cô đơn là cái bóng của ánh sáng. Có bóng, ta mới biết mình đang đi dưới nắng. Thỉnh thoảng hãy tận hưởng nó: đi dạo một mình, nghe nhạc, ngắm hoàng hôn, nói chuyện với chính mình trong gương… Bạn sẽ thấy, ở một mình cũng có thể rất dễ thương. Có những con đường buộc ta phải đi một mình — đó không phải cô đơn, mà là lựa chọn.",
    type: "empathy",
  },
  {
    id: "lonely-2",
    emotion: "lonely",
    content:
      "Có lúc, dù xung quanh rất đông, ta vẫn thấy mình đứng ngoài mọi cuộc trò chuyện. Nếu bạn đang cảm giác ấy, bạn không hề kỳ lạ. Bạn có quyền bước chậm hơn, quyền chọn vài người thực sự hiểu mình thay vì cố gắng hợp với tất cả. Ước gì bạn có thể nhìn mình qua đôi mắt của người trân trọng bạn — chắc chắn bạn sẽ dịu dàng với bản thân hơn",
    type: "healing",
  },
  {
    id: "lonely-3",
    emotion: "lonely",
    content:
      "Có thể chẳng ai nhận ra nỗi buồn trong mắt bạn, nhưng thế giới vẫn lắng nghe theo cách lặng lẽ. Bạn không cần luôn mạnh mẽ — được yếu đuối, được buồn, được im lặng. Hãy nghỉ một chút và tin rằng: bạn xứng đáng được yêu thương, ngay cả khi chưa ai nói ra.",
    type: "encouragement",
  },

  // MỆT MỎI
  {
    id: "tired-1",
    emotion: "tired",
    content:
      "Có những ngày không có chuyện gì quá tệ, nhưng bạn vẫn mệt, chán và chẳng muốn làm gì. Điều đó không có nghĩa bạn lười biếng hay vô dụng. Có thể cơ thể và tâm trí bạn chỉ đang cần nghỉ ngơi. Một bữa ăn tử tế, một giấc ngủ đủ, một lần ra ngoài hít thở — vậy là đủ. Bạn không cần phải luôn năng suất; có những ngày chỉ cần “tồn tại” thôi cũng đã ổn rồi.",
    type: "healing",
  },
  {
    id: "tired-2",
    emotion: "tired",
    content:
      "Nếu bạn không gọi tên được cảm xúc của mình, cũng không sao cả. Không phải nỗi buồn nào cũng có lời giải thích. Điều quan trọng là bạn vẫn đang ở đây, vẫn tiếp tục thêm một ngày nữa. Có thể trong bạn vẫn còn một phần rất nhỏ chưa muốn bỏ cuộc. Mình tin phần nhỏ ấy sẽ lớn dần lên, từng chút một. Và chỉ riêng điều đó thôi cũng đã rất đáng trân trọng rồi.",
    type: "empathy",
  },
  {
    id: "tired-3",
    emotion: "tired",
    content:
      "Khi mọi thứ trở nên quá nặng, bạn có thể đặt chúng xuống một lúc. Không cần gượng cười, không cần mạnh mẽ hơn khả năng của mình. Chỉ cần thành thật thừa nhận: “Mình đang mệt.” Như vậy đã là một khởi đầu của chữa lành. Bạn không cần chạy nhanh hơn ai cả, chỉ cần chậm lại để trái tim kịp theo. Bình yên thôi, cũng đã đủ tuyệt vời rồi 🌿",
    type: "encouragement",
  },

  // LO ÂU, SỢ HÃI
  {
    id: "anxious-1",
    emotion: "anxious",
    content:
      "Có thể bạn mong ai đó nhìn thấu nỗi buồn trong mắt mình, nhưng chưa ai nhận ra. Thật ra, thế giới vẫn đang lắng nghe, chỉ là theo cách lặng lẽ hơn. Bạn không cần luôn mạnh mẽ. Được yếu đuối, được buồn, được im lặng — tất cả đều là bạn. Và bạn xứng đáng được yêu thương, ngay cả khi chưa ai nói ra.",
    type: "healing",
  },
  {
    id: "anxious-2",
    emotion: "anxious",
    content:
      "Khi tim bạn đập nhanh vì lo âu, hãy đặt tay lên ngực, hít sâu một nhịp rồi thở ra chậm rãi. Bạn đã vượt qua rất nhiều ngày tưởng chừng không thể. Những cảm xúc này rồi sẽ trôi qua. Bạn không cần chiến thắng mọi thứ ngay bây giờ — chỉ cần ở lại, tiếp tục đi cùng chính mình thêm một đoạn nữa.",
    type: "empathy",
  },
  {
    id: "anxious-3",
    emotion: "anxious",
    content:
      "Chào bạn, người đang mang quá nhiều suy nghĩ trong đầu. Không sao nếu lúc này mọi thứ khiến bạn thấy quá sức. Tâm trí thường phóng đại nỗi sợ về tương lai, làm mọi điều trở nên đáng sợ hơn thực tế. Hãy quay về hiện tại: bạn đang ngồi đây, đang thở, và đang an toàn. Từng chút một thôi, bạn không cần giải quyết tất cả trong một ngày.",
    type: "encouragement",
  },

  // THẤT VỌNG
  {
    id: "disappointed-1",
    emotion: "disappointed",
    content:
      "Thất vọng xuất hiện khi bạn đã đặt vào đó rất nhiều niềm tin và kỳ vọng. Điều này không khiến bạn yếu đuối, mà cho thấy bạn đã từng cố gắng hết lòng. Đừng tự trách mình hay phủ nhận cảm xúc ấy. Hãy cho trái tim bạn được nghỉ ngơi, như cách mặt đất cần lặng yên sau cơn mưa để đón nắng trở lại.",
    type: "empathy",
  },
  {
    id: "disappointed-2",
    emotion: "disappointed",
    content:
      "Có thể lúc này bạn cảm thấy mọi nỗ lực đều vô ích, nhưng thật ra không có cố gắng nào biến mất. Mỗi bước đi, dù nhỏ, đều đang âm thầm tạo nên nền tảng cho tương lai. Bạn chỉ chưa kịp nhìn thấy kết quả mà thôi. Hãy tiếp tục, chậm cũng được, miễn là bạn không bỏ cuộc.",
    type: "healing",
  },
  {
    id: "disappointed-3",
    emotion: "disappointed",
    content:
      "Không ai đi qua cuộc đời mà không vấp ngã và thất vọng. Bạn được phép mệt, được phép buồn và dừng lại một chút để thở. Điều quan trọng là bạn không quên mình vẫn có quyền đứng dậy. Chính những lần tổn thương hôm nay sẽ giúp bạn trưởng thành, mạnh mẽ và dịu dàng hơn với bản thân vào ngày mai.",
    type: "encouragement",
  },

  // BUỒN BÃ
  {
    id: "sad-1",
    emotion: "sad",
    content:
      "Có những lúc tâm hồn mệt mỏi mà chẳng rõ vì sao, chỉ thấy một khoảng trống lặng lẽ trong lòng. Cảm xúc ấy hoàn toàn hợp lý, bạn không cần tự trách hay ép mình mạnh mẽ ngay lập tức. Hãy cho phép bản thân thở chậm lại, dành một khoảng yên nhỏ để buông bớt điều nặng nề. Rồi sự nhẹ nhõm sẽ quay về, âm thầm nhưng đủ dịu để xoa dịu những nơi đang tổn thương trong bạn.",
    type: "empathy",
  },
  {
    id: "sad-2",
    emotion: "sad",
    content:
      "Việc bạn dám thừa nhận và chia sẻ nỗi buồn đã là một điều rất dũng cảm. Có những ngày tâm hồn nặng đến mức mọi thứ đều khó khăn, và bạn chỉ mong có ai đó thật sự lắng nghe. Nỗi buồn này không khiến bạn yếu đuối — nó cho thấy bạn đã yêu thương và chịu đựng nhiều hơn người khác nhìn thấy. Hãy cho mình thời gian để mềm yếu, vì chính từ đó sự chữa lành bắt đầu.",
    type: "healing",
  },
  {
    id: "sad-3",
    emotion: "sad",
    content:
      "Nếu hôm nay mọi thứ quá nặng, bạn có thể đặt chúng xuống một chút. Không cần gượng cười, không cần mạnh mẽ hơn khả năng của mình. Chỉ cần thừa nhận: “Mình đang mệt.” Thế là đủ để bắt đầu chữa lành. Bạn không phải chạy nhanh hơn ai cả, chỉ cần chậm lại để trái tim kịp theo. Bình yên thôi, cũng đã đủ tuyệt vời rồi 🌿",
    type: "encouragement",
  },

  // CÁC MỐI QUAN HỆ
  {
    id: "relationship-1",
    emotion: "relationship",
    content:
      "Các mối quan hệ - dù là tình yêu, tình bạn hay gia đình - đều có thể mang đến niềm vui lẫn nỗi đau. Nếu bạn đang gặp khó khăn trong một mối quan hệ, hãy nhớ: bạn xứng đáng được yêu thương đúng cách, và đôi khi việc buông tay cũng là yêu thương.",
    type: "empathy",
  },
  {
    id: "relationship-2",
    emotion: "relationship",
    content:
      "Không phải mối quan hệ nào cũng phải hoàn hảo, nhưng mối quan hệ lành mạnh sẽ cho bạn cảm giác an toàn và được tôn trọng. Nếu bạn đang cảm thấy mệt mỏi vì ai đó, hãy tự hỏi: mình có đang được trân trọng không?",
    type: "healing",
  },
  {
    id: "relationship-3",
    emotion: "relationship",
    content:
      "Bạn không thể thay đổi người khác, nhưng bạn có thể thay đổi cách bạn phản ứng và bảo vệ bản thân. Hãy đặt ranh giới lành mạnh, và đừng quên rằng mối quan hệ quan trọng nhất là mối quan hệ với chính mình.",
    type: "encouragement",
  },

  // CẢM XÚC KHÁC
  {
    id: "other-1",
    emotion: "other",
    content:
      "Đôi khi cảm xúc không thể gọi tên - nó chỉ là một cảm giác mơ hồ trong lòng. Và điều đó hoàn toàn bình thường. Bạn không cần phải hiểu mọi thứ ngay bây giờ. Hãy chỉ cảm nhận, và tin rằng mọi thứ sẽ dần rõ ràng hơn.",
    type: "empathy",
  },
  {
    id: "other-2",
    emotion: "other",
    content:
      "Cảm xúc của bạn là hợp lệ - dù nó là gì. Bạn không cần phải giải thích hay biện minh cho cảm xúc của mình. Hãy chỉ cần biết rằng bạn đang cảm nhận, và đó là một phần của việc sống.",
    type: "healing",
  },
  {
    id: "other-3",
    emotion: "other",
    content:
      "Mình không biết bạn đang trải qua điều gì, nhưng mình muốn bạn biết: bạn không một mình. Có ai đó ngoài kia đang nghĩ về bạn, mong bạn ổn. Hãy chăm sóc bản thân hôm nay, dù chỉ là một việc nhỏ.",
    type: "encouragement",
  },
];

export const getRandomLetters = (
  emotion: string,
  count: number = 3
): Letter[] => {
  const emotionLetters = letters.filter((l) => l.emotion === emotion);
  const shuffled = [...emotionLetters].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getRandomLetterForEmotion = (emotion: string): Letter | null => {
  const emotionLetters = letters.filter((l) => l.emotion === emotion);
  if (emotionLetters.length === 0) return null;
  return emotionLetters[Math.floor(Math.random() * emotionLetters.length)];
};
