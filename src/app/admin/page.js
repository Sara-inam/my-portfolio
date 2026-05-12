"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.push("/admin/login");
    } else {
      fetchContacts(token, page);
    }
  }, [page]);

  const fetchContacts = async (token, pageNumber) => {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/contact?page=${pageNumber}&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setContacts(data.data);
        setPagination(data.pagination);
      } else {
        router.push("/admin/login");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  const handleLogout = () => {
  localStorage.removeItem("adminToken");
  router.push("/admin/login");
};

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10">
      <div className="flex justify-between items-center mb-2">
  <h1 className="text-3xl font-bold">Admin Dashboard</h1>

  <button
    onClick={handleLogout}
    className="px-4 py-2 bg-red-500/20 border border-red-400/30 text-red-300 rounded-lg hover:bg-red-500/30 transition"
  >
    Logout 
  </button>
</div>
      <p className="text-gray-400 mb-8">Contact Messages</p>

      {/* Loading */}
      {loading && (
        <p className="text-gray-400">Loading messages...</p>
      )}

      {/* No Data */}
      {!loading && contacts.length === 0 && (
        <p className="text-gray-500">No messages yet 📭</p>
      )}

      {/* Messages List */}
      <div className="grid gap-6">
        {contacts.map((item) => (
          <div
            key={item._id}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-purple-500/10 hover:border-purple-400/40 transition-all duration-300"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
              
              {/* Name */}
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                👤 {item.name}
              </h2>

              {/* Date */}
              <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>

            {/* Email */}
            <p className="text-sm text-purple-300 mb-3 flex items-center gap-2">
              📧 {item.email}
            </p>

            {/* Message */}
            <div className="bg-black/30 border border-white/10 rounded-xl p-4">
              <p className="text-gray-200 text-sm leading-relaxed">
                💬 {item.message}
              </p>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!loading && pagination.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          
          {/* Prev */}
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-white/10 rounded-lg disabled:opacity-40 hover:bg-white/20 transition"
          >
            Prev
          </button>

          {/* Info */}
          <span className="text-gray-400 text-sm">
            Page {pagination.page} of {pagination.totalPages}
          </span>

          {/* Next */}
          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-white/10 rounded-lg disabled:opacity-40 hover:bg-white/20 transition"
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
}