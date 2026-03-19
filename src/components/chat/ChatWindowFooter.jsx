import React, { useRef, useState } from "react";
import { assets } from "../../assets/assets";

const ChatWindowFooter = () => {
  const MAX_FILES = 5;

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const openFilePicker = (inputRef) => {
    if (files.length >= MAX_FILES) {
      alert("You can only attach up to 5 files.");
      return;
    }

    inputRef.current.click();
  };

  const getFilePreview = (file) => {
    const type = file.type;

    if (type.startsWith("image/")) {
      return URL.createObjectURL(file);
    }

    if (type.includes("pdf")) {
      return assets.pdf_img;
    }

    if (type.includes("word") || type.includes("document")) {
      return assets.word_img;
    }

    if (type.includes("excel") || type.includes("spreadsheet")) {
      return assets.excel_img;
    }

    if (type.includes("powerpoint") || type.includes("presentation")) {
      return assets.ppt_img;
    }

    return assets.default_file_img;
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (files.length + selectedFiles.length > MAX_FILES) {
      alert(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    const mappedFiles = selectedFiles.map((file) => ({
      file,
      preview: getFilePreview(file),
    }));

    setFiles((prev) => [...prev, ...mappedFiles]);

    e.target.value = null;
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-white border-t border-slate-200">
      {files.length > 0 && (
        <div className="flex items-center gap-3 mb-3">
          {files.map((item, index) => (
            <div
              title={item.file.name}
              key={`file-preview-${index}`}
              className="relative w-14 h-14 rounded-lg overflow-hidden border border-slate-200 cursor-pointer"
            >
              <img className="w-full h-full object-cover" src={item.preview} />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-0.5 right-0.5 w-4 h-4 bg-slate-900/60 text-white rounded-full flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined scale-60">
                  close
                </span>
              </button>
            </div>
          ))}

          {files.length < MAX_FILES && (
            <button
              onClick={() => openFilePicker(fileInputRef)}
              className="w-14 h-14 border-2 border-dashed border-slate-200  rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          )}
        </div>
      )}

      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-1">
          <button
            title="Emojis"
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">mood</span>
          </button>
          <button
            title="Files"
            onClick={() => openFilePicker(fileInputRef)}
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer"
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="material-symbols-outlined">attach_file</span>
          </button>
          <button
            title="Images"
            onClick={() => openFilePicker(imageInputRef)}
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer"
          >
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="material-symbols-outlined">image</span>
          </button>
        </div>
        <div className="flex-1 relative">
          <textarea
            className="w-full bg-slate-100 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary outline-none resize-none placeholder:text-slate-500 text-slate-900"
            placeholder="Enter message..."
            rows="1"
          ></textarea>
        </div>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95 shrink-0 cursor-pointer">
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatWindowFooter;
