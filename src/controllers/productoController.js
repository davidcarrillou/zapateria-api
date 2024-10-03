const { Producto, Marca, Categoria, Modelo, Color, Talla } = require('../models');

exports.create = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [
        { model: Marca, as: 'Marca', attributes: ['nombre', 'id_marca'] },
        { model: Categoria, as: 'Categoria', attributes: ['nombre', 'id_categoria'] },
        { model: Modelo, as: 'Modelo', attributes: ['nombre', 'id_modelos'] },
        { model: Color, as: 'Color', attributes: ['nombre', 'id_color'] },
        { model: Talla, as: 'Talla', attributes: ['id_talla', 'talla_mx', 'talla_us', 'talla_eur'] },
      ],
      attributes: [
        'id_producto',
        'nombre',
        'precio_venta',
        'precio_compra',
        'stock',
        'fecha_registro'
      ]
    });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const producto = await Producto.findOne({
      where: { id_producto: req.params.id },
      include: [
        { model: Marca, as: 'Marca', attributes: ['nombre', 'id_marca'] },
        { model: Categoria, as: 'Categoria', attributes: ['nombre', 'id_categoria'] },
        { model: Modelo, as: 'Modelo', attributes: ['nombre', 'id_modelos'] },
        { model: Color, as: 'Color', attributes: ['nombre', 'id_color'] },
        { model: Talla, as: 'Talla', attributes: ['id_talla', 'talla_mx', 'talla_us', 'talla_eur'] },
      ],
      attributes: [
        'id_producto',
        'nombre', // Nombre del producto
        'precio_venta',
        'precio_compra',
        'stock',
        'fecha_registro'
      ]
    });

    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.update(req.body);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

exports.delete = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
