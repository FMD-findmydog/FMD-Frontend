import Image from "next/image";
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";

const Photo = () => {
  const [index, setIndex] = useState<number>(0);
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
  const onClick = (id: number) => {
    setIndex(id);
  };
  return (
    <div>
      <MainImageWrapper>
        {uploadImages.imageUrls.length === 0 ? (
          <div>대표이미지삽입</div>
        ) : (
          <MainImg>
            <div key={0}>
              <Image
                src={uploadImages.imageUrls[index]}
                fill
                style={{ objectFit: "cover" }}
                alt="대표이미지"
              />
            </div>
          </MainImg>
        )}
      </MainImageWrapper>
      <input
        type="file"
        id="inputFile"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <ImageDivWrapper>
        {uploadImages.imageUrls.map((url, idx) => (
          <>
            <ImageWrapper>
              <MainImg>
                <div key={idx}>
                  <Image
                    src={url}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`${url} - ${idx}`}
                    onClick={() => {
                      onClick(idx);
                    }}
                  />
                </div>
              </MainImg>
            </ImageWrapper>
            <button
              onClick={() => {
                handleDeleteImage(idx);
              }}
            >
              삭제하기
            </button>
          </>
        ))}
      </ImageDivWrapper>
    </div>
  );
};

export default Photo;

const MainImageWrapper = styled.div(() => [
  tw`my-3`,
  css`
    position: relative;
    height: 40%;
  `,
]);

const MainImg = styled.div(() => [
  tw`w-full h-full`,
  css`
    box-sizing: content-box;
    position: relative;
  `,
]);

const ImageDivWrapper = styled.div(() => [
  tw`flex items-center`,
  css`
    height: 30%;
    position: relative;
  `,
]);

const ImageWrapper = styled.div(() => [
  css`
    width: 25%;
    height: 80%;
    box-sizing: content-box;
    position: relative;
  `,
]);
