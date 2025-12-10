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
      "Mình hiểu bạn đang gánh chịu rất nhiều - deadline, bài tập, kỳ vọng từ gia đình và cả chính bạn. Nhưng xin bạn nhớ: bạn là con người, không phải cỗ máy. Dù bạn có làm tốt đến đâu, hãy cho phép bản thân được nghỉ ngơi. Không có thành tích nào quan trọng hơn sức khỏe tinh thần của bạn.",
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
      "Mình từng nghĩ phải hoàn hảo mới xứng đáng. Nhưng giờ mình hiểu, xứng đáng không đến từ điểm số hay thành tích. Bạn đã rất cố gắng rồi. Và chỉ cần bạn đang cố gắng - theo cách của bạn - là bạn đã đủ tốt rồi.",
    type: "encouragement",
  },

  // CÔ ĐƠN
  {
    id: "lonely-1",
    emotion: "lonely",
    content:
      "Cô đơn là một cảm giác mà ai cũng từng trải qua - ngay cả khi ở giữa đám đông. Mình muốn nói với bạn rằng: bạn không cô đơn trong chính cảm giác cô đơn đó. Có rất nhiều người ngoài kia đang cảm nhận giống bạn, và điều đó không làm bạn yếu đuối hay khác biệt.",
    type: "empathy",
  },
  {
    id: "lonely-2",
    emotion: "lonely",
    content:
      "Đôi khi, sự cô đơn là tiếng nói nhẹ nhàng của tâm hồn - muốn được hiểu, được kết nối. Hãy nhẹ nhàng với bản thân, vì bạn xứng đáng được yêu thương - kể cả khi bạn chưa tìm thấy ai hiểu mình lúc này.",
    type: "healing",
  },
  {
    id: "lonely-3",
    emotion: "lonely",
    content:
      "Bạn có thể cảm thấy mình đang đứng một mình giữa thế giới rộng lớn. Nhưng xin đừng quên: bạn đang tồn tại, bạn đang được nhìn thấy - ít nhất là qua những dòng chữ này. Mình gửi đến bạn một vòng tay ấm áp từ xa.",
    type: "encouragement",
  },

  // MỆT MỎI
  {
    id: "tired-1",
    emotion: "tired",
    content:
      "Khi cơ thể mệt mỏi, tâm trí cũng cần được nghỉ ngơi. Hãy cho phép mình dừng lại - không phải vì bạn yếu đuối, mà vì bạn đang chăm sóc bản thân. Một giấc ngủ ngắn, một ly nước ấm, hay chỉ là một phút thở sâu - đều là yêu thương.",
    type: "healing",
  },
  {
    id: "tired-2",
    emotion: "tired",
    content:
      "Mình hiểu cảm giác kiệt sức đó - khi mọi thứ dường như quá sức chịu đựng. Nhưng bạn đã rất mạnh mẽ khi vẫn tiếp tục đến hôm nay. Hãy nghỉ ngơi nếu cần, vì ngày mai vẫn còn đó, và bạn xứng đáng được thư giãn.",
    type: "empathy",
  },
  {
    id: "tired-3",
    emotion: "tired",
    content:
      'Bạn không cần phải mạnh mẽ mỗi ngày. Có những lúc, việc thừa nhận mình mệt mỏi đã là một dạng can đảm. Hãy ôm lấy sự mệt mỏi đó và nói: "Mình đã cố gắng rất nhiều rồi." Vì đúng là như vậy.',
    type: "encouragement",
  },

  // LO ÂU, SỢ HÃI
  {
    id: "anxious-1",
    emotion: "anxious",
    content:
      'Lo âu là điều bình thường - nó cho thấy bạn đang quan tâm đến điều gì đó. Nhưng đừng để nỗi lo nuốt chửng bạn. Hãy thử hít thở thật sâu, và nhắc nhở bản thân: "Mình đã vượt qua những điều khó khăn trước đây, và mình sẽ lại làm được."',
    type: "healing",
  },
  {
    id: "anxious-2",
    emotion: "anxious",
    content:
      "Mình từng sợ hãi đến mức không dám bước tiếp. Nhưng rồi mình nhận ra, sợ hãi không có nghĩa là bạn yếu đuối. Nó chỉ có nghĩa là bạn đang đối mặt với điều gì đó quan trọng. Hãy cho phép mình sợ, nhưng đừng để sự sợ hãi dừng bạn lại.",
    type: "empathy",
  },
  {
    id: "anxious-3",
    emotion: "anxious",
    content:
      "Nếu bạn đang lo lắng về tương lai - hãy nhớ rằng tương lai chưa đến, và hiện tại mới là điều duy nhất bạn có thể kiểm soát. Hãy làm một việc nhỏ hôm nay, chỉ một việc thôi, và tự hào về nó.",
    type: "encouragement",
  },

  // THẤT VỌNG
  {
    id: "disappointed-1",
    emotion: "disappointed",
    content:
      "Thất vọng là một cảm xúc nặng nề - nó có thể đến từ người khác hoặc từ chính bạn. Nhưng xin bạn nhớ: thất vọng không định nghĩa con người bạn. Bạn vẫn có giá trị, dù mọi thứ không diễn ra như mong đợi.",
    type: "empathy",
  },
  {
    id: "disappointed-2",
    emotion: "disappointed",
    content:
      "Có những lúc cuộc sống không như bạn mong muốn, và điều đó thật đau. Nhưng hãy nhớ, mỗi lần thất vọng là một bài học - không phải để bạn cảm thấy tồi tệ hơn, mà để bạn trở nên mạnh mẽ và khôn ngoan hơn.",
    type: "healing",
  },
  {
    id: "disappointed-3",
    emotion: "disappointed",
    content:
      "Bạn có quyền cảm thấy thất vọng, có quyền buồn. Nhưng sau đó, hãy đứng dậy - không phải vì bạn phải, mà vì bạn xứng đáng với một cơ hội mới. Và mình tin bạn sẽ làm được.",
    type: "encouragement",
  },

  // BUỒN BÃ
  {
    id: "sad-1",
    emotion: "sad",
    content:
      "Nếu bạn đang buồn, mình muốn nói với bạn rằng: buồn là được phép. Bạn không cần phải giả vờ mạnh mẽ hay tươi cười khi lòng đang nặng trĩu. Hãy cho phép mình khóc nếu cần, vì nước mắt cũng là một cách để chữa lành.",
    type: "empathy",
  },
  {
    id: "sad-2",
    emotion: "sad",
    content:
      "Nỗi buồn giống như cơn mưa - nó sẽ qua đi. Có thể không phải ngay bây giờ, nhưng nó sẽ qua. Và khi nắng lên, bạn sẽ thấy mình đã kiên cường hơn mình tưởng. Hãy ở bên cạnh nỗi buồn một chút, rồi nó sẽ tự nhẹ đi.",
    type: "healing",
  },
  {
    id: "sad-3",
    emotion: "sad",
    content:
      "Mình gửi đến bạn một cái ôm thật chặt. Bạn không cô đơn trong nỗi buồn này. Có ai đó ngoài kia - có thể là mình - đang nghĩ về bạn và mong bạn sẽ ổn hơn. Hãy tin vào điều đó.",
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
