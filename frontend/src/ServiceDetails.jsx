import { useParams } from "react-router-dom";
import ServicesGrid from "./ServicesGrid";  

export default function ServiceDetails() {
  // useParams() দিয়ে ইউআরএল এর /services/:id থেকে আইডি-টা ক্যাচ করা হয়
  const { id } = useParams(); 

  // উদাহরণের জন্য একটি লোকাল অবজেক্ট (ভবিষ্যতে আপনি এটি Node.js API থেকে fetch করবেন)
  const serviceData = {
    "car-parking-shade": {
      title: "Car Parking Shade Solutions",
      description: "We provide high-quality residential and commercial car parking shades across UAE. Built to block 95% of UV rays.",
      features: ["Premium Fabrics", "10 Years Warranty", "Wind Resistant"]
    },
    "pargola-shade": {
      title: "Elegant Pargola Shade Design",
      description: "Transform your outdoor garden area with modern wooden and metal pergola setups tailored to your lifestyle.",
      features: ["Waterproof Materials", "Custom Layouts", "LED Light Integration"]
    }
    // এভাবে বাকি সার্ভিসগুলোর ডেটাও এখানে বা ডাটাবেজে থাকবে...
  };

  // ইউআরএল অনুযায়ী ডেটা খুঁজে বের করা
  const currentService = serviceData[id] || {
    title: "Service Not Found",
    description: "The service you are looking for does not exist.",
    features: []
  };

  return (
    <section>
        <div className="max-w-4xl mx-auto py-16 px-4">
      {/* ইউআরএল এর নাম অনুসারে এই টাইটেল আর কনটেন্ট সম্পূর্ণ বদলে যাবে */}
      <h1 className="text-4xl font-extrabold text-[#003366] mb-4">{currentService.title}</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentService.description}</p>
      
      {currentService.features.length > 0 && (
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <h3 className="font-bold text-amber-800 mb-2">Key Advantages:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {currentService.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}
    </div>
    <ServicesGrid hideTitle={true} /> {/* সার্ভিস ডিটেইলস পেজে সার্ভিস গ্রিডও দেখানো হবে */}
    </section>
  );
}