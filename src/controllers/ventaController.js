const { Venta, Usuario, Marca, Categoria, Modelo, Color, Talla,Producto } = require('../models');

exports.create = async (req, res) => {
  try {
    const venta = await Venta.create(req.body);
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
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
        },
        { model: Usuario, as: 'Usuario', attributes: ['id_usuario','nombre','apellido','rol','email'] },
      ],
      attributes: [
        'id_ventas',
        'cantidad',
        'total',
        'pago_con',
        'metodo_pago',
        'cambio',
        'fecha_registro',
      ]
    });
    
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

exports.getById = async (req, res) => {
  try {
    const ventas = await Venta.findOne({
      where: { id_ventas: req.params.id },
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
        },
        { model: Usuario, as: 'Usuario', attributes: ['id_usuario','nombre','apellido','rol','email'] },
      ],
      attributes: [
        'id_ventas',
        'cantidad',
        'total',
        'pago_con',
        'metodo_pago',
        'cambio',
        'fecha_registro',
      ]
    });
    if (ventas) {
      res.status(200).json(ventas);
    } else {
      res.status(404).json({ error: 'registro de venta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la venta' });
  }
};

exports.update = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id);
    if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });

    await venta.update(req.body);
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
};

exports.delete = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id);
    if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });

    await venta.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
};
