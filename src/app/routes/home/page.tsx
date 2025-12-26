import logo from '@/assets/logo.png'
import { Head } from '@/components/seo'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ListTodo, Clock } from 'lucide-react'
import { colors } from '@/config/colors'

const Home = () => {
  return (
    <>
      <Head description="Task management made simple and beautiful" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <img src={logo} alt="Logo" className="h-32 w-auto" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Todo Management
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
              Quản lý công việc hàng ngày của bạn một cách đơn giản và hiệu quả
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ListTodo className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dễ sử dụng</h3>
                <p className="text-sm text-gray-600">
                  Giao diện đơn giản, trực quan
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Theo dõi tiến độ
                </h3>
                <p className="text-sm text-gray-600">
                  Quản lý công việc hiệu quả
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tiết kiệm thời gian
                </h3>
                <p className="text-sm text-gray-600">
                  Tổ chức công việc gọn gàng
                </p>
              </div>
            </div>

            <div>
              <Button
                onClick={() => (window.location.href = '/todos')}
                className="rounded-lg px-8 py-6 text-lg font-medium text-white shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: colors.brand.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    colors.brand.primaryHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.brand.primary)
                }
              >
                Bắt đầu ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
