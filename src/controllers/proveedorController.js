
const { Producto, Proveedor, Marca, Categoria, Modelo, Color, Talla } = require('../models');

exports.create = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proveedor' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll({
      include: [
        {
          model: Producto,
          as: 'Producto',
          attributes: [
            'id_producto',
            'nombre',
            'precio_venta',
            'precio_compra',
            'stock',
            'fecha_registro'
          ],
          include: [
            { model: Marca, as: 'Marca', attributes: ['nombre','id_marca'] },
            { model: Categoria, as: 'Categoria', attributes: ['nombre','id_categoria'] },
            { model: Modelo, as: 'Modelo', attributes: ['nombre','id_modelos'] },
            { model: Color, as: 'Color', attributes: ['nombre','id_color'] },
            { model: Talla, as: 'Talla', attributes: ['id_talla','talla_mx', 'talla_us', 'talla_eur'] },
          ]
        }
      ],
      attributes: [
        'id_proveedores',
        'nombre',
        'codigo',
        'direccion',
        'giro',
        'telefono',
        'id_producto',
        'gmail',
        'fecha_registro'
      ]
    });
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

exports.getById = async (req, res) => {
  try {
    const proveedores = await Proveedor.findOne({
      where: { id_proveedores: req.params.id },
      include: [
        {
          model: Producto,
          as: 'Producto',
          attributes: [
            'id_producto',
            'nombre',
            'precio_venta',
            'precio_compra',
            'stock',
            'fecha_registro'
          ],
          include: [
            { model: Marca, as: 'Marca', attributes: ['nombre','id_marca'] },
            { model: Categoria, as: 'Categoria', attributes: ['nombre','id_categoria'] },
            { model: Modelo, as: 'Modelo', attributes: ['nombre','id_modelos'] },
            { model: Color, as: 'Color', attributes: ['nombre','id_color'] },
            { model: Talla, as: 'Talla', attributes: ['id_talla','talla_mx', 'talla_us', 'talla_eur'] },
          ]
        }
      ],
      attributes: [
        'id_proveedores',
        'nombre',
        'codigo',
        'direccion',
        'giro',
        'telefono',
        'id_producto',
        'gmail',
        'fecha_registro'
      ]
    });
    if (proveedores) {
      res.status(200).json(proveedores);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

exports.update = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });

    await proveedor.update(req.body);
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proveedor' });
  }
};

exports.delete = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: 'Proveedor no encontrado' });

    await proveedor.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};
