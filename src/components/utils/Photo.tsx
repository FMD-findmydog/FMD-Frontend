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
    else if (uploadImages.imageUrls.length > 3) {
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
    console.log(uploadImages.imageUrls);
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
          <div key={0}>
            <Image
              src={uploadImages.imageUrls[0]}
              height={160}
              width={160}
              alt="대표이미지"
            />
          </div>
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
              <Image src={url} width={80} height={80} alt={`${url} - ${idx}`} />
            </div>
            <button
              onClick={() => {
                handleDeleteImage(idx);
              }}
            >
              삭제하기
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Photo;
