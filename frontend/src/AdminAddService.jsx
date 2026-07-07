import { useState, useEffect } from "react";
import axios from "axios";
import { 
  PlusCircle, 
  Type, 
  Link2, 
  Image as ImageIcon, 
  Heading, 
  FileText, 
  Layers, 
  Images,
  Trash2
} from "lucide-react";

function AdminAddService() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "main-service",
    headline: "",
    description: "",
  });

  const [banerImg, setBanerImg] = useState(null);
  const [extraIMGs, setExtraIMGs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // 🌟 নতুন স্টেট: সব কার্ড বা সার্ভিস তালিকা জমা রাখার জন্য
  const [allServices, setAllServices] = useState([]);

  // ১. ডাটাবেসের সব সার্ভিস ফেচ করার ফাংশন
  const fetchServices = async () => {
    try {
      const res = await axios.get("https://car-parking-backend-o1oa.onrender.com/api/products");
      if (res.data.success) {
        setAllServices(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        const res = await axios.get("https://car-parking-backend-o1oa.onrender.com/api/products");
        if (isMounted && res.data.success) {
          setAllServices(res.data.data || []);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBannerChange = (e) => {
    setBanerImg(e.target.files[0]);
  };

  const handleExtraImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length !== 8) {
      alert("⚠️ Please select exactly 8 images for Extra Images!");
      e.target.value = null;
      setExtraIMGs([]);
      return;
    }
    setExtraIMGs(files);
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!banerImg || extraIMGs.length !== 8) {
      alert("Please upload 1 banner and exactly 8 extra images!");
      return;
    }
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("category", formData.category);
    data.append("headline", formData.headline);
    data.append("description", formData.description);
    data.append("banerImg", banerImg);
    extraIMGs.forEach((file) => data.append("extraIMGs", file));

    try {
      setLoading(true);
      const res = await axios.post(`https://car-parking-backend-o1oa.onrender.com/api/products/add?category=${formData.category}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("🎉 Product/Service published successfully!");
        setFormData({ title: "", slug: "", category: "main-service", headline: "", description: "" });
        setBanerImg(null);
        setExtraIMGs([]);
        e.target.reset();
        fetchServices(); // 🌟 নতুন আপলোড হওয়া কার্ডটি তালিকায় যোগ করতে রিলোড
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // 🗑️ কার্ড ও ফাইল ডিলিট হ্যান্ডলার
  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to permanently delete "${title}"?\nThis will clear its database entry and delete all 9 uploaded images from server.`)) {
      try {
        const res = await axios.delete(`https://car-parking-backend-o1oa.onrender.com/api/products/delete/${id}`);
        if (res.data.success) {
          alert("🗑️ Card and server assets deleted successfully!");
          fetchServices(); // তালিকা থেকে কার্ডটি সরিয়ে ফেলার জন্য রি-ফেচ
        }
      } catch (err) {
        console.error(err);
        alert("Failed to delete the card.");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* --- ফর্ম সেকশন --- */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-3xl mx-auto my-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex items-center gap-3">
          <PlusCircle className="w-6 h-6" />
          <div>
            <h3 className="font-bold text-lg">Add New Product / Service Layout</h3>
            <p className="text-xs text-blue-100">Exactly 8 extra images are strictly required.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Type className="w-4 h-4 text-blue-500" /> Card Title
            </label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Cantilever Car Parking Shade" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 transition" />
          </div>

          {/* Slug */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Link2 className="w-4 h-4 text-blue-500" /> URL Slug
            </label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} required placeholder="e.g. cantilever-parking-shade" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 transition" />
          </div>

          {/* Category */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Layers className="w-4 h-4 text-blue-500" /> Select Category
            </label>
            <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 transition bg-white">
              <option value="main-service">Our Main Services</option>
              <option value="shade-type">Car Parking Shade Types</option>
            </select>
          </div>

          {/* Headline */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Heading className="w-4 h-4 text-blue-500" /> Headline / Catchy Subtitle
            </label>
            <input type="text" name="headline" value={formData.headline} onChange={handleChange} required placeholder="Subtitle..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 transition" />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <FileText className="w-4 h-4 text-blue-500" /> Full Description
            </label>
            <textarea name="description" rows="3" value={formData.description} onChange={handleChange} required placeholder="Write features..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-slate-800 transition resize-none" />
          </div>

          {/* Files */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <ImageIcon className="w-4 h-4 text-blue-500" /> Banner Image
            </label>
            <input type="file" accept="image/*" onChange={handleBannerChange} required className="w-full text-sm border p-2 rounded-xl" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Images className="w-4 h-4 text-blue-500" /> Extra Gallery Images (8)
            </label>
            <input type="file" accept="image/*" multiple onChange={handleExtraImagesChange} required className="w-full text-sm border p-2 rounded-xl" />
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" disabled={loading} className={`w-full text-white py-3.5 rounded-xl font-semibold text-sm transition-all ${loading ? 'bg-slate-400' : 'bg-slate-900 hover:bg-slate-800'}`}>
              {loading ? "Publishing Layout..." : "Publish Layout To Database"}
            </button>
          </div>
        </form>
      </div>

      {/* --- 🌟 নতুন যুক্ত করা সেকশন: লাইভ ডেটা ম্যানেজমেন্ট টেবিল/লিস্ট --- */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden my-12 p-8">
        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          <Layers className="w-5 h-5 text-indigo-600" />
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Manage Active Cards / Layouts</h3>
            <p className="text-xs text-slate-400">Review live items and delete entries with their server assets instantly.</p>
          </div>
        </div>

        {allServices.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">No active services or products found in database.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase font-bold text-xs tracking-wider border-b border-slate-100">
                  <th className="p-4 rounded-l-xl">Preview</th>
                  <th className="p-4">Title / Category</th>
                  <th className="p-4">Slug</th>
                  <th className="p-4">Gallery Assets</th>
                  <th className="p-4 text-center rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {allServices.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                    {/* Image Thumbnail */}
                    <td className="p-4">
                      <img 
                        src={`https://car-parking-backend-o1oa.onrender.com${item.banerImg}`} 
                        alt={item.title} 
                        className="w-12 h-12 object-cover rounded-xl border border-slate-100 shadow-sm"
                        onError={(e) => { e.target.src = "https://placehold.co/100x100?text=No+Img"; }}
                      />
                    </td>
                    {/* Title & Category Badge */}
                    <td className="p-4">
                      <div className="font-bold text-slate-800">{item.title}</div>
                      <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1 uppercase ${item.category === 'main-service' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                        {item.category === 'main-service' ? 'Main Service' : 'Shade Type'}
                      </span>
                    </td>
                    {/* Slug */}
                    <td className="p-4 text-slate-500 font-mono text-xs">{item.slug}</td>
                    {/* Extra Images Info */}
                    <td className="p-4 text-slate-600 font-medium">
                      {item.extraIMGs ? `${item.extraIMGs.length} Photos` : "0 Photos"}
                    </td>
                    {/* Delete Button */}
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(item._id, item.title)}
                        className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition transform hover:scale-105"
                        title="Delete Card and Assets"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminAddService;