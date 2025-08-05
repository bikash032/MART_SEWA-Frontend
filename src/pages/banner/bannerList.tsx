import { Breadcrumb } from "antd"
const BannerList=()=>{
    return(<>
    
    <main className="flex-1 bg-white overflow-auto p-4 sm:p-6">
          <Breadcrumb className="bg-teal-50 px-4 py-2 rounded shadow" items={[{ title: 'Admin' }, { title: 'Banner' }]} />

          <section className="mt-4">
            <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                <h2 className="text-xl font-semibold text-cyan-800">All Banners</h2>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition duration-200">
                  + Add New Banner
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-cyan-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[1, 2, 3].map((id) => (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img
                            src="https://via.placeholder.com/100x60"
                            alt="Banner"
                            className="w-28 h-16 rounded object-cover"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">Summer Sale {id}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Up to 50% off on all summer items.</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 transition">Edit</button>
                          <button className="text-red-600 hover:text-red-800 transition">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
    </>)
}

export default BannerList