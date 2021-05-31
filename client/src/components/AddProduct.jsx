import { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

export const AddProduct = (props) => {
  const [inputs, setInputs] = useState({
    contId: '',
    type: '+',
    prodName: '',
    prodQ: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { ...inputs };
    axios.post('http://localhost:4000/add', data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    console.log(inputs);
  };

  return (
    <div className='AddProduct'>
      <form action='/' onSubmit={submitHandler}>
        <fieldset>
          <legend>Add Product</legend>
          <div className='AddProduct__row-1'>
            <input
              type='text'
              name='containerId'
              className='AddProduct__field-1'
              placeholder='Container ID'
              onChange={(e) => setInputs({ ...inputs, contId: e.target.value })}
              required
            />
            <button
              type='button'
              onClick={() => {
                let q = inputs.prodQ;
                let t = inputs.type;
                setInputs({
                  ...inputs,
                  prodQ: -q,
                  type: t === '+' ? '-' : '+',
                });
              }}
              className='AddProduct__toggle AddProduct__field-2'
            >
              {inputs.type}
            </button>
          </div>
          <div className='AddProduct__row-2'>
            <input
              type='text'
              className='AddProduct__field-3'
              name='productName'
              placeholder='Product Name'
              onChange={(e) =>
                setInputs({ ...inputs, prodName: e.target.value })
              }
              required
            />
            <input
              type='number'
              className='AddProduct__field-4'
              name='productQuantity'
              placeholder='Quantity'
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  prodQ:
                    inputs.type === '+'
                      ? Number(e.target.value)
                      : -Number(e.target.value),
                })
              }
            />
          </div>
          <button className='AddProduct__btn' type='submit'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};
