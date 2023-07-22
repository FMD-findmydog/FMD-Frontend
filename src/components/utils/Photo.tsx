import Image from "next/image";
import React, { useState } from "react";

const Photo = () => {
  //이거는 나중에 인터페이스로 만들예정!
  const [uploadImages, setUploadImages] = useState<{
    imageFiles: File[];
    imageUrls: string[];
  }>({
    imageFiles: [],
    imageUrls: [],
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    else if (e.target.files.length > 4) {
      alert("사진을 너무 넣지 마세요!");
      return;
    }
    const files = e.target.files;
    const fileArray = Array.from(files);

    const newImages = Array.from(files, (file) => URL.createObjectURL(file));
    setUploadImages({
      imageFiles: [...uploadImages.imageFiles, ...fileArray],
      imageUrls: [...uploadImages.imageUrls, ...newImages],
    });
  };
  const handleDeleteImage = (id: number) => {
    setUploadImages({
      imageFiles: uploadImages.imageFiles.filter((_, index) => index !== id),
      imageUrls: uploadImages.imageUrls.filter((_, index) => index !== id),
    });
  };
  return (
    <div>
      <div>
        {uploadImages.imageUrls.length === 0 ? (
          <div>대표이미지삽입</div>
        ) : (
          <Image
            src={uploadImages.imageUrls[0]}
            alt="대표이미지"
            className=" w-40 h-40"
          />
        )}
      </div>
      <input
        type="file"
        id="inputFile"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <div className="flex">
        {uploadImages.imageUrls.map((url, idx) => (
          <>
            <div key={idx}>
              <Image src={url} className="w-20 h-20" alt={`${url} - ${idx}`} />
            </div>
            <button>삭제하기</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Photo;
