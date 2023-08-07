import { photoAtom } from "@/store/atoms";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

const Photo = ({ MAX_IMAGE_NUM }: { MAX_IMAGE_NUM: number }) => {
  const [index, setIndex] = useState<number>(0);
  //이거는 나중에 인터페이스로 만들예정!
  const [uploadImages, setUploadImages] = useState<{
    imageFiles: File[];
    imageUrls: string[];
  }>({
    imageFiles: [],
    imageUrls: [],
  });
  const [photoProp, setPhotoProp] = useRecoilState(photoAtom);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    else if (uploadImages.imageUrls.length > MAX_IMAGE_NUM) {
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
    setPhotoProp(uploadImages.imageUrls);
    console.log(photoProp);
  };
  const handleDeleteImage = (id: number) => {
    setUploadImages({
      imageFiles: uploadImages.imageFiles.filter((_, index) => index !== id),
      imageUrls: uploadImages.imageUrls.filter((_, index) => index !== id),
    });
    setPhotoProp(uploadImages.imageUrls);
  };
  const onClick = (id: number) => {
    setIndex(id);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {uploadImages.imageUrls.length === 0 ? (
        <MainImg className="blank">대표이미지삽입</MainImg>
      ) : (
        <MainImg className="main">
          <div key={0}>
            <Image
              src={uploadImages.imageUrls[index]}
              fill
              style={{ objectFit: "contain" }}
              alt="대표이미지"
            />
          </div>
        </MainImg>
      )}
      <button onClick={handleButtonClick}>
        이미지파일 선택
        <input
          type="file"
          id="inputFile"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </button>
      <ImageDivWrapper>
        {uploadImages.imageUrls.map((url, idx) => (
          <>
            <ImageWrapper>
              <button
                onClick={() => {
                  handleDeleteImage(idx);
                }}
              >
                삭제하기
              </button>
              <MainImg className={index === idx ? "selected" : ""}>
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
          </>
        ))}
      </ImageDivWrapper>
    </>
  );
};

export default Photo;

//참고용
// const ImgSelecter = styled.div([
//   css`
//     background-color: aliceblue;
//     width: 40vw;
//     height: 40vh;

//     @media screen and (max-width: 820px) {
//       width: 80vw;
//     }
//   `,
// ]);

const MainImg = styled.div(() => [
  tw`w-full h-2/3`,
  css`
    box-sizing: content-box;
    position: relative;
    &.main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.selected {
      border: 1.5px solid #0276e3;
    }
    &.blank {
      background-color: rgba(151, 151, 151, 0.8);
    }
  `,
]);

const ImageDivWrapper = styled.div(() => [
  tw`flex items-center`,
  css`
    height: 35%;
    position: relative;
  `,
]);

const ImageWrapper = styled.div(() => [
  css`
    width: 25%;
    height: 80%;
    box-sizing: content-box;
    position: relative;
    display: flex;
    flex-direction: column;
  `,
]);

const PhotoButton = styled.button(() => []);
