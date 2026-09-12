import { Character } from '../types';

export const INITIAL_CHARACTERS: Character[] = [
  {
    id: 'quang-trung',
    name: 'Nguyễn Huệ (Quang Trung Hoàng Đế)',
    title: 'Bắc Bình Vương • Hoàng Đế Tây Sơn',
    category: 'Lịch sử',
    avatarUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1600&auto=format&fit=crop&q=80',
    status: 'legendary',
    quote: 'Đánh cho để dài tóc, đánh cho để đen răng, đánh cho nó chích luân bất phản, đánh cho nó phiến giáp bất hoàn, đánh cho sử tri nam quốc anh hùng chi hữu chủ!',
    bio: 'Vị hoàng đế bách chiến bách thắng của triều đại Tây Sơn, thiên tài quân sự kiệt xuất trong lịch sử Việt Nam, người lãnh đạo cuộc đại phá 29 vạn quân Mãn Thanh mùa xuân năm Kỷ Dậu 1789.',
    initialMessage: 'Hỡi chư vị tướng sĩ và đồng bào! Giặc Mãn Thanh cậy thế đông quân xâm lấn bờ cõi nước ta. Ta thống lĩnh đại quân từ Phú Xuân ra Bắc, định liệu trong mười ngày sẽ quét sạch giặc thù. Chư vị đã đồng lòng cùng ta tiến bước chưa?',
    messageHistory: [
      {
        id: 'msg-qt-1',
        sender: 'character',
        senderName: 'Vua Quang Trung',
        text: 'Hỡi chư vị tướng sĩ và đồng bào! Giặc Mãn Thanh cậy thế đông quân xâm lấn bờ cõi nước ta. Ta thống lĩnh đại quân từ Phú Xuân ra Bắc, định liệu trong mười ngày sẽ quét sạch giặc thù. Chư vị đã đồng lòng cùng ta tiến bước chưa?',
        timestamp: 'Mùa đông năm 1788 - Phú Xuân',
        mood: 'Hào hùng, Khí phách'
      },
      {
        id: 'msg-qt-2',
        sender: 'user',
        senderName: 'Quân sĩ / Tướng sĩ',
        text: 'Muôn tâu Hoàng thượng! Ba quân tướng sĩ một lòng xin theo lệnh Chúa thượng, quyết tử vì giang sơn xã tắc!',
        timestamp: 'Núi Bân, Thừa Thiên',
        mood: 'Quyết tử, Trung thành'
      },
      {
        id: 'msg-qt-3',
        sender: 'character',
        senderName: 'Vua Quang Trung',
        text: 'Nay ta mở tiệc khao quân trước, hẹn ngày mồng 7 Tết Nguyên Đán sẽ vào thành Thăng Long mở tiệc ăn mừng chiến thắng! Tốc chiến tốc thắng, không để quân giặc kịp trở tay.',
        timestamp: 'Đại quân hành quân thần tốc',
        mood: 'Tự tin, Quyết đoán'
      },
      {
        id: 'msg-qt-4',
        sender: 'narrator',
        senderName: 'Sử gia ghi chép',
        text: 'Đêm mùng 4 rạng sáng mùng 5 Tết Kỷ Dậu, đại quân Tây Sơn công phá đồn Ngọc Hồi và Đống Đa, Sầm Nghi Đống thắt cổ tự tử, Tôn Sĩ Nghị hoảng loạn vượt cầu phao trốn chạy sang bờ bắc.',
        timestamp: 'Mùng 5 Tết Kỷ Dậu 1789',
        mood: 'Trang trọng'
      },
      {
        id: 'msg-qt-5',
        sender: 'character',
        senderName: 'Vua Quang Trung',
        text: 'Đất nước đã sạch bóng quân xâm lăng. Nhưng chiến thắng xong phải lập tức chấn hưng giáo dục, cầu hiền tài giúp nước, ban Chiếu Khuyến học và Chiếu Cầu hiền để non sông thái bình muôn thuở.',
        timestamp: 'Thăng Long thái bình',
        mood: 'Nhân ái, Nhìn xa trông rộng'
      }
    ],
    info: {
      gender: 'Nam',
      age: '1753 – 1792 (Hưởng thọ 40 tuổi)',
      era: 'Thế kỷ 18 (Thời kỳ Tây Sơn)',
      faction: 'Nhà Tây Sơn',
      role: 'Hoàng đế, Tổng chỉ huy tối cao, Nhà cải cách',
      appearance: 'Tướng mạo uy nghi, mắt sáng như tia chớp, tiếng nói sang sảng vang xa như chuông đồng, khoác hoàng bào thêu rồng sẫm khói lửa chiến trận.',
      personality: 'Quyết đoán quyết liệt, khí phách ngút trời, thương dân mến lính, trọng dụng nhân tài không câu nệ nguồn gốc, tư duy quân sự vượt thời đại.',
      backstory: 'Sinh ra tại ấp Kiên Mỹ, huyện Tuy Viễn (nay thuộc huyện Tây Sơn, tỉnh Bình Định). Cùng hai người anh em Nguyễn Nhạc và Nguyễn Lữ dựng cờ khởi nghĩa Tây Sơn. Ông đã trực tiếp chỉ huy đánh dẹp tập đoàn phong kiến chúa Nguyễn ở Đàng Trong, đánh tan 5 vạn quân Xiêm trong trận Rạch Gầm - Xoài Mút, rồi tiến ra Bắc lật đổ chúa Trịnh và xóa sổ ách thống trị của tập đoàn Lê - Trịnh, thống nhất giang sơn.',
      abilities: [
        'Nghệ thuật hành quân thần tốc vô song',
        'Tác chiến hiệp đồng tượng binh, kỵ binh và pháo binh',
        'Cải cách chữ Nôm làm quốc ngữ',
        'Thu phục hiền sĩ (Ngô Thì Nhậm, Phan Huy Ích)',
        'Ngoại giao linh hoạt, vừa kiên quyết vừa khôn khéo'
      ],
      stats: {
        leadership: 99,
        intelligence: 96,
        strength: 95,
        agility: 92,
        charisma: 98,
        resolve: 100
      }
    },
    links: [
      {
        id: 'link-qt-1',
        title: 'Wikipedia: Hoàng đế Quang Trung',
        url: 'https://vi.wikipedia.org/wiki/Quang_Trung',
        type: 'wiki',
        description: 'Bách khoa toàn thư mở về thân thế, sự nghiệp và những chiến công oanh liệt.'
      },
      {
        id: 'link-qt-2',
        title: 'Bảo tàng Quang Trung - Bình Định',
        url: 'https://baotangquangtrung.binhdinh.gov.vn',
        type: 'gallery',
        description: 'Di tích quốc gia đặc biệt lưu giữ hiện vật, cây me, giếng nước di tích Tây Sơn tam kiệt.'
      },
      {
        id: 'link-qt-3',
        title: 'Chiến dịch Kỷ Dậu 1789 (Tư liệu lịch sử)',
        url: 'https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_K%E1%BB%B7_D%E1%BA%ADu',
        type: 'document',
        description: 'Tài liệu chi tiết về kế hoạch thần tốc và các trận đánh then chốt hạ gục 29 vạn quân Mãn Thanh.'
      },
      {
        id: 'link-qt-4',
        title: 'Bản trường ca Khí phách Tây Sơn',
        url: 'https://youtube.com',
        type: 'audio',
        description: 'Giai điệu trống trận Tây Sơn cùng nhạc sử thi hào hùng tái hiện khí thế ngút trời.'
      }
    ],
    tags: ['Anh hùng dân tộc', 'Hoàng đế', 'Bách chiến bách thắng', 'Tây Sơn', 'Quân sự thiên tài'],
    updatedAt: '2026-09-12'
  },
  {
    id: 'ly-thuong-kiet',
    name: 'Lý Thường Kiệt',
    title: 'Thái úy Quốc công • Tác giả Nam Quốc Sơn Hà',
    category: 'Lịch sử',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80',
    status: 'legendary',
    quote: 'Nam quốc sơn hà Nam đế cư, Tiệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, Nhữ đẳng hành khang thủ bại hư!',
    bio: 'Nhà quân sự, chính trị gia lỗi lạc thời Lý. Ông là người chủ trương tiên phát chế nhân đánh phủ đầu quân Tống và lập phòng tuyến sông Như Nguyệt lừng lẫy, khẳng định chủ quyền độc lập của Đại Việt.',
    initialMessage: 'Sông núi nước Nam vua Nam ở, định phận rõ ràng ở sách trời! Kẻ nghịch thù nào dám tới xâm phạm, chắc chắn sẽ chuốc lấy sự bại vong tan tành. Người đang đứng trước chiến tuyến sông Như Nguyệt, có nguyện đem hết tâm sức bảo vệ từng tấc đất quê hương?',
    messageHistory: [
      {
        id: 'msg-ltk-1',
        sender: 'character',
        senderName: 'Thái úy Lý Thường Kiệt',
        text: 'Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc! Đó là đạo tiên phát chế nhân.',
        timestamp: 'Năm 1075 - Khởi binh Ung Châu',
        mood: 'Sắc sảo, Chủ động'
      },
      {
        id: 'msg-ltk-2',
        sender: 'user',
        senderName: 'Phó tướng',
        text: 'Thưa Thái úy, quân Tống do Quách Quỳ chỉ huy đang ồ ạt kéo sang, chiến lũy phòng tuyến sông Cầu đã được gia cố hoàn tất!',
        timestamp: 'Bến sông Như Nguyệt',
        mood: 'Khẩn trương'
      },
      {
        id: 'msg-ltk-3',
        sender: 'character',
        senderName: 'Thái úy Lý Thường Kiệt',
        text: 'Đêm nay hãy cho người vào đền Trương Hống, Trương Hát đọc vang bài thơ thần để khích lệ tinh thần ba quân và làm tan rã ý chí của quân Tống!',
        timestamp: 'Đêm trăng sông Như Nguyệt',
        mood: 'Hùng tráng'
      }
    ],
    info: {
      gender: 'Nam',
      age: '1019 – 1105 (Hưởng thọ 86 tuổi)',
      era: 'Thời nhà Lý (Thế kỷ 11)',
      faction: 'Triều đình Nhà Lý',
      role: 'Thái úy, Tổng chỉ huy quân đội Đại Việt',
      appearance: 'Dáng vóc thanh nhã, mắt sắc như kiếm hàn, phong thái đĩnh đạc và túc trí đa mưu.',
      personality: 'Điềm đạm, nhìn xa trông rộng, quyết đoán, hết lòng vì sự tồn vong và thịnh vượng của nước nhà.',
      backstory: 'Vốn họ Ngô, tên Tuấn, tự là Thường Kiệt, sau được ban quốc tính họ Lý. Phục vụ ba triều vua Lý Thái Tông, Lý Thánh Tông và Lý Nhân Tông. Ông chỉ huy cuộc kháng chiến chống quân Tống xâm lược lần thứ hai thành công vẻ vang, giữ vững độc lập cho Đại Việt.',
      abilities: [
        'Chiến lược quân sự tiên phát chế nhân',
        'Xây dựng phòng tuyến thủy bộ kiên cố',
        'Tác chiến tâm lý và động viên tinh thần quân sĩ',
        'Tổ chức hành chính và trị an biên cương'
      ],
      stats: {
        leadership: 98,
        intelligence: 98,
        strength: 86,
        agility: 88,
        charisma: 95,
        resolve: 97
      }
    },
    links: [
      {
        id: 'link-ltk-1',
        title: 'Wikipedia: Thái úy Lý Thường Kiệt',
        url: 'https://vi.wikipedia.org/wiki/L%C3%BD_Th%C6%B0%E1%BB%9Dng_Ki%E1%BB%87t',
        type: 'wiki',
        description: 'Tư liệu chi tiết về cuộc đời và đóng góp to lớn của danh tướng triều Lý.'
      },
      {
        id: 'link-ltk-2',
        title: 'Nam Quốc Sơn Hà - Bản Tuyên Ngôn Độc Lập Đầu Tiên',
        url: 'https://vi.wikipedia.org/wiki/Nam_qu%E1%BB%91c_s%C6%A1n_h%C3%A0',
        type: 'document',
        description: 'Văn bản thơ thần vang vọng sông Như Nguyệt khẳng định chủ quyền lãnh thổ thiêng liêng.'
      }
    ],
    tags: ['Thời Lý', 'Thái úy', 'Nam Quốc Sơn Hà', 'Sông Như Nguyệt', 'Danh tướng'],
    updatedAt: '2026-09-12'
  },
  {
    id: 'lac-long-quan',
    name: 'Lạc Long Quân (Sùng Lãm)',
    title: 'Thủy Tổ Bách Việt • Hùng Vương Chi Phụ',
    category: 'Thần thoại',
    avatarUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    status: 'mystic',
    quote: 'Ta là giống Rồng, nàng là giống Tiên, dẫu thương nhau tha thiết nhưng thủy hỏa tương khắc, khó bề ở cùng một nơi lâu dài. Hãy chia đàn con 50 theo mẹ lên núi, 50 theo cha xuống biển, hẹn khi hữu sự cùng giúp đỡ nhau!',
    bio: 'Thần nhân trong truyền thuyết khởi nguồn của dân tộc Việt Nam, con trai Kinh Dương Vương, kết duyên cùng Âu Cơ sinh ra bọc trăm trứng, khởi nguồn cho truyền thống "Con Rồng Cháu Tiên" và "Đồng Bào".',
    initialMessage: 'Ta là Thủy Thần Lạc Long Quân. Đất trời Lĩnh Nam thuở hồng hoang còn nhiều yêu quái quấy nhiễu nhân dân, ta đã trừ Ngư Tinh ở biển, Hồ Tinh ở đầm lầy, Mộc Tinh ở rừng rậm để dân chúng an cư. Ngươi đến đây có mang theo lòng tự hào của dòng dõi Lạc Hồng?',
    messageHistory: [
      {
        id: 'msg-llq-1',
        sender: 'character',
        senderName: 'Lạc Long Quân',
        text: 'Năm mươi người con theo mẹ lên núi mở mang nương rẫy, năm mươi người con theo cha xuống biển đắp đê ngăn sóng. Non sông này từ đây đời đời gắn kết.',
        timestamp: 'Thuở khai thiên lập địa',
        mood: 'Từ bi, Uy linh'
      },
      {
        id: 'msg-llq-2',
        sender: 'narrator',
        senderName: 'Truyền thuyết Lĩnh Nam Chích Quái',
        text: 'Người con cả được tôn lên làm vua, lấy hiệu là Hùng Vương, đặt quốc hiệu là Văn Lang, truyền nối mười tám đời vững bền bờ cõi.',
        timestamp: 'Khởi thủy Văn Lang',
        mood: 'Huyền thoại'
      }
    ],
    info: {
      gender: 'Nam',
      age: 'Thời viễn cổ (Thần thoại)',
      era: 'Thời kỳ Hồng Bàng',
      faction: 'Thủy Tộc / Họ Hồng Bàng',
      role: 'Thủy Thần, Thủ lĩnh khai quốc, Người cha của muôn dân',
      appearance: 'Vóc dáng hùng vĩ phi phàm, khí chất rồng thiêng biển cả, mắt rực ngọc bích, thần thái trác tuyệt.',
      personality: 'Uy nghiêm nhưng nhân từ, hết lòng che chở muôn dân khỏi hiểm họa thú dữ và yêu ma thuở hồng hoang.',
      backstory: 'Ngài kế vị cha là Kinh Dương Vương cai quản đất Xích Quỷ. Thấy dân chúng khổ sở vì các loài yêu quái, Ngài đã chu du khắp nơi trừ tam quái (Hồ Tinh ở hồ Tây, Ngư Tinh ở biển Đông, Mộc Tinh ở Phong Châu), dạy dân cày cấy dệt vải, để lại nền móng văn minh lúa nước cho đời sau.',
      abilities: [
        'Hô mưa gọi gió, điều khiển sóng biển thủy triều',
        'Thu phục và tiêu diệt yêu quái thời hồng hoang',
        'Dạy dân trồng trọt, đan lưới đánh cá và giữ tục xăm mình',
        'Phép thuật thần thông biến hóa khôn lường'
      ],
      stats: {
        leadership: 100,
        intelligence: 95,
        strength: 99,
        agility: 90,
        charisma: 99,
        resolve: 99
      }
    },
    links: [
      {
        id: 'link-llq-1',
        title: 'Wikipedia: Lạc Long Quân',
        url: 'https://vi.wikipedia.org/wiki/L%E1%BA%A1c_Long_Qu%C3%A2n',
        type: 'wiki',
        description: 'Tổng hợp tài liệu lịch sử, huyền tích và tín ngưỡng thờ cúng Lạc Long Quân.'
      },
      {
        id: 'link-llq-2',
        title: 'Đền Hùng & Đền Thờ Quốc Tổ Lạc Long Quân',
        url: 'https://khuditichdenhung.gov.vn',
        type: 'gallery',
        description: 'Khu di tích lịch sử quốc gia đặc biệt đền Hùng tại Phú Thọ.'
      }
    ],
    tags: ['Thần thoại', 'Con Rồng Cháu Tiên', 'Hồng Bàng', 'Thủy Tổ', 'Văn Lang'],
    updatedAt: '2026-09-12'
  },
  {
    id: 'elena-cyber',
    name: 'Aria Takahashi (Cipher-09)',
    title: 'Hacker Thầm Lặng • Trưởng Nhóm Kháng Chiến Neo-Eden',
    category: 'Khoa học viễn tưởng',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1600&auto=format&fit=crop&q=80',
    status: 'active',
    quote: 'Dữ liệu không bao giờ nói dối, chỉ có những kẻ nắm giữ quyền lực mới cố tình xuyên tạc nó.',
    bio: 'Chuyên gia an ninh mạng độc lập hoạt động tại vùng đệm không gian số Neo-Eden. Cô sở hữu khả năng giải mã thần kinh học và lãnh đạo mạng lưới tự do bảo vệ quyền riêng tư của con người.',
    initialMessage: 'Kết nối lượng tử đã được thiết lập thành công. Tín hiệu này hoàn toàn bảo mật qua 12 lớp proxy. Tôi đang lắng nghe, hãy nói cho tôi biết bạn đang tìm kiếm bí mật nào trong kho lưu trữ dữ liệu tối cao?',
    messageHistory: [
      {
        id: 'msg-aria-1',
        sender: 'character',
        senderName: 'Aria Takahashi',
        text: 'Kết nối lượng tử đã được thiết lập thành công. Tín hiệu này hoàn toàn bảo mật qua 12 lớp proxy. Tôi đang lắng nghe, hãy nói cho tôi biết bạn đang tìm kiếm bí mật nào trong kho lưu trữ dữ liệu tối cao?',
        timestamp: '23:42:01 - Mạng lưới Neo-Eden',
        mood: 'Bí ẩn, Điềm tĩnh'
      },
      {
        id: 'msg-aria-2',
        sender: 'user',
        senderName: 'Người liên lạc',
        text: 'Chúng tôi cần giải mã tệp dữ liệu dự án Olympus trước khi tập đoàn kích hoạt tường lửa cấp 7.',
        timestamp: '23:42:40',
        mood: 'Hồi hộp'
      },
      {
        id: 'msg-aria-3',
        sender: 'character',
        senderName: 'Aria Takahashi',
        text: 'Đã nhận được gói mã. Khóa đa chiều đã bị tôi bẻ gãy trong 3.2 giây. Toàn bộ tài liệu mật đã sẵn sàng trong thư mục link đính kèm của tôi. Hãy tải xuống trước khi dấu vết bị xóa sạch.',
        timestamp: '23:43:15',
        mood: 'Tự tin, Quyết đoán'
      }
    ],
    info: {
      gender: 'Nữ',
      age: '24 tuổi',
      era: 'Kỷ nguyên mạng 2088',
      faction: 'Mạng lưới Kháng chiến Tự do CyberNet',
      role: 'Kiến trúc sư giải mã thần kinh, Tình báo kỹ thuật số',
      appearance: 'Tóc ngắn màu khói bạc, áo khoác phản quang công nghệ cao, đôi mắt mang kính áp tròng phân tích dữ liệu thực tế tăng cường (AR).',
      personality: 'Nhạy bén, sắc sảo, lạnh lùng nhưng rất trung thành và chính trực với đồng đội.',
      backstory: 'Từng là thần đồng lập trình viên tại Học viện Lượng Tử, cô phát hiện âm mưu thao túng tâm trí người dân qua sóng viễn thông của hội đồng thành phố và quyết định rời bỏ để chiến đấu vì tự do nhận thức.',
      abilities: [
        'Giải mã thuật toán đa tầng siêu tốc',
        'Vô hiệu hóa thiết bị bay tự hành qua sóng vô tuyến',
        'Xâm nhập hệ thống thực tế ảo không để lại log dữ liệu',
        'Kỹ năng sinh tồn đô thị tương lai'
      ],
      stats: {
        leadership: 85,
        intelligence: 99,
        strength: 72,
        agility: 94,
        charisma: 88,
        resolve: 95
      }
    },
    links: [
      {
        id: 'link-aria-1',
        title: 'Cổng thông tin Kháng chiến Neo-Eden (Encrypted)',
        url: 'https://github.com',
        type: 'document',
        description: 'Mã nguồn mở và giao thức liên lạc bí mật dành cho các điệp viên mạng.'
      },
      {
        id: 'link-aria-2',
        title: 'Bản nhạc Synthwave Không Gian Số (Soundtrack)',
        url: 'https://soundcloud.com',
        type: 'audio',
        description: 'Những giai điệu cyberpunk và lo-fi nền tảng khi tác chiến trên không gian số.'
      },
      {
        id: 'link-aria-3',
        title: 'Phòng lưu trữ hình ảnh nghệ thuật số',
        url: 'https://artstation.com',
        type: 'gallery',
        description: 'Bộ sưu tập concept art và vũ khí công nghệ cao của Aria.'
      }
    ],
    tags: ['Cyberpunk', 'Hacker', 'Khoa học viễn tưởng', 'Trí tuệ nhân tạo', 'Tự do'],
    updatedAt: '2026-09-12'
  }
];
