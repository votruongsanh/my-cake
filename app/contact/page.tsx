import { Metadata } from 'next';

// Tối ưu SEO cho trang Liên hệ
export const metadata: Metadata = {
  title: 'Liên Hệ | My Cake - Đặt Bánh và Góp Ý',
  description: 'Liên hệ với My Cake để đặt bánh sinh nhật, bánh sự kiện hoặc gửi góp ý cho chúng tôi. Chúng tôi luôn sẵn lòng lắng nghe bạn.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Liên Hệ Với Chúng Tôi</h1>
      <div className="max-w-lg mx-auto">
        <p className="text-center text-lg text-gray-700 mb-8">
          Chúng tôi rất mong nhận được phản hồi từ bạn. Vui lòng điền vào biểu mẫu bên dưới hoặc liên hệ trực tiếp qua thông tin được cung cấp.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nội dung</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Gửi Tin Nhắn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
