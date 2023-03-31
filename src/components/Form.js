import React from 'react';

const Form = () => (
  <div>
    <form>
      <input type="text" name="title" id="title" placeholder="Add Book Title" />
      <select name="author" id="author">
        <option value="makiavely">Makiavely</option>
        <option value="lincoln">Lincoln</option>
        <option value="jc rouso">JC Rouso</option>
        <option value="jane-dark">Jane Dark</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
