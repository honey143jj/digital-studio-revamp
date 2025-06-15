
import Layout from "@/components/Layout";

const DownloadFiles = () => {
  const staticFiles = [
    // Main Pages
    { name: "index.html", category: "Main Pages", color: "text-blue-400" },
    { name: "gallery.html", category: "Main Pages", color: "text-blue-400" },
    { name: "contact.html", category: "Main Pages", color: "text-blue-400" },
    
    // Service Pages
    { name: "photo-studio.html", category: "Service Pages", color: "text-purple-400" },
    { name: "photo-studio-rental.html", category: "Service Pages", color: "text-purple-400" },
    { name: "video-production.html", category: "Service Pages", color: "text-purple-400" },
    { name: "graphics-branding.html", category: "Service Pages", color: "text-purple-400" },
    { name: "web-development.html", category: "Service Pages", color: "text-purple-400" },
    { name: "digital-marketing.html", category: "Service Pages", color: "text-purple-400" },
    { name: "social-media.html", category: "Service Pages", color: "text-purple-400" },
    { name: "seo-services.html", category: "Service Pages", color: "text-purple-400" },
    
    // Policy Pages
    { name: "privacy-policy.html", category: "Policy Pages", color: "text-orange-400" },
    { name: "terms-conditions.html", category: "Policy Pages", color: "text-orange-400" },
    { name: "booking-cancellation-policy.html", category: "Policy Pages", color: "text-orange-400" },
    
    // Assets
    { name: "style.css", path: "assets/css/style.css", category: "Assets", color: "text-red-400" },
    { name: "main.js", path: "assets/js/main.js", category: "Assets", color: "text-red-400" },
  ];

  const groupedFiles = staticFiles.reduce((acc, file) => {
    if (!acc[file.category]) {
      acc[file.category] = [];
    }
    acc[file.category].push(file);
    return acc;
  }, {} as Record<string, typeof staticFiles>);

  const downloadFile = (filename: string, path?: string) => {
    const fileUrl = `/static/${path || filename}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">KGMI Static Website Files</h1>
          <p className="text-xl text-gray-400 mb-8">
            Click on any file below to download it directly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(groupedFiles).map(([category, files]) => {
              const categoryColor = files[0]?.color || "text-gray-400";
              return (
                <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h2 className={`text-xl font-semibold mb-4 ${categoryColor}`}>{category}</h2>
                  <ul className="space-y-3">
                    {files.map((file) => (
                      <li key={file.name}>
                        <button
                          onClick={() => downloadFile(file.name, file.path)}
                          className="text-green-400 hover:text-green-300 hover:underline transition-colors text-left"
                        >
                          {file.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-white mb-3">Instructions for cPanel:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Download all files above by clicking on them</li>
              <li>Create an "assets" folder in your cPanel public_html</li>
              <li>Create "css" and "js" folders inside the assets folder</li>
              <li>Upload all HTML files to public_html root</li>
              <li>Upload style.css to assets/css/</li>
              <li>Upload main.js to assets/js/</li>
            </ol>
          </div>

          <div className="mt-6 bg-yellow-900/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Alternative Download Method:</h3>
            <p className="text-gray-300 mb-3">
              If the direct downloads don't work, you can also get all files from GitHub:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Connect your project to GitHub (button in top-right)</li>
              <li>Go to your GitHub repository</li>
              <li>Navigate to the "static" folder</li>
              <li>Download individual files or the entire repository as ZIP</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadFiles;
