import { Metadata } from 'next';

// Tối ưu SEO cho trang Giới thiệu
export const metadata: Metadata = {
  title: 'Về Chúng Tôi | My Cake - Câu Chuyện và Đội Ngũ',
  description: 'Tìm hiểu về câu chuyện đằng sau My Cake, niềm đam mê làm bánh và đội ngũ đã tạo nên những chiếc bánh ngọt ngào, tinh tế cho bạn.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Về Chúng Tôi</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          Chào mừng bạn đến với My Cake! Chúng tôi bắt đầu hành trình với một niềm đam mê cháy bỏng: tạo ra những chiếc bánh không chỉ ngon miệng mà còn là những tác phẩm nghệ thuật thực sự. Mỗi chiếc bánh tại My Cake đều được làm thủ công từ những nguyên liệu tươi ngon, được lựa chọn kỹ càng nhất.
        </p>
        <p className="mb-4">
          Công thức của chúng tôi là sự kết hợp giữa bí quyết gia truyền và những kỹ thuật làm bánh hiện đại, tạo nên hương vị độc đáo không thể tìm thấy ở nơi nào khác.
        </p>
        <p>
          Chúng tôi tin rằng mỗi chiếc bánh không chỉ là một món tráng miệng, mà còn là cầu nối cho những khoảnh khắc hạnh phúc, những kỷ niệm đáng nhớ và những lời yêu thương. Hãy để My Cake mang đến sự ngọt ngào và tinh tế cho cuộc sống của bạn.
        </p>
      </div>
    </div>
  );
}
