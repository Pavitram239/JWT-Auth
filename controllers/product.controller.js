export const getAllProducts = async (req, res) => {
  res.json({ msg: 'get all products' });
};

export const getProduct = async (req, res) => {
  res.json({ msg: 'get a product' });
};

export const addProduct = async (req, res) => {
  res.json({ msg: 'add a product' });
};

export const updateProduct = async (req, res) => {
  res.json({ msg: 'update a product' });
};

export const deleteProduct = async (req, res) => {
  res.json({ msg: 'delete a product' });
};
