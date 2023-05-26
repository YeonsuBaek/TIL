import React from 'react';

const NewProductForm = () => {
  const [image, setImage] = React.useState('');
  const imageRef = React.useRef();

  const uploadImage = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <form>
      <div>
        <label htmlFor='name'>상품명</label>
        <input id='name' type='text' />
      </div>
      <div>
        <label htmlFor='price'>상품 가격</label>
        <input id='price' type='text' />
      </div>
      <div>
        <label htmlFor='image'>상품 대표 이미지</label>
        <input
          id='image'
          type='file'
          accept='image/*'
          onChange={uploadImage}
          ref={imageRef}
        />
        <img src={image} alt='' />
      </div>
      <button type='submit'>상품 등록하기</button>
    </form>
  );
};

export default NewProductForm;
