import React from 'react';
import useProductsStore from '../stores/products';
import { useNavigate } from 'react-router-dom';

const NewProductForm = () => {
  const { name, price, image, setName, setPrice, setImage, setProducts } =
    useProductsStore();
  const imageRef = React.useRef();
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const uploadImage = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    setProducts({
      name: name,
      price: price,
      image: image,
    });
    navigate('/');
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmitProduct}>
      <div>
        <label htmlFor='name'>상품명</label>
        <input id='name' type='text' onChange={handleChangeName} />
      </div>
      <div>
        <label htmlFor='price'>상품 가격</label>
        <input id='price' type='text' onChange={handleChangePrice} />
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
