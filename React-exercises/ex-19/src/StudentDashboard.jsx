import { Bell, BookOpen, Clock, FileText, BarChart2 } from 'lucide-react';
 function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
            <p className="text-gray-500 text-sm mt-1">Here's what's happening with your courses today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative cursor-pointer">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              S
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Average Grade */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Average Grade</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">88%</h3>
            </div>
          </div>

          {/* Courses */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Courses</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">3</h3>
            </div>
          </div>

          {/* Study Hours */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Study Hours</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">45h</h3>
            </div>
          </div>

          {/* Assignments */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Assignments</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">12</h3>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Course Progress Section (Takes 2 columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Course Progress</h2>
            
            <div className="space-y-4">
              {/* React Fundamentals */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm">React Fundamentals</span>
                  <span className="text-xs text-gray-500 font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-gray-700 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Next: Components & Props</span>
                  <span>Sarah Wilson</span>
                </div>
              </div>

              {/* JavaScript Advanced */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm">JavaScript Advanced</span>
                  <span className="text-xs text-gray-500 font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-gray-700 h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Next: Async/Await</span>
                  <span>Mike Johnson</span>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm">UI/UX Design</span>
                  <span className="text-xs text-gray-500 font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-gray-700 h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Next: Color Theory</span>
                  <span>Emily Chen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Upcoming Assignments & Announcements) */}
          <div className="space-y-6">
            
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
              
              <div className="space-y-4">
                <div className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-800">Build a Todo App</span>
                    <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">pending</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">React Fundamentals</p>
                  <p className="text-[11px] text-gray-400 mt-1">Due 2024-03-20</p>
                </div>

                <div className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-800">API Integration</span>
                    <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">completed</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">JavaScript Advanced</p>
                  <p className="text-[11px] text-gray-400 mt-1">Due 2024-03-18</p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-800">Design System</span>
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">in-progress</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">UI/UX Design</p>
                  <p className="text-[11px] text-gray-400 mt-1">Due 2024-03-25</p>
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Announcements</h2>
              
              <div className="space-y-4">
                <div className="pl-3 border-l-2 border-blue-600">
                  <h4 className="text-xs font-bold text-gray-800">New Course Available</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Check out our new TypeScript course!</p>
                  <span className="text-[10px] text-gray-400 mt-1 block">2 hours ago</span>
                </div>

                <div className="pl-3 border-l-2 border-blue-600">
                  <h4 className="text-xs font-bold text-gray-800">Maintenance Notice</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Platform updates scheduled for tonight</p>
                  <span className="text-[10px] text-gray-400 mt-1 block">5 hours ago</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default StudentDashboard