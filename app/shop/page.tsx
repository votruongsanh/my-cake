import { Metadata } from 'next';

// Tối ưu SEO cho trang Cửa hàng
export const metadata: Metadata = {
  title: 'Cửa Hàng | My Cake - Khám Phá Thế Giới Bánh Ngọt',
  description: 'Khám phá và đặt mua các loại bánh ngọt, bánh kem, bánh sinh nhật và nhiều hơn nữa từ cửa hàng online của My Cake. Chất lượng tuyệt hảo, giao hàng tận nơi.',
  alternates: {
    canonical: '/shop',
  },
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Cửa Hàng Của Chúng Tôi</h1>
      <p className="text-center text-lg text-gray-700">
        Khu vực trưng bày sản phẩm đang được chuẩn bị và sẽ sớm ra mắt. Cảm ơn bạn đã ghé thăm!
      </p>
      {/* Placeholder for product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Example Product Item */}
        <div className="border rounded-lg p-4 text-center">
          <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
          <h2 className="text-xl font-semibold">Bánh Mẫu</h2>
          <p>Mô tả ngắn về bánh</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
          <h2 className="text-xl font-semibold">Bánh Mẫu</h2>
          <p>Mô tả ngắn về bánh</p>
        </div>
        <div className="border rounded-lg p-4 text-center">
          <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
          <h2 className="text-xl font-semibold">Bánh Mẫu</h2>
          <p>Mô tả ngắn về bánh</p>
        </div>
      </div>
    </div>
  );
}
